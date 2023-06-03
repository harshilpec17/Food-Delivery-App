import restObj from "../utils/mockData";
import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerComponent/ShimmerBody";
import ShimmerHeader from "./ShimmerComponent/ShimmerHeader";

const Body = () => {
  const [newList, setNewList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
    );

    const json = await data.json();
    setNewList(
      json?.data?.success.cards[5]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants || restObj
    );
    setFilteredData(
      json?.data?.success.cards[5]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants || restObj
    );
  };

  return newList.length === 0 ? (
    <div className="shimmerContainer">
      <ShimmerHeader />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="wrapper">
        <div className="filter-btns">
          <button
            className="btn"
            onClick={() => {
              const topRated = newList.filter((x) => x.info.avgRating > 4);
              setFilteredData(topRated);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="btn fasterDelivery"
            onClick={() => {
              const fastDelivery = newList.filter(
                (x) => x.info.sla.deliveryTime < 28
              );
              setFilteredData(fastDelivery);
            }}
          >
            Faster Delivery
          </button>
        </div>
        <div className="searchBar">
          <input
            type="search"
            id="searchBar"
            placeholder="Find a Spot"
            value={search}
            onChange={(text) => setSearch(text.target.value)}

            // onClick={() => fetchData()}
          />
          <button
            className="btn"
            onClick={() => {
              let filterData = newList.filter((e) =>
                e.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredData(filterData);
            }}
            onKeyDown={(e) => {
              if (e.key === "enter") {
                console.log("enter pressed");
              }
            }}
          >
            Search
          </button>
          <button
            className="btn"
            onClick={() => {
              fetchData();
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="container">
        {filteredData.map((rest) => (
          <Card key={rest.info.id} restData={rest} />
        ))}
      </div>
    </>
  );
};

export default Body;
