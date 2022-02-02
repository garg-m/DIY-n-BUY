package main

import (
	"context"
	"fmt"
	"log"
	"strconv"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/gofiber/fiber/v2"
)

type MongoInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var mg MongoInstance

const dbName = "sample_weatherdata"
const mongoURI = "mongodb+srv://diy-n-buy:xuCRbizpdhOI3pAF@cluster0.fwokq.mongodb.net/sample_weatherdata?retryWrites=true&w=majority"

func Connect() error {
	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	db := client.Database(dbName)

	if err != nil {
		return err
	}

	mg = MongoInstance{
		Client: client,
		Db:     db,
	}

	return nil
}

func main() {

	// Connect to the database
	if err := Connect(); err != nil {
		log.Fatal(err)
	}

	//Create a Fiber app
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {

		return c.SendString("Hello, World!")
	})

	app.Get("/dataCount", func(c *fiber.Ctx) error {

		// query := bson.D{{}}
		// cursor, err := mg.Db.Collection("data").Find(c.Context(), query)
		// if err != nil {
		// 	return c.Status(500).SendString(err.Error())
		// }

		filter := bson.D{{}}
		count, err := mg.Db.Collection("data").CountDocuments(context.TODO(), filter)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		result := strconv.FormatInt(count, 10)
		fmt.Println(result)

		return c.Status(500).SendString(result)

	})

	app.Listen(":3000")
}
