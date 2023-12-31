import React, { Component } from "react";

import RestaurantDetails from "./RestaurantDetails";

class RestaurantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data });
    }
    if (this.state.data !== prevState.data) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="md:container restaurant-sections px-8 mx-auto">
        <h1 className="text-5xl pb-8">All restaurants</h1>
        {this.props.data ? (
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center content-between">
            {this.props.data.map((item, index) => (
              //   <li key={index}>{item}</li>

              <RestaurantDetails id={item} customParam={this.props.customParam}/>
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
