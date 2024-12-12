export const cities = [
  {
      "id": 1,
      "name": "Tokyo",
      "country": "Japan",
      "population": 37468000,
      "img_url": "https://images.squarespace-cdn.com/content/v1/5bbcf00a9b8fe874ed2f03d0/1599184835862-QUEZ741IHO7A8U1QP8AI/Shinjuku+Tokyo+Japan.jpeg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Tokyo"
  },
  {
      "id": 2,
      "name": "Delhi",
      "country": "India",
      "population": 28514000,
      "img_url": "https://cdn.getyourguide.com/img/location/533591d4b943b.jpeg/99.jpg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Delhi"
  },
  {
      "id": 3,
      "name": "Shanghai",
      "country": "China",
      "population": 25582000,
      "img_url": "https://www.globaltimes.cn/Portals/0/attachment/2024/2024-10-27/707d7b2e-cbf7-4dd4-8c6d-f5f245b87f61.jpeg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Shanghai"
  },
  {
      "id": 4,
      "name": "São Paulo",
      "country": "Brazil",
      "population": 21650000,
      "img_url": "https://www.lufthansa.com/content/dam/lh/article-images/south-america/lh_blog_sao-paulo_river_bridge_getty878377556_1920x1080.jpg.transform/lh-dcep-transform-width-1440/img.jpg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/São_Paulo"
  },
  {
      "id": 5,
      "name": "Mexico City",
      "country": "Mexico",
      "population": 21581000,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iSsnq7JB2km9INKqO4E-zdrUb7ETM-owzw&s",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Mexico_City"
  },
  {
      "id": 6,
      "name": "Cairo",
      "country": "Egypt",
      "population": 20076000,
      "img_url": "https://i0.wp.com/www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm.jpg?fit=2424%2C1500&ssl=1",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Cairo"
  },
  {
      "id": 7,
      "name": "Mumbai",
      "country": "India",
      "population": 19980000,
      "img_url": "https://i.natgeofe.com/n/a3ab98d9-e181-4ab3-a888-742c65acaf26/gateway-of-india-mumbai-india_3x2.jpg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Mumbai"
  },
  {
      "id": 8,
      "name": "Beijing",
      "country": "China",
      "population": 19618000,
      "img_url": "https://cdn.britannica.com/20/20120-050-89764C76/Tiananmen-entryway-Imperial-City-China-Beijing.jpg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Beijing"
  },
  {
      "id": 9,
      "name": "Dhaka",
      "country": "Bangladesh",
      "population": 19578000,
      "img_url": "https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Dhaka"
  },
  {
      "id": 10,
      "name": "Osaka",
      "country": "Japan",
      "population": 19281000,
      "img_url": "https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/06/osaka-dotonbori-iStock-1138049211-1024x683.jpg",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Osaka"
  }
]

const cityHandler = async (message) => {
    try {
        const response = await fetch(`https://api.example.com/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: message }),
        });
        const data = await response.json();
        return{ type: "api", content: data.response };
      } catch (error) {
        return { type: "api", content: cities };
      }
}

export default cityHandler