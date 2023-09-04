import React, { Component } from "react";
import StarRating from "../components/Stars";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleUser} from '@fortawesome/free-solid-svg-icons';

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      details: null,
      price: "",
      status: "",
      customDetailsFilter: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // Do not run Custom details outside didmount. so the prices and status doesnt change. except from page load
      this.getCustomPrices();
      this.getCustomStatus();
    }, 5);

    this.timerId = setTimeout(() => {
      this.fetchDetails();
    }, 50);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.setState({ id: this.props.id });
    }
    if (this.state.id !== prevState.id) {
      this.fetchDetails();
      // this.forceUpdate();
    }
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearTimeout(this.timerId);
  }

  // Custom Details Maker
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
  // End Of Custom Details

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

  showDetails() {
    return (
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
    );
  }

  aboutShows() {
    return (
      <div>
        {this.state.details ? (
          <div className="md:container md:mx-auto p-8">
            <div className="header-section flex items-center gap-x-8">
              <Link
                to={{
                  pathname: "/",

                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <h1 className="text-5xl font-semibold">
                {this.state.details.name}
              </h1>

              <p
                className={`px-5 py-1 rounded-full text-xs mt-2 text-white ${
                  this.state.details.rating < 3
                    ? "bg-red-400"
                    : "bg-yellow-400"
                } `}
              >
                <span>&#9733; </span>{this.state.details.rating}
              </p>
            </div>

            <div className="detail-section pt-8 flex justify-between py-3">
              <div>
                <p className="description">{this.state.details["description"]}</p>
                <div className="tagged-in flex gap-x-2 pt-3">
                  {this.state.details.categories.map((item,ix) => {
                    return(<p className={
                      `${ix !== 0 ? "bg-sky-400" : "bg-lime-400" } italic text-xs px-5 py-1 rounded-full text-white`
                    }>{this.state.details.categories[ix].name}</p>)
                  })}

                </div>

              </div>

              <img
                className="w-72 h-52 rounded"
                src={
                  "https://restaurant-api.dicoding.dev/images/medium/" +
                  this.state.details["pictureId"]
                }
                alt=""
                loading="lazy"
              />
            </div>

            <hr />

            <div className="customer-section">
              <h3 className="text-xl py-8 font-bold">Customer Review</h3>

              <div className="grid grid-cols-2 gap-y-3">
                
                {
                  this.state.details.customerReviews.map((item,ix)=>{
                    return (
                      <div className="flex gap-x-2 items-center py-4">
                        <div className="">
                          <FontAwesomeIcon icon={faCircleUser} size='2xl' style={{color: "#858585",}} />
                        </div>

                        <div className="">
                          <p className="italic font-bold text-xs" >{this.state.details.customerReviews[ix].name}</p>
                          <p className="text-lg" >{this.state.details.customerReviews[ix].review}</p>

                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </div>
    );
  }

  render() {
    // console.log(this.props.customParam.isOpen)
    if (this.state.details) {
      if (this.props.isAbout) {
        return <div>{this.aboutShows()}</div>;
      }

      if (
        this.props.customParam.price !== "" &&
        this.props.customParam.isOpen !== ""
      ) {
        if (
          this.props.customParam.price === this.state.price &&
          JSON.parse(this.props.customParam.isOpen) ===
            JSON.parse(this.state.status)
        ) {
          return <div>{this.showDetails()}</div>;
        }
        return null;
      }

      if (this.props.customParam.price !== "") {
        if (this.props.customParam.price === this.state.price) {
          return <div>{this.showDetails()}</div>;
        }
        return null;
      }
      if (this.props.customParam.isOpen !== "") {
        if (
          JSON.parse(this.props.customParam.isOpen) ===
          JSON.parse(this.state.status)
        ) {
          // console.log(this.props.customParam.isOpen);
          // console.log(this.state.status)
          return <div>{this.showDetails()}</div>;
        }
        return null;
      }

      return <div>{this.showDetails()}</div>;
    }
    return <p>Loading..</p>;
  }
}

export default RestaurantDetails;
