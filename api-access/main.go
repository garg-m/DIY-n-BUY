package main

import (
	"context"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var mg MongoInstance

const dbName = "watchmod_inventory"
const mongoURI = "mongodb+srv://diy-n-buy:xuCRbizpdhOI3pAF@cluster0.fwokq.mongodb.net/" + dbName

//?retryWrites=true&w=majority

func main() {
	app := Setup()
	app.Use(cors.New())
	app.Use(cors.New(cors.Config{
		//AllowOrigins: "https://gofiber.io, https://gofiber.net",
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET,POST,PUT,DELETE",
	}))
	log.Fatal(app.Listen(":3001"))
}

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

func Setup() *fiber.App {
	// Connect to the database
	if err := Connect(); err != nil {
		log.Fatal(err)
	}

	//Create a Fiber app
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Get("/getAll/:part", func(c *fiber.Ctx) error {

		partName := c.Params("part")
		//fmt.Println(partName)

		query := bson.D{{}}

		cursor, err := mg.Db.Collection(partName).Find(c.Context(), query)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		var parts []bson.M

		if err := cursor.All(c.Context(), &parts); err != nil {
			return c.Status(500).SendString(err.Error())
		}

		return c.JSON(parts)
	})

	app.Post("/create/:part", func(c *fiber.Ctx) error {

		partName := c.Params("part")

		collection := mg.Db.Collection(partName)

		// New part struct
		partObj := make(bson.M)

		// Parse body into struct
		if err := c.BodyParser(&partObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), partObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		//fmt.Println(partObj)

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Obj
		createdObj := &bson.M{}
		createdRecord.Decode(createdObj)

		// return the created Employee in JSON format
		//return c.Status(201).JSON(createdObj)
		return c.Status(200).SendString("record added")
	})

	app.Put("/update/:part/:id", func(c *fiber.Ctx) error {

		idParam := c.Params("id")
		partName := c.Params("part")
		collection := mg.Db.Collection(partName)

		partId, err := primitive.ObjectIDFromHex(idParam)

		// the provided ID might be invalid ObjectID
		if err != nil {
			return c.SendStatus(400)
		}

		// New part struct
		partObj := make(bson.M)

		// Parse body into struct
		if err := c.BodyParser(&partObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		//fmt.Println(partId)

		// Find the casedb and update its data
		query := bson.D{{Key: "_id", Value: partId}}
		update := bson.D{
			{Key: "$set",
				Value: partObj,
			},
		}
		err = collection.FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			// ErrNoDocuments means that the filter did not match any documents in the collection
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(404)
			}
			return c.SendStatus(500)
		}

		// return the updated casedb
		return c.Status(200).SendString("record updated")
	})

	app.Delete("/delete/:part/:id", func(c *fiber.Ctx) error {

		partID, err := primitive.ObjectIDFromHex(c.Params("id"))
		if err != nil {
			return c.SendStatus(400)
		}

		query := bson.D{{Key: "_id", Value: partID}}
		result, err := mg.Db.Collection("cases").DeleteOne(c.Context(), &query)
		if err != nil {
			return c.SendStatus(500)
		}

		if result.DeletedCount < 1 {
			return c.SendStatus(404)
		}

		return c.Status(200).SendString("record deleted")

	})

	return app
}
