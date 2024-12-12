async function fetchCitiesByType(typeId) {
    try {
        const response = await fetch(`http://localhost:5000/api/city/city_by_type/${typeId}`, { // URL with typeId
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cities = await response.json();
        console.log('Fetched cities:', cities);
        return cities; // return the list of cities
    } catch (error) {
        console.error('Error fetching cities:', error.message);
    }
}

// Example Usage:
// const typeId = 1; // Pass the type ID you want to fetch cities for
// fetchCitiesByType(typeId)
//     .then(cities => console.log(cities)) // Log the fetched cities
//     .catch(e => console.log(e)); // Handle errors

export default fetchCitiesByType
