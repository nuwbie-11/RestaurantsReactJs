import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { fetchDetails } from "../utils/services";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleUser} from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";


export default function About(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);// access query parameters
    const paramValue = queryParams.get("id");

    const [ details, setDetails ] = useState({})


    useEffect(()=>{
        fetchDetails(paramValue).then((response) => {
            console.log(response)
            setDetails(response["restaurant"]);
          });
    },[])

    const renderPages=()=>{
        return (
            <div className="md:container md:mx-auto p-8">
            <div className="header-section flex items-center gap-x-8 ">
              <Link
                to={{
                  pathname: "/",

                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <div className="md:flex items-end gap-x-2">
                <h1 className="font-bold lg:text-5xl text-3xl">
                  {details.name}
                </h1>

                
                  <span 
                  className={`px-5 py-1 rounded-full text-xs text-white ${
                    details.rating < 3
                      ? "bg-red-400"
                      : "bg-yellow-400"
                  } `}
                  >&#9733; {details.rating} </span>

              </div>
            </div>

            <div className="detail-section pt-4 flex justify-between py-3">
              <div>
                <p className="description">{details["description"]}</p>
                <div className="tagged-in flex gap-x-2 pt-3">
                  {details.categories.map((item,ix) => {
                    return(<p className={
                      `${ix !== 0 ? "bg-sky-400" : "bg-lime-400" } italic text-xs px-5 py-1 rounded-full text-white`
                    }>{details.categories[ix].name}</p>)
                  })}

                </div>

              </div>

              <img
                className="w-72 h-52 rounded hidden lg:block"
                src={
                  "https://restaurant-api.dicoding.dev/images/medium/" +
                  details["pictureId"]
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
                  details.customerReviews.map((item,ix)=>{
                    return (
                      <div className="flex gap-x-2 items-center py-4">
                        <div className="">
                          <FontAwesomeIcon icon={faCircleUser} size='2xl' style={{color: "#858585",}} />
                        </div>

                        <div className="">
                          <p className="italic font-bold text-xs" >{details.customerReviews[ix].name}</p>
                          <p className="text-lg" >{details.customerReviews[ix].review}</p>

                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        )
    }

    return (
        <div>
            {
                details.hasOwnProperty("id") ? renderPages() : <p>Fail</p>
            }
        </div>
    )
}