import { useState } from "react";

// export const fetchIds = async () => {
//   try {
//     const response = await fetch('https://restaurant-api.dicoding.dev/list');
//     const jsonData = await response.json();
//     restaurantIds = jsonData;
//     console.log('restaurantIds');
//     console.log(restaurantIds);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// export const getrestaurantIds = () => restaurantIds;

export async function useFetchIds(){
  const {data,setData} = useState(null)
  try{
    const response = await fetch ('https://restaurant-api.dicoding.dev/list');
    const data = await response.json();
    setData(data);

  }catch(err){
    console.error('Error fetching data:', err);
  }
  
  return data;
} 