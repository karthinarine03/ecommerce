import React, { useCallback, useState } from "react";
import { useGetAllProductsQuery } from "../redux/api/product";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState({});
  const { data, error, isLoading } = useGetAllProductsQuery(filter);

  const defineFilter = useCallback((newFilter) => {
    setFilter(newFilter);
  }, [filter]);

  //view detail product
  function handleView(id){
    navigate(`productDetail/${id}`)
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold my-2">Top Related Products</h1>
      <div className="flex gap-4">
        <div className="w-1/6 mt-10 ">
          <Filter addFilter={defineFilter} clearFilter={()=>setFilter({})}/>
        </div>
        <div className="flex flex-wrap gap-4 ">
          {data?.data.map((item, key) => (
              <div className="w-[calc(33.333%-1rem)]" key={key} onClick={()=>handleView(item?._id)}>
                <ProductCard item={item} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
