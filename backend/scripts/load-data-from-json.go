package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

// Contact represents the structure of our JSON data
type Contact struct {
	Name  string `json:"name"`
	Phone string `json:"phone"`
}

func main() {

	// Connection string for PostgreSQL
	connStr := "host=localhost port=5400 user=admin dbname=phonebook password=admin sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Read the JSON file
	data, err := os.ReadFile("../data/phonebook.json")
	if err != nil {
		log.Fatal(err)
	}

	// Unmarshal JSON data
	var contacts []Contact
	err = json.Unmarshal(data, &contacts)
	if err != nil {
		log.Fatal(err)
	}

	// Insert data into PostgreSQL
	for _, contact := range contacts {
		_, err := db.Exec("INSERT INTO contacts (name, phone) VALUES ($1, $2)", contact.Name, contact.Phone)
		if err != nil {
			log.Fatal(err)
		}
	}

	fmt.Println("Data inserted successfully!")
}
