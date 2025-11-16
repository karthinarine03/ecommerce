import { Checkbox } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { usePlaceOrderMutation, useStripePayMutation } from "../redux/api/order";
const OrderPay = () => {
  const [submitfun, { data, isLoading, error }] = usePlaceOrderMutation();
  const [stripePay,{data:stripeData, isloading:stripeLoading, error: stripeError}] = useStripePayMutation()

  const { items } = useSelector((state) => state.cart);
  const [pay, setPay] = useState("cash");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  console.log(items, pay);
  console.log(stripeData, stripeError);

  function submit() {
    if(pay == 'cash'){
    submitfun({
      orderItems: items,
      shippingAddress: {
        address,
        city,
        state,
        pincode,
      },
      paymentMethod: pay,
      paymentStatus: "Pending",
      totalPrice: items.reduce((acc, it) => acc + it.count * it.price),
    });
    }

    if(pay == 'UPIPay'){
      stripePay({orderItems : items})
    }

  }

  useEffect(()=>{
    if(stripeData){
      window.location.href=stripeData?.url
    }
    console.log(stripeData?.url);
    
  },[stripeData,stripeLoading])

  return (
    <div>
      <Header />
      <div className="flex justify-center m-5">
        <div className=" flex flex-col rounded-md min-w-[500px] p-5 bg-amber-600">
          <h1 className="text-xl font-semibold py-3">Shipping Details</h1>
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="border"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="">City</label>
          <input
            type="text"
            name=""
            id=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="">Pincode</label>
          <input
            type="text"
            name=""
            id=""
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <label htmlFor="">State</label>
          <input
            type="text"
            name=""
            id=""
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <h1 className="text-xl font-semibold py-3" >Payment Method</h1>
          <div>
            <input
              type="radio"
              name=""
              id=""
              value="cash"
              checked={pay == "cash"}
              onChange={(e) => setPay(e.target.value)}
            />
            <label htmlFor="">Cash</label>
          </div>
          <div>
            <input
              type="radio"
              name=""
              id=""
              value="UPIPay"
              checked={pay == "UPIPay"}
              onChange={(e) => setPay(e.target.value)}
            />
            <label htmlFor="">UPIPay</label>
          </div>
          <div>
            <input
              type="radio"
              name=""
              id=""
              value="NetBanking"
              checked={pay == "NetBanking"}
              onChange={(e) => setPay(e.target.value)}
            />
            <label htmlFor="">NetBanking</label>
          </div>
          <button onClick={submit}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPay;

{
  /* <h1 className="text-2xl font-bold ">Delivery to name </h1>
            <div>
                <form action={paysub}>
                    <label htmlFor="">Address</label>
                    <textarea name="" id="" className="border text-sm" placeholder="Enter the Current Address" ></textarea>
                    <label htmlFor=""> City</label>
                    <input type="text" placeholder="Enter the city" />
                    
                    <div>
                        <h2>Payment Method</h2>
                        <input type="radio" name="" id="" value="card" 
                        checked = {pay == "card"}
                        onClick={(e)=> setPay(e.target.value)}/>
                        <label htmlFor="">Card</label>
                        <input type="radio" name="" id="" value="UPIPay" 
                        checked = {pay == "UPIPay"}
                        onClick={(e)=> setPay(e.target.value)}/>
                        <label htmlFor="">UPIPay</label>
                        <input type="radio" name="" id="" value="NetBanking" 
                        checked = {pay == "NetBanking"}
                        onClick={(e)=> setPay(e.target.value)} />
                        <label htmlFor="">NetBanking</label>
                    </div>
                    <button type="submit"className="bg-orange-300 p-5 rounded-sm" >Continue</button>
                    
                </form>
            </div> */
}
