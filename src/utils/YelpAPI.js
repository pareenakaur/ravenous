//Obtain apiKey from Yelp: https://docs.developer.yelp.com/docs/getting-started
const apiKey = '<yourAPIKey>';


//create module to retrieve business listings from Yelp API using a search function. will contains a function that retrieves business listings based on search terms, location, and sort option.

const Yelp = {
    search(term, location, option){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${option}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request Failed!');
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    },
};

export default Yelp;
