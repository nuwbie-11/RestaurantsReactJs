import React, { useState, useEffect } from "react";

function Detail(props) {
  const prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];
  const isOpen = [false, true];

  const getRandomIndex = (maxIndex)=>{
    return Math.floor(Math.random() * maxIndex);
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const uri = "https://restaurant-api.dicoding.dev/detail/" + props.id;
      const response = await fetch(uri);
      const jsonData = await response.json();
      console.log(jsonData["restaurant"]);
      setPosts(jsonData["restaurant"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const stats = isOpen[getRandomIndex(isOpen.length)]
  
  return (
    <div className="flex justify-between">
        <p className="text-sm">{posts.categories[0].name} - {prices[getRandomIndex(prices.length)]}</p>
        <p className= {stats ? 'text-green-800' : 'text-red-800' }>{stats ? 'Open Now': 'Not Open'}</p>
    </div>
);
}

export default Detail;
