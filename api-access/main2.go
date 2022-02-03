package main

import (
	"context"
	//	"encoding/json"
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

type CaseDB struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Shape     string `json:"shape"`
	Width     int    `json:"width"`
	Dial_size int    `json:"dialsize"`
	Material  string `json:"material"`
	Finish    string `json:"finish"`
	Movements string `json:"movements"`
	Colour    string `json:"colour"`
}

var mg MongoInstance

const dbName = "sample_weatherdata"
const collectionName = "person"
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

	app.Post("/createDB", func(c *fiber.Ctx) error {

		//collection, err := mg.Db.Collection(CollectionName)
		//if err != nil {
		//	c.Status(500).Send(err)
		//	return
		//}

		casedb := new(CaseDB)

		if err := c.BodyParser(casedb); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		res, err := mg.Db.Collection("Case").InsertOne(c.Context(), casedb)
		if err != nil {
			return c.Status(500).SendString(err.Error())

		}

		filter := bson.D{{Key: "_id", Value: res.InsertedID}}
		personRecord := mg.Db.Collection("Case").FindOne(c.Context(), filter)

		p := &CaseDB{}
		personRecord.Decode(p)

		return c.Status(201).JSON(p)

	})

	app.Listen(":3000")
}
