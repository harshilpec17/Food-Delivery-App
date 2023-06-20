import { useState, useEffect } from "react";
import Shimmer from "./ShimmerComponent/ShimmerBody";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constant";
import { FaClock } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";

import fakeJson from "./fakeData";

const menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [discount, setDiscount] = useState(null);

  const { id } = useParams("112620245");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + id);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data || fakeJson.data);
    setDiscount(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  // for the name, cuisines, costForTwoMessage, avgRating, totalRatingsString, locality information for the restaurants

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality,
  } = resInfo?.cards[0]?.card?.card?.info;

  // for the deliveryTime information on the menu

  const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;

  // for the menu dishes, according to the open time of place, it will display the available dishes

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className=" text-white content-center bg-gray-600">
      <div className="basicInformation flex md:flex-row justify-between px-6 md:px-16 py-6 border-b-2 ">
        <div>
          <h1 className="font-bold md:text-[28px] ">{name}</h1>
          <p className="md:text-[16px]">{cuisines.join(", ")}</p>
          <p className="md:text-[16px]">{locality}</p>
        </div>
        <div>
          <div className="border-2 rounded text-center p-1">
            <p className="border-b-2 gap-1 flex justify-center py-1">
              <BsFillStarFill />
              {avgRating}
            </p>
            <p className="pt-1">{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="time costForTwo border-b-2 flex justify-between px-6 md:px-16 py-4 gap-20">
        <p className="md:text-[16px] flex gap-1 items-center">
          <FaClock /> {deliveryTime} Mins
        </p>
        <p className="md:text-[16px]">{costForTwoMessage}</p>
      </div>
      <div className="discountWrapper md:px-14 flex flex-col md:flex-row items-left">
        {discount?.cards[1]?.card?.card?.gridElements?.infoWithStyle.offers.map(
          (x) => (
            <div className="discount px-6 md:px-2 py-3 w-max">
              <div className="px-4 py-2 card border rounded">
                <div>
                  <h2 className="text-center">{x.info.header}</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <p>{x.info.couponCode}</p>
                  <p> | {x.info.description}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="menu px-16 mt-5">
        <h1>
          <span>Recomended ( )</span>
        </h1>

        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="menuContainer flex justify-between border-b py-4"
          >
            <div className="menuDescription">
              <h1 className="text-bold text-[24px]">{item.card.info.name}</h1>
              <p className="text-[16px] flex items-center">
                <BiRupee />
                {`${
                  item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100
                }`}
              </p>
              <p className="text-[10px]">{item.card.info.description}</p>
            </div>
            <div className="menuImage border rounded w-[118px]">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  item.card.info.imageId
                }
                alt="menu image"
              />
            </div>
            {/* <li key={item.card.info.id}>
                {item.card.info.name} -
                {`$ ${
                  item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100
                }`}
              </li> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default menu;
