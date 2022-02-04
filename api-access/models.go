package models

import "fmt"

func init() {
	fmt.Println("Model classes initialized")

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
