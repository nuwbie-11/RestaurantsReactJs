import React, { Component } from "react";
import Detail from "../components/details";

import RestaurantDetails from "./restaurantDetail";



class RestaurantList extends Component {
  
  render() {
    return (
      <div className="container restaurant-sections px-8">
        <h1 className="text-5xl pb-8">All restaurants</h1>
        {this.props.data ? (
          <div className="grid grid-cols-4 justify-items-center">
            {this.props.data.map((item, index) => (
            //   <li key={index}>{item}</li>

              <RestaurantDetails id={item} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
