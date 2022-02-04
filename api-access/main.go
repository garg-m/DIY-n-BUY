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
	Frequency int    `json:"frequency"`
	ImagePath string `json:"imagepath"`
}

type Crystal struct {
	ID         string  `json:"id,omitempty" bson:"_id,omitempty"`
	Material   string  `json:"material`
	DomeHeight float32 `json:"domeheight"`
	Cyclops    bool    `json:"cyclops"`
	ImagePath  string  `json:"imagepath"`
}

type Crown struct {
	ID        string `json:"id,omitempty" bson:"_id,omitempty"`
	Type      string `json:"type"`
	Movement  string `json:"movement"`
	Material  string `json:"material`
	Finish    string `json:"material`
	Color     string `json:"color"`
	ImagePath string `json:"imagepath"`
}

type BezelRing struct {
	ID                  string  `json:"id,omitempty" bson:"_id,omitempty"`
	InnerDiameter       float32 `json:"innerdiameter"`
	OuterDiameter       float32 `json:"outerdiameter"`
	InnerInsertDiameter float32 `json:"innerinsertdiameter"`
	OuterInsertDiameter float32 `json:"outerinsertdiameter"`
	Type                string  `json:"type"`
	Style               string  `json:"style"`
	Material            string  `json:"material"`
	Finish              string  `json:"finish"`
	Color               string  `json:"color"`
	ImagePath           string  `json:"imagepath"`
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

type Hand struct {
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

	app.Post("/movement", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("movements")

		// New Employee struct
		movementObj := new(Movement)
		// Parse body into struct
		if err := c.BodyParser(movementObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		movementObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), movementObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdMovement := &Movement{}
		createdRecord.Decode(createdMovement)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdMovement)
	})

	app.Post("/crystal", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("crystals")

		// New Employee struct
		crystalObj := new(Crystal)
		// Parse body into struct
		if err := c.BodyParser(crystalObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		crystalObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), crystalObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdCrystal := &Crystal{}
		createdRecord.Decode(createdCrystal)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdCrystal)
	})

	app.Post("/crown", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("crowns")

		// New Employee struct
		crownObj := new(Crown)
		// Parse body into struct
		if err := c.BodyParser(crownObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		crownObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), crownObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdCrown := &Crown{}
		createdRecord.Decode(createdCrown)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdCrown)
	})

	app.Post("/bezelring", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("bezelRings")

		// New Employee struct
		bezelRingObj := new(BezelRing)
		// Parse body into struct
		if err := c.BodyParser(bezelRingObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		bezelRingObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), bezelRingObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdBezelRing := &BezelRing{}
		createdRecord.Decode(createdBezelRing)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdBezelRing)
	})

	app.Post("/bezelinsert", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("bezelInserts")

		// New Employee struct
		bezelInsertObj := new(BezelInsert)
		// Parse body into struct
		if err := c.BodyParser(bezelInsertObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		bezelInsertObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), bezelInsertObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdBezelInsert := &BezelInsert{}
		createdRecord.Decode(createdBezelInsert)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdBezelInsert)
	})

	app.Post("/chapterring", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("chapterRings")

		// New Employee struct
		chapterRingObj := new(ChapterRing)
		// Parse body into struct
		if err := c.BodyParser(chapterRingObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		chapterRingObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), chapterRingObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdChapterRing := &ChapterRing{}
		createdRecord.Decode(createdChapterRing)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdChapterRing)
	})

	app.Post("/dial", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("dials")

		// New Employee struct
		dialObj := new(Dial)
		// Parse body into struct
		if err := c.BodyParser(dialObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		dialObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), dialObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdDial := &Dial{}
		createdRecord.Decode(createdDial)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdDial)
	})

	app.Post("/strap", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("straps")

		// New Employee struct
		strapObj := new(Dial)
		// Parse body into struct
		if err := c.BodyParser(strapObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		strapObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), strapObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdStrap := &Strap{}
		createdRecord.Decode(createdStrap)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdStrap)
	})

	app.Post("/hand", func(c *fiber.Ctx) error {
		collection := mg.Db.Collection("hands")

		// New Employee struct
		handObj := new(Hand)
		// Parse body into struct
		if err := c.BodyParser(handObj); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// force MongoDB to always set its own generated ObjectIDs
		handObj.ID = ""

		// insert the record
		insertionResult, err := collection.InsertOne(c.Context(), handObj)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		// get the just inserted record in order to return it as response
		filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
		createdRecord := collection.FindOne(c.Context(), filter)

		// decode the Mongo record into Employee
		createdHand := &Hand{}
		createdRecord.Decode(createdHand)

		// return the created Employee in JSON format
		return c.Status(201).JSON(createdHand)
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
