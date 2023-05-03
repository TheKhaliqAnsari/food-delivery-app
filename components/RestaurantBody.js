import * as React from "react";
import { Box } from "@mui/material";
import ResCard from "./ResCard";
// import restaurentList from "./data.js";
import "./RestaurantBody.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const mainUrl =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const apiEndpoint =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

const RestaurantBody = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] =
    useState(restaurentList);

  const performApiCall = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      console.log(response.data.data.cards[2].data.data.cards);
      setRestaurentList(response.data.data.cards[2].data.data.cards);
      setfilteredRestaurents(response.data.data.cards[2].data.data.cards);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    performApiCall();
  }, []);

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      setfilteredRestaurents(restaurentList);
    } else {
      const filteredData = filteredRestaurents.filter((ele) => {
        return ele.data.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setfilteredRestaurents(filteredData);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
      console.log(searchInput, "useeffect");
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {!filteredRestaurents.length ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex" }} className="res-list">
          {filteredRestaurents.map((ele, idx) => {
            let { cloudinaryImageId, name, cuisines } = ele.data;
            return (
              <ResCard
                key={idx}
                imageUrl={mainUrl + cloudinaryImageId}
                name={name}
                cuisines={cuisines.join(",")}
              />
            );
          })}
        </Box>
      )}
    </>
  );
};
export default RestaurantBody;
