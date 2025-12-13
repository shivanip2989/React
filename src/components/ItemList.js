import { useDispatch } from "react-redux";
import { addItem} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch= useDispatch();

  const handleAddItem =(item)=>{
     //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹ {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 py-8">
            <div className="absolute p-4">
              <button className="mx-4 rounded-lg bg-black text-white shadow-lg"
              onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-25" />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
