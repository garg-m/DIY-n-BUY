package main

import (
	"context"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var mg MongoInstance

const dbName = "watchmod_inventory"
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

type Case struct {
	ID        string  `json:"id,omitempty" bson:"_id,omitempty"`
	Shape     string  `json:"shape"`
	Width     float32 `json:"width"`
	DialSize  float32 `json:"dialsize"`
	Material  string  `json:"material"`
	Finish    string  `json:"finish"`
	Movement  string  `json:"movements"`
	Color     string  `json:"color"`
	ImagePath string  `json:"imagepath"`
}

type CaseBack struct {
	ID          string `json:"id,omitempty" bson:"_id,omitempty"`
	Material    string `json:"material`
	Finish      string `json:"material`
	Inscription string `json:"inscription"`
	ImagePath   string `json:"imagepath"`
}

type Movement struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Frequency int    `json:"vibrations"`
	ImagePath string `json:"imagepath"`
}

type Crystal struct {
	ID         string `json:"id,omitempty" bson:"_id,omitempty"`
	Material   string `json:"material`
	DomeHeight string `json:"domeheight"`
	Cyclops    bool   `json:"cyclops"`
	ImagePath  string `json:"imagepath"`
}

type Crown struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Type      string `json:"type"`
	Movement  string `json:"movements"`
	Material  string `json:"material`
	Finish    string `json:"material`
	Color     string `json:"color"`
	ImagePath string `json:"imagepath"`
}

type BezelInsert struct {
	ID            string  `json:"id,omitempty" bson:"_id,omitempty"`
	InnerDiameter float32 `json:"innerdiameter"`
	OuterDiameter float32 `json:"outerdiameter"`
	Type          string  `json:"type"`
	Style         string  `json:"style"`
	Material      string  `json:"material"`
	Finish        string  `json:"finish"`
	Color         string  `json:"color"`
	ImagePath     string  `json:"imagepath"`
}

type ChapterRing struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Type      string `json:"type"`
	Style     string `json:"style"`
	Material  string `json:"material"`
	Finish    string `json:"finish"`
	Color     string `json:"color"`
	ImagePath string `json:"imagepath"`
}

type Dial struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Type      string `json:"type"`
	Style     string `json:"style"`
	Material  string `json:"material"`
	Finish    string `json:"finish"`
	Color     string `json:"color"`
	ImagePath string `json:"imagepath"`
}

type Strap struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Type      string `json:"type"`
	Style     string `json:"style"`
	Material  string `json:"material"`
	Finish    string `json:"finish"`
	Color     string `json:"color"`
	ImagePath string `json:"imagepath"`
}

type Hands struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Type      string `json:"type"`
	Style     string `json:"style"`
	Material  string `json:"material"`
	Finish    string `json:"finish"`
	Color     string `json:"color"`
	ImagePath string `json:"imagepath"`
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

	app.Post("/case", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("cases")

		// New Employee struct
		caseObj := new(Case)
		// Parse body into struct
		if err := c.BodyParser(caseObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		caseObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), caseObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdCase := &Case{}
		createdRecord.Decode(createdCase)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdCase)
	})

	app.Post("/caseback", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("casebacks")

		// New Employee struct
		caseBackObj := new(CaseBack)
		// Parse body into struct
		if err := c.BodyParser(caseBackObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		caseBackObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), caseBackObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdCaseBack := &CaseBack{}
		createdRecord.Decode(createdCaseBack)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdCaseBack)
	})

	app.Listen(":3000")
}

//Junk
// app.Get("/datacount", func(c *fiber.Ctx) error {

// 	filter := bson.D{{}}
// 	count, err := mg.Db.Collection("data").CountDocuments(context.TODO(), filter)
// 	if err != nil {
// 		return c.Status(500).SendString(err.Error())
// 	}

// 	result := strconv.FormatInt(count, 10)
// 	fmt.Println(result)

// 	return c.Status(500).SendString(result)

// })
