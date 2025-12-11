import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import restos from "../restos.json";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState(""); 
  const {loggedInUser,setUserName}= useContext(UserContext);
  
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /*const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9732255&lng=79.6057419&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();*/
    const json = await restos;
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <button
            className="px-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) => {
                return res.info.avgRating > 4;
              });
              setFilteredRes(filteredRes);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input className="border border-black p-2"
           value={loggedInUser}
           onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
