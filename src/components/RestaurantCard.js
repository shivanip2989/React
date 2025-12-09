import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] flex flex-col justify-between bg-gray-100 h-[400px] hover:bg-gray-200">
      <img
        className="h-48 rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
      <p className="line-clamp-2 break-normal">{resData.cuisines.join(",")}</p>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
