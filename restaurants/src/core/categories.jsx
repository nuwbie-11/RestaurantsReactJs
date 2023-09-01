import React, { Component } from "react";

import Dropdowns from "../components/Dropdowns";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      default:{default:'Categories'}
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchIds();
    }, 10);
  }

  fetchIds = async () => {
    try {
      const uri = "https://restaurant-api.dicoding.dev/list";
      const response = await fetch(uri);
      const jsonData = await response.json();
      const fixedData = jsonData["restaurants"];

      this.fetchCategories(fixedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async fetchCategories(props) {
    let temporal = []
    for (let index = 0; index < props.length; index++) {
        const id = props[index]['id']
        try {
          const uri = "https://restaurant-api.dicoding.dev/detail/" + id;
          const response = await fetch(uri);
          const jsonData = await response.json();
          const fixedData = jsonData["restaurant"];
          const category = fixedData.categories[0].name;
          temporal = temporal.concat(category)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    }
    const uniqueTag = {};
    Array.from(new Set(temporal)).forEach((value, index) => {
      uniqueTag[index] = value;
    });
    this.setState({categories:uniqueTag});
  }

  render(){
    return (
        <div>
            <Dropdowns options={this.state.categories} default={this.state.default} id='category-option' from='cate'/>
        </div>
    )
  }

}




export default Categories;