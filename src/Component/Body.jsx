import restObj from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [newList, setNewList] = useState(restObj);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="wrapper">
        <div className="filter-btns">
          <button
            className="btn"
            onClick={() => {
              const topRated = newList.filter((x) => x.info.avgRating > 4);
              setNewList(topRated);
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
              setNewList(fastDelivery);
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
          />
          <button
            className="btn"
            onClick={() => {
              let filterData = newList.filter((e) =>
                e.info.name.toLowerCase().includes(search)
              );
              setNewList(filterData);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="container">
        {newList.map((rest) => (
          <Card key={rest.info.id} restData={rest} />
        ))}
      </div>
    </>
  );
};

export default Body;
