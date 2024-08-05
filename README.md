# JavaScript Final Sprint Project

## Overview
This project is a part of the JavaScript final sprint module. It demonstrates the ability to create, read, and display JSON data using JavaScript. The primary focus of this project is to work with JSON files, JavaScript functions, and HTML to display data dynamically in a web browser.

## Features
1. **JSON File Creation:** The project includes a `data.json` file that contains an array of records, each with detailed information about individuals.
2. **Data Fetching:** The JavaScript code fetches the JSON data using the Fetch API.
3. **Dynamic HTML Updates:** The fetched data is processed and displayed dynamically in the browser window using JavaScript functions.
4. **Console Logging:** The project logs relevant information to the console for debugging and verification purposes.

## JSON Data Structure
The JSON data includes the following fields for each individual:
- `firstName`: The first name of the individual.
- `lastName`: The last name of the individual.
- `age`: The age of the individual.
- `birthday`: The birth date of the individual.
- `maritalStatus`: The marital status of the individual.
- `gender`: The gender of the individual.
- `city`: The city where the individual resides.

### Example JSON Data
```json
[
    {
        "id": 1,
        "firstName": "Alice",
        "lastName": "Smith",
        "age": 25,
        "birthday": "1999-01-15",
        "maritalStatus": "Single",
        "gender": "Female",
        "city": "New York"
    },