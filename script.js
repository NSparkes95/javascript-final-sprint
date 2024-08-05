// Function to fetch and siplay JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Displaying JSON data in the console
        console.log("JSON data loaded successfully:", data);

        // Displaying names in the console
        data.forEach(record => {
            console.log(`Name: ${record.firstName} ${record.lastName}`)
        });

        // Displaying processed data in the browser window
        document.body.innerHTML += `<h2>Names:</h2>${getNamesAsList(data)}`;
        document.body.innerHTML += `<h2>Average Age:</h2><p>${getAverageAge(data)}</p>`;
        document.body.innerHTML += `<h2>Cities:</h2>${getCitiesAsList(data)}`;
        document.body.innerHTML += `<h2>Details:</h2>${getDetailsAsList(data)}`;
    })
    .catch(error => {
        console.error("Error loading JSON data:",error);
    });

// Function to get a list of names
function getNamesAsList(data) {
    return `<ul>${data.map(record => `<li>${record.firstName} ${record.lastName}</li>`).join(' ')}</ul>`;
}

// Function to calculate the average age
function getAverageAge(data) {
    let totalAge = data.reduce((sum, record) => sum + record.age, 0);
    return (totalAge / data.length).toFixed(2); // Rounded to 2 decimal places
}

// Function to get a numbered list of cities
function getCitiesAsList(data) {
    return `<ol>${data.map(record => `<li>${record.city}</li>`).join(' ')}</ol>`;
}
 
// Function to get a list of detailed information
function getDetailsAsList(data) {
    return `<ul>${data.map(record =>
        `<li>
            Name: ${record.firstName} ${record.lastName}<br>
            Birthday: ${record.birthday}<br>
            Marital Status: ${record.maritalStatus}<br>
            Gender: ${record.gender}<br>
            City: ${record.city}
            <br> 
        </li>`).join(' ')}</ul>`;
}