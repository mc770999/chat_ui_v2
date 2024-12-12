async function fetchFlights(cityId, startDate, endDate) {
    try {
        const response = await fetch(`http://localhost:5000/api/flights/search-flights/${cityId}/${startDate}/${endDate}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const flights = await response.json();
        console.log('Fetched flights:', flights);
        return flights; // return the list of flights
    } catch (error) {
        console.error('Error fetching flights:', error.message);
    }
}

// Example Usage:
// const cityId = 1; // Pass the city ID
// const startDate = '2024-12-20'; // Pass the start date in YYYY-MM-DD format
// const endDate = '2024-12-25'; // Pass the end date in YYYY-MM-DD format
// fetchFlights(cityId, startDate, endDate)
//     .then(flights => console.log(flights)) // Log the fetched flights
//     .catch(e => console.log(e)); // Handle errors

export default fetchFlights