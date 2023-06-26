import { useState, useEffect } from "react";
import { ShimmerMenuPage } from "./ShimmerComponent/ShimmerBody";
import { useParams } from "react-router-dom";
import { MENU_FOOD_IMAGE, RES_MENU } from "../utils/constant";
import { FaClock } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import fakeJson from "./fakeData";

const menu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams("112620245");
  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + id);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data || fakeJson.data);
  };

  if (resInfo === null) return <ShimmerMenuPage />;

  // Destructuring for the name, cuisines, costForTwoMessage, avgRating, totalRatingsString, locality information for the restaurants

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality,
  } = resInfo?.cards[0]?.card?.card?.info;

  // Destructuring for the deliveryTime information on the menu

  const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;

  // Destructuring for the menu dishes, according to the open time of place, it will display the available dishes

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card.hasOwnProperty(
      "carousel"
    ) === true
      ? resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      : resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card;

  return (
    <div className=" text-[#3E4152] bg-white my-6 md:my-12">
      {/* Restaurant Basic information 
      Name
      cuisines
      locality
      avgRating
      delivery time
      and cost for two people 
       */}

      <div className="basicInformation flex md:flex-row justify-between px-6 md:px-16 py-6 border-b-2 ">
        <div>
          <h1 className="font-bold md:text-[28px] ">{name}</h1>
          <p className="md:text-[16px]">{cuisines.join(", ")}</p>
          <p className="md:text-[16px] flex items-center gap-2">
            <ImLocation />
            {locality}
          </p>
        </div>
        <div>
          <div className="border-2 rounded text-center p-1">
            <p className="border-b-2 text-[#3D9B6D] gap-1 flex item-center font-semibold justify-center py-1">
              <AiFillStar />
              {avgRating}
            </p>
            <p className="pt-1">{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="time costForTwo border-b-2 flex justify-between px-6 md:px-16 py-4 gap-20">
        <p className="md:text-[16px] flex gap-2 items-center">
          <FaClock /> {deliveryTime} Mins
        </p>
        <p className="md:text-[16px]">{costForTwoMessage}</p>
      </div>

      {/* 
      It provide the information regarding the Discount available to that particular restaurants
      */}

      <div className="discountWrapper md:px-14 flex flex-col md:flex-row items-left">
        {resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle.offers.map(
          (x) => (
            <>
              <div className="discount px-6 md:px-2 py-3 w-max">
                <div className="px-4 py-2 card border rounded">
                  <div className="flex items-center text-center">
                    <BsEmojiHeartEyesFill />
                    <h2 className="text-center pl-3 font-extrabold">
                      {x.info.header}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-2 text-[#93959F] font-semibold">
                    <p>{x.info.couponCode}</p>
                    <p> | {x.info.description}</p>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>

      {/* It provide the menu items displayed on the page  */}

      <div className="menu px-2 md:px-16 mt-5">
        <h1>
          <span>Recommended ( {itemCards.length} )</span>
        </h1>
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="menuContainer flex justify-between border-b py-4"
          >
            <div className="menuDescription w-[60%] md:w-[70%]">
              <h1 className="font-bold text-[24px]">{item.card.info.name}</h1>
              <p className="font-semibold text-[16px] flex items-center">
                <BiRupee />
                {`${
                  item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100
                }`}
              </p>

              <p className="text-[12px] text-[#93959F]">
                {item.card.info.description}
              </p>
            </div>
            <div className="menuImage cursor-pointer">
              <img
                src={MENU_FOOD_IMAGE + item.card.info.imageId}
                alt="No Image Required"
                className="w-[118px] h-[96px] bg-cover bg-center border rounded"
              />
              <div className="w-[118px] px-2 border rounded cursor-pointer">
                <h1 className="text-bold text-center text-[#3D9B6D] font-semibold">
                  ADD +
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default menu;
