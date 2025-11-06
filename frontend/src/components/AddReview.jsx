import React from "react";
import { useState } from 'react'
import { Rate } from "antd";
import toast from "react-hot-toast";
const AddReview = ({handleAddReview}) => {
      const [rating,setRating] = useState(0)
      const [comment,setComment] = useState('')

      function handleClick(){
        if(!rating || !comment){
             toast.error("Fill all Fields");
             return;
        }
        handleAddReview(rating,comment)
        setComment('')
        setRating(0)
        toast.success("Reviewed")
      }
  return (
    <div>
      <h1 className="font-semibold text-xl">Reviews</h1>
      <div className="p-3">
        <label htmlFor="">Review :</label>
        <Rate value={rating} onChange={setRating} />
        <div className="flex items-start gap-2">
          <label htmlFor="">Comment : </label>
          <textarea
            name=""
            id=""
            className="border px-2"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button className="bg-orange-400 px-2 rounded-md" onClick={handleClick} >Add Review</button>
      </div>
    </div>
  );
};

export default AddReview;
