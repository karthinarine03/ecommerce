import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import {setRemoveItems} from '../redux/features/product'
import { useNavigate } from "react-router-dom";
const Cart = () => {
  let total = 0;
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-semibold my-4">Shopping cart</h1>
      <hr />
      <div className="">
        {items?.map((item, index) => {
          total += item?.price *item?.count;
          return (
            <div>
              <div key={index} className="flex justify-between items-center my-2">
                <div className="flex">
                  <img src={`${item?.image}`} width={"200px"} alt="" />
                  <div className="my-4">
                    <h1>{item?.name}</h1>
                    <h2>₹{item?.price}</h2>
                    <h2>Count : {item?.count}</h2>
                  </div>
                </div>
                <div className="flex gap-5">
                  <h1 className="text-2xl">₹{item?.price} x {item?.count}</h1>
                  <button className="bg-red-500 px-3 rounded-md"
                    onClick={()=>dispatch(setRemoveItems(index))}
                  >Remove</button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end  items-center gap-5 mt-3">
        <h1 className="text-2xl font-bold ">
          SubTotal({totalQuantity}) : ₹{total}
        </h1>
        <button className="bg-orange-400 px-4 rounded-md py-2 font-semibold"
        onClick={()=>navigate("/placeOrder")}>
          Proceed to pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
