import { useState, useEffect } from "react";
import { useParameterContext } from "../context/ParameterContext";
import { fetchCategories, fetchDatas, fetchDetails } from "../utils/services";

import CheckBoxes from "../components/checkbox";
import Categories from "./Category";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Prices from "./Prices";

import RestaurantCards from "./RestaurantCards";

export function Home() {
  const { myParams, setParams } = useParameterContext();
  const [data, setData] = useState();

  useEffect(() => {
    fetchDatas().then((response) => {
      setData(response["restaurants"]);
    });
  }, []);

  return (
    <main className="bg-zinc-50 text-zinc-950 pb-12">
      <div className="flex flex-col mt-12 px-5 gap-y-3">
        <header className="lg:flex items-end md:gap-x-2 header-section ">
          <h1 className="font-semibold sm:text-3xl text-xl">Restaurants</h1>
          <div className="github flex items-center">
            <a
              href="https://github.com/nuwbie-11/RestaurantsRectJs"
              target="_blank"
              className=""
              rel="noreferrer"
            >
              <FontAwesomeIcon className="rounded" icon={faGithub} />
            </a>
          </div>
        </header>
        <p className="md:w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          id, vel officiis maxime aliquid nisi repellendus quidem ducimus ab
          neque reiciendis saepe itaque perferendis ut distinctio repellat
          sequi? Autem, consequuntur.
        </p>
        <hr className="h-px bg-black" />
        <div className="filter-sections px-8 py-5 md:flex gap-x-5 bg-zinc-50/70 sticky backdrop-blur-[0.01rem]">
          <p className="py-2 rounded-full">Filter By :</p>
          <CheckBoxes id="open-now" label="Open Now" usedParam="isOpen" />
          <Categories />
          <Prices />
        </div>
        <div className="content-section  max-w-screen grid grid-cols-4 gap-y-8 place-items-center justify-items-around">
          {data
            ? data.map((item, ix) => (
                  <RestaurantCards id={item.id} key={ix}/>
              ))
            : null}
        </div>
      </div>
    </main>
  );
}
