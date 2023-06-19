import restObj from "../utils/mockData";
import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerComponent/ShimmerBody";
import ShimmerHeader from "./ShimmerComponent/ShimmerHeader";
import { Link } from "react-router-dom";
import Recommended from "./Recommended";
import mockPicks from "../utils/mockPicks";
const Body = () => {
  const [newList, setNewList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [banner] = useState(mockPicks);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
    );

    const json = await data.json();
    console.log(json);
    setNewList(
      json?.data?.success.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.success.cards[5]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants ||
        restObj
    );
    setFilteredData(
      json?.data?.success.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.success.cards[5]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants ||
        restObj
    );
  };
  console.log(newList);
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
      <div className="banner">
        {banner.bannerCarousel.cards.map((item) => (
          <Recommended key={item.id} top={item} />
        ))}
      </div>
      <div className="wrapper">
        <div className="filter-btns">
          <button
            className="btn"
            onClick={() => {
              const topRatedSort = newList.sort(
                (a, b) => b.info.avgRating - a.info.avgRating
              );
              const topRatedFilter = topRatedSort.filter(
                (x) => x.info.avgRating
              );
              setFilteredData(topRatedFilter);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="btn fasterDelivery"
            onClick={() => {
              const deliverySort = newList.sort(
                (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
              );
              const deliveryFilter = deliverySort.filter(
                (x) => x.info.sla.deliveryTime
              );
              setFilteredData(deliveryFilter);
            }}
          >
            Faster Delivery
          </button>
          <button
            className="btn"
            onClick={() => {
              const lowToHighSort = newList.sort(
                (a, b) =>
                  parseInt(a.info.costForTwo.match(/\d+/)) -
                  parseInt(b.info.costForTwo.match(/\d+/))
              );
              const lowToHighFilter = lowToHighSort.filter(
                (x) => x.info.costForTwo
              );
              setFilteredData(lowToHighFilter);
            }}
          >
            Cost: Low to High
          </button>
          <button
            className="btn"
            onClick={() => {
              const highToLowSort = newList.sort(
                (a, b) =>
                  parseInt(b.info.costForTwo.match(/\d+/)) -
                  parseInt(a.info.costForTwo.match(/\d+/))
              );
              const highToLowFilter = highToLowSort.filter(
                (x) => x.info.costForTwo
              );
              setFilteredData(highToLowFilter);
            }}
          >
            Cost: High to low
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
          <Link key={rest.info.id} to={"/menu/" + rest.info.id}>
            <Card restData={rest} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
