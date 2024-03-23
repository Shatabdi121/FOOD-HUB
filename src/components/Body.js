import { restrauntList } from "../contants";
import RestrauntCard from "./RetrurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
  //  searchText is a local variable
  const [allResturants, setAllResturants] = useState([]);
  const [searchText, setSearchText] = useState([]); //To create state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //const offline=useOnline();
  //if(!offline){
  // return <h1>offline, Please check your internet connection</h1>
  //}

  if (!allResturants) return null;

  return allResturants.length == 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div className="search-container p-5 bg-yellow-100 my-5">
        <input
          type="text"
          className="focus:bg-blue-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-blue-700 hover:bg-green-700 text-white rounded-md "
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allResturants);
            //update ths state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard
                {...restaurant.data}
                key={restaurant.data.id}
                user={user}
              />
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Body;
