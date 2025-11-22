import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setItems} from '../redux/features/product'
import toast from "react-hot-toast";

const ProductInfo = React.memo(({ product }) => {
  const dispatch = useDispatch()

  const [cartCount, setCartCount ]= useState(1);

  function handleCart(){
    const cartProduct = {
      name : product?.name,
      price : product?.price,
      image : product?.images[0]?.url,
      count : cartCount
    }
    dispatch(setItems(cartProduct))
    toast.success("Added to Cart")
  }
  return (
    <div className="flex mt-5">
      <div className="">
        <img src={product?.images[0]?.url} alt="" className="" />
      </div>
      <div className="flex flex-col mt-15 ">
        <h1 className="text-3xl font-bold">{product?.name}</h1>
        <p className="text-xl my-3">{product?.description}</p>
        <h1 className="text-3xl font-semibold">₹{product?.price}</h1>
        <div className="flex flex-col text-center my-10 p-4">
          <a href="" className="bg-orange-400 w-full text-xl py-2 rounded-2xl">
            Buy Now
          </a>
          <div className="flex justify-between  my-4 gap-1">
            <button
              className="border p-3 rounded-l-2xl"
              onClick={() => setCartCount(cartCount - 1)}
            >
              -
            </button>
            <button className="border py-2  w-full text-xl" onClick={handleCart}>Add cart</button>
            <button
              className="border p-3 rounded-r-2xl"
              onClick={() => setCartCount(cartCount + 1)}
            >
              +
            </button>
          </div>
          <h2 className="flex text-l">Count : {cartCount}</h2>
        </div>
      </div>
    </div>
  );
});

export default ProductInfo;
