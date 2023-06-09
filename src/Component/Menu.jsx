import { useState, useEffect } from "react";
import Shimmer from "./ShimmerComponent/ShimmerBody";
import { Params, useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constant";

const menu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + id);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className=" text-white content-center bg-gray-600">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <div>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -
              {`$ ${
                item.card.info.price / 100 || item.card.info.defaultPrice / 100
              }`}
            </li>
          ))}
          <li>nachoss</li>
        </ul>
      </div>
    </div>
  );
};

export default menu;
