import React from "react"
import { useLocation } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";

const About=(props)=>{

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);// access query parameters
    const paramValue = queryParams.get("id");

    return (
        <div>
            
            <RestaurantDetails id={paramValue} isAbout={true} />
        </div>
    )



}
export default About