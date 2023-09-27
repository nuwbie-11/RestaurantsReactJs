import { useState, useEffect } from "react";
import { fetchDetails, sendQuery } from "../utils/services";

import { priceChoices } from "../utils/data";

import StarRating from "../components/Stars";

import { Link } from "react-router-dom";
import { useParameterContext } from "../context/ParameterContext";

export default function RestaurantCards({ id }) {
  // console.log(id)
  const [details, setDetails] = useState({});
  const { myParams, setParams } = useParameterContext();

  const getCustomParam = () => {
    const randIndex = Math.floor(Math.random() * (priceChoices.length - 1)) + 1;
    const randBool = Math.random() < 0.5;

    return {
      price: priceChoices[randIndex],
      isOpen: randBool,
    };
  };

  useEffect(() => {
    fetchDetails(id).then((response) => {
      const customs = getCustomParam();
      const temp = { ...details };
      var newData = Object.assign({}, temp, customs, response["restaurant"]);
      setDetails(newData);
    });
  }, []);

  return (
    <>
      {details.hasOwnProperty("id") ? (
        myParams.cate === "" ? (
          myParams.isOpen === details.isOpen &&
          myParams.price === details.price ? (
            Cards({ details, id })
          ) : myParams.isOpen === details.isOpen && myParams.price === "" ? (
            Cards({ details, id })
          ) : null
        ) : 
        details.categories.find((cate) => cate.name === myParams.cate) ? (
          myParams.isOpen === details.isOpen &&
          myParams.price === details.price ? (
            Cards({ details, id })
          ) : myParams.isOpen === details.isOpen && myParams.price === "" ? (
            Cards({ details, id })
          ) : null
        ) : null
      ) : (
        <p>Fetching...</p>
      )}
    </>
  );
}

function Cards({ details, id }) {
  return (
    <div className="rounded px-2 py-3 shadow-md shadow-black/20">
      <img
        className="w-72 h-52 rounded hidden lg:block"
        src={
          "https://restaurant-api.dicoding.dev/images/medium/" +
          details["pictureId"]
        }
        alt=""
        loading="lazy"
      />
      <h2 className="pt-3">{details["name"]}</h2>
      <StarRating rating={details["rating"]} />
      <div className="flex justify-between">
        <div className="text-sm flex">
          {
            // details.categories[0].name
            details.categories.map((item, ix) => (
              <p key={ix}>{item.name} - </p>
            ))
          }
          <p className="font-semibold text-green-500">{details.price}</p>
        </div>
        <p
          className={`font-bold ${
            details.isOpen ? " text-green-800" : " text-red-800"
          }`}
        >
          {details.isOpen ? "Open Now" : "Not Open"}
        </p>
      </div>

      <button
        id={details["id"]}
        className="container bg-purple-700 hover:bg-purple-950 px-5 py-2 text-white rounded"
      >
        <Link
          to={{
            pathname: "/about",
            search: `?id=${id}`,
          }}
        >
          Learn More
        </Link>
      </button>
    </div>
  );
}
