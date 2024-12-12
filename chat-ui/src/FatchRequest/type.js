async function fetchAllTypes() {
    try {
        const response = await fetch('http://localhost:5000/api/type', { // Full URL to your Flask server
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const types = await response.json();
        console.log('Fetched types:', types);
        return(types)
    } catch (error) {
        console.error('Error fetching types:', error.message);
    }
}

// fetchAllTypes()
//     .then(r => console.log(r))
//     .catch(e => console.log(e))

export default fetchAllTypes
