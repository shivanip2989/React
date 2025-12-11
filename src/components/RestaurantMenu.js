import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import menu from "../menu.json";
import { useParams } from "react-router-dom";
import MenuItemTile from "./MenuTile.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex,setShowIndex]= useState(-1);

  const { resId } = useParams();

  useEffect(() => {
    const menuArray = Object.values(menu);
    const foundMenu = menuArray.find(
      (m) => String(m.data.card.card.info.id) === resId
    );

    setResInfo(foundMenu);
  }, [resId]);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.data?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card.card ?? [];

  const categories =
    resInfo?.data?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        //controlled component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setshowIndex={()=>setShowIndex((prev)=>prev===index?-1:index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
