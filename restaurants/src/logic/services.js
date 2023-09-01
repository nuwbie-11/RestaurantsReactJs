
let restaurantIds = null;

export const fetchIds = async () => {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const jsonData = await response.json();
    restaurantIds = jsonData;
    console.log('restaurantIds');
    console.log(restaurantIds);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const getrestaurantIds = () => restaurantIds;