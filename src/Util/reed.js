const apiKey = 'f627d6d7-5443-4701-a888-0a36515c6b9f '; // Reed api key supplied by website

const Reed = {
 async search(keywords, location, distance) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/{versionnumber}/search?keywords=${keywords}&locationName=${location}&distanceFromLocation=${distance}in miles`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse) {
            console.log(jsonResponse)
            return jsonResponse
        }
}
};

export default Reed;