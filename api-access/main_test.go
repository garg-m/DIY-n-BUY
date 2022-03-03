package main

import (
	"bytes"
	"io/ioutil"
	"net/http"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIndexRoute(t *testing.T) {
	// Define a structure for specifying input and output
	// data of a single test case. This structure is then used
	// to create a so called test map, which contains all test
	// cases, that should be run for testing this function
	tests := []struct {
		description string

		// Test input
		route string

		// Request Type and Info
		requestType string
		requestBody []byte

		// Expected output
		expectedError bool
		expectedCode  int
		expectedBody  string
	}{
		{
			description:   "test connection",
			route:         "/",
			requestType:   "GET",
			requestBody:   nil,
			expectedError: false,
			expectedCode:  200,
			expectedBody:  "OK",
		},
		{
			description: "create a part",
			route:       "/create/cases/",
			requestType: "POST",
			requestBody: []byte(`{
				"shape": "Round",
				"width": 40,
				"dialsize": 38,
				"material": "Titanium",
				"finish": "Brushed",
				"movement": "True GMT",
				"color": "Black",
				"imagepath": "dumbolumbojumboxyz"
			}`),
			expectedError: false,
			expectedCode:  200,
			expectedBody:  "record added",
		},
		{
			description: "update a part",
			route:       "/update/cases/6221372ab783030bc4d185a9",
			requestType: "PUT",
			requestBody: []byte(`{
				"shape": "Round",
				"width": 40,
				"dialsize": 38,
				"material": "Titanium",
				"finish": "Brushed",
				"movement": "True GMT",
				"color": "Black",
				"imagepath": "dumbolumbojumboxyz"
			}`),
			expectedError: false,
			expectedCode:  200,
			expectedBody:  "record updated",
		},
		{
			description:   "delete a part",
			route:         "/delete/cases/62213689dfe0cb45d73842e1",
			requestType:   "DELETE",
			requestBody:   nil,
			expectedError: false,
			expectedCode:  200,
			expectedBody:  "record deleted",
		},
	}

	// Setup the app as it is done in the main function
	app := Setup()

	// Iterate through test single test cases
	for _, test := range tests {
		// Create a new http request with the route
		// from the test case

		req, _ := http.NewRequest(
			test.requestType,
			test.route,
			bytes.NewBuffer(test.requestBody),
		)

		req.Header.Set("Content-Type", "application/json; charset=UTF-8")

		// Perform the request plain with the app.
		// The -1 disables request latency.
		res, err := app.Test(req, -1)

		// verify that no error occured, that is not expected
		assert.Equalf(t, test.expectedError, err != nil, test.description)

		// As expected errors lead to broken responses, the next
		// test case needs to be processed
		if test.expectedError {
			continue
		}

		// Verify if the status code is as expected
		assert.Equalf(t, test.expectedCode, res.StatusCode, test.description)

		// Read the response body
		body, err := ioutil.ReadAll(res.Body)

		// Reading the response body should work everytime, such that
		// the err variable should be nil
		assert.Nilf(t, err, test.description)

		// Verify, that the reponse body equals the expected body
		assert.Equalf(t, test.expectedBody, string(body), test.description)
	}
}
