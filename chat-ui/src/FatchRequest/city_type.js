async function fetchCityTypeDates(cityId, typeId) {
    try {
        debugger
        const response = await fetch(`http://localhost:5000/api/city_type/city_type_dates/${cityId}/${typeId}`, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched city type dates:', data);
        return data; // return the date range data
    } catch (error) {
        console.error('Error fetching city type dates:', error.message);
    }
}

// Example Usage:
// const cityId = 1; // Pass the city ID
// const typeId = 3; // Pass the type ID
// fetchCityTypeDates(cityId, typeId)
//     .then(data => console.log(data)) // Log the fetched data
//     .catch(e => console.log(e)); // Handle errors

export default fetchCityTypeDates