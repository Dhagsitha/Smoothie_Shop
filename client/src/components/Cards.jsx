import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Cards = ({ item }) => {
  const { name, image, price, description, _id } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);

  const handleAddtoCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      console.log(cartItem);
    }
  };

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div to={`/FoodItems/${item._id}`} className="card shadow-xl relative mr-5 md:my-5">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/FoodItems/${item._id}`}>
        <figure>
          <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/FoodItems/${item._id}`}>
          <h2 className="card-title">{item.name}!</h2>
        </Link>
        <p>{item.description}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$ </span> {item.price}
          </h5>
          <button className="btn bg-green text-white hover:bg-black hover:text-white" onClick={() => handleAddtoCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
