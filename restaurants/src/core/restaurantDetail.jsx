import React, { Component } from "react";
import StarRating from "../components/Stars";
import { Link } from "react-router-dom";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      details: null,
      price: "",
      status: "",
    };
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.fetchDetails();
      this.getCustomPrices();
      this.getCustomStatus();
    }, 20);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearTimeout(this.timerId);
  }

  getRandomIndex = (maxIndex) => {
    return Math.floor(Math.random() * maxIndex);
  };

  getCustomPrices() {
    const prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];

    const randomIndexes = this.getRandomIndex(prices.length);

    this.setState({ price: prices[randomIndexes] });
  }

  getCustomStatus() {
    const isOpen = [false, true];

    const randomIndexes = this.getRandomIndex(isOpen.length);

    this.setState({ status: isOpen[randomIndexes] });
  }

  fetchDetails = async () => {
    try {
      const uri = "https://restaurant-api.dicoding.dev/detail/" + this.state.id;
      const response = await fetch(uri);
      const jsonData = await response.json();
      //   console.log(jsonData["restaurant"]);
      this.setState({ details: jsonData["restaurant"] });
      //   console.log(this.state.details);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  filterByPrice(props) {}

  aboutShows() {
    return (
      <div className="">
        {this.state.details ? (
          <div className="md:container md:mx-auto px-8 py-8">
            <div className="pb-3">
                <h1 className="text-5xl pb-1">{this.state.details["name"]}</h1>
                <p>Rating : {this.state.details['rating']} <StarRating className="bg-white" rating={this.state.details["rating"]} /> </p>
            </div>
            <br />
            <p className="w-4/5">
              {this.state.details["description"]}
            </p>

            <div className="">
                <h1 className="text-xl py-8 font-bold">
                    Customer Review
                </h1>
                    

                <p>
                    {this.state.details['customerReviews'][0].name} : {this.state.details['customerReviews'][0].review}
                </p>

            </div>
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </div>
    );
  }

  render() {
    console.log(this.props.isAbout);
    return (
      <div>
        {this.props.isAbout ? (
          this.aboutShows()
        ) : (
          <div>
            {this.state.details ? (
              <div className="py-8">
                <img
                  className="w-72 h-52 rounded"
                  src={
                    "https://restaurant-api.dicoding.dev/images/medium/" +
                    this.state.details["pictureId"]
                  }
                  alt=""
                  loading="lazy"
                />

                <h2 className="pt-3">{this.state.details["name"]}</h2>
                <StarRating rating={this.state.details["rating"]} />
                <div className="flex justify-between">
                  <p className="text-sm">
                    {this.state.details.categories[0].name} - {this.state.price}
                  </p>
                  <p
                    className={`font-bold ${
                      this.state.status ? " text-green-800" : " text-red-800"
                    }`}
                  >
                    {this.state.status ? "Open Now" : "Not Open"}
                  </p>
                </div>

                <button
                  id={this.state.details["id"]}
                  className="container bg-purple-700 hover:bg-purple-950 px-5 py-2 text-white rounded"
                >
                  <Link
                    to={{
                      pathname: "/about",
                      search: `?id=${this.state.id}`,
                    }}
                  >
                    Learn More
                  </Link>
                </button>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default RestaurantDetails;
