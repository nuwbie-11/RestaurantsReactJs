import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";

import RestaurantList from "./RestaurantsList";
import Categories from "./Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Dropdowns from "../components/Dropdowns";
import Checkbox from "../components/Checkboxes";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      param: this.props.params,
      isFiltered: false,
      data: null,
      priceOptions: {
        1: "$",
        2: "$$",
        3: "$$$",
        4: "$$$$",
        5: "$$$$$",
      },
      defaultPriceOptions: {
        default: "Price",
      },
    };
  }
  Params() {}

  async sendQuery() {
    try {
      const uri = `https://restaurant-api.dicoding.dev/search?q=${this.state.params["cate"]}`;
      const response = await fetch(uri);
      const jsonData = await response.json();
      const fixedData = jsonData["restaurants"];

      this.setData(fixedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if specific props or state values have changed
    if (this.props.params !== prevProps.params) {
      //   console.log(this.props.params);
      this.setState({ params: this.props.params });
    }

    if (this.state.params !== prevState.params) {
      // Perform some action based on state changes
      //   console.log(this.state.params);
      this.sendQuery();
      this.forceUpdate();
    }
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.fetchData();
    }, 20);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearTimeout(this.timerId);
  }

  async fetchData() {
    try {
      const uri = "https://restaurant-api.dicoding.dev/list";
      const response = await fetch(uri);
      const jsonData = await response.json();
      const fixedData = jsonData["restaurants"];

      this.setData(fixedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  setData(props) {
    let temp = [];
    for (let index = 0; index < props.length; index++) {
      temp = temp.concat([props[index]["id"]]);
    }
    this.setState({ data: temp });
  }

  mainPage() {
    return (
      <div className="mx-auto">
        <div className="md:container md:mx-auto px-8 py-8">
          <div className="lg:flex md:mx-auto items-end md:gap-x-2">
            <h1 className="font-bold md:text-7xl text-4xl">Restaurants</h1>
            <div className="github pt-2">
              <a
                href="https://github.com/nuwbie-11/RestaurantsRectJs"
                target="_blank"
                className="flex items-end gap-x-2 text-dark hover:text-[#e8eaea] hover:scale-125 transition duration-150 ease-out hover:ease-in"
              >
                <FontAwesomeIcon icon={faGithub} size='xs'/>
                <p className="text-xs italic ">about Project</p>
              </a>
            </div>
          </div>
          <br />
          <p className="md:w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            itaque, voluptate consequatur, aliquam ut dolorem vitae consequuntur
            accusantium vel minima maiores corrupti, facilis suscipit! Illum
            pariatur debitis consequuntur corporis maxime?
          </p>
        </div>
        <hr className="h-px bg-black" />
        <div className="filter-sections px-8 py-8 md:container md:mx-auto md:flex gap-x-5">
          <p className="py-2 rounded-full ">Filter By :</p>
          <Checkbox label="Open Now" checkboxId="open-now" />
          <Dropdowns
            options={this.state.priceOptions}
            default={this.state.defaultPriceOptions}
            id="price-option"
            from="price"
          />
          <Categories />
        </div>
        {/* {console.log(this.state.params)} */}
        <RestaurantList
          data={this.state.data}
          customParam={this.state.params}
        />
      </div>
    );
  }

  render() {
    return this.mainPage();
  }
}

export default Main;
