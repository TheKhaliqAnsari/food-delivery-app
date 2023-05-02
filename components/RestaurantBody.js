import * as React from "react";
import { Box } from "@mui/material";
import ResCard from "./ResCard";
import restaurentList from "./data.js";
import "./RestaurantBody.css";
import { useState, useEffect } from "react";

const mainUrl =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantBody = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurents, setfilteredRestaurents] =
    useState(restaurentList);

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
      <Box sx={{ display: "flex" }} className="res-list">
        {filteredRestaurents.map((ele) => {
          let { cloudinaryImageId, name, cuisines } = ele.data;
          return (
            <ResCard
              imageUrl={mainUrl + cloudinaryImageId}
              name={name}
              cuisines={cuisines.join(",")}
            />
          );
        })}
      </Box>
    </>
  );
};
export default RestaurantBody;
