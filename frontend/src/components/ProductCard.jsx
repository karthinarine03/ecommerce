

const ProductCard = ({item}) => {
  console.log(item);
  
  return (

    <div className="">
        <img src={item?.images[0]?.url} alt="" />
        <div className="">
            <h1 className="font-bold text-3xl">₹{item?.price}</h1>
            <h2 className="font-semibold text-2xl">{item?.name}</h2>
            <h2>over all ratings</h2>
        </div>
    </div>

  )
}

export default ProductCard