import { useState } from 'react';
import AddReview from './AddReview';
import { useAddReviewMutation } from '../redux/api/product';
import { Rate } from 'antd';

const Review = ({reviews}) => {
  const [funReview, {data,error,isLoading}] = useAddReviewMutation()
  console.log(data);
  
  
  function handleAddReview(rat,com){
    funReview({
      rating : rat,
      comment : com,
      productId : reviews?._id
    })
  }

  console.log(error,isLoading);
  
  return (
    <div className='my-4 flex gap-5'>
        <AddReview handleAddReview={handleAddReview}/>
        <div >
          <h1 className='font-semibold text-xl'>Comments</h1>
          <div>
            {reviews?.reviews?.map((rev,index)=>(
              <div key={index}>
                {console.log(rev)
                }
                <h1 className='font-semibold'>Autonumous</h1>
                <Rate value={rev.rating}/>
                <p>{rev.comment}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Review