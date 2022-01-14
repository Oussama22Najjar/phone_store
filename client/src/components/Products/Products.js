import React, { useEffect } from "react";
import Product from "../Phone/Phone";
import { useDispatch, useSelector } from "react-redux";
import "./products.css";
import { getAllPhone } from "../../JS/actions/phoneActions";

const Products = ({ textSearch }) => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phoneReducer.phones);
  useEffect(() => {
    dispatch(getAllPhone());
  }, [dispatch]);

  return (
    <div className="products">
      {phones &&
        phones
          .filter((phone) =>
            phone.model.toUpperCase().includes(textSearch.toUpperCase())
          )
          .map((product) => (
            <Product product={product} key={product._id} phones={phones} />
          ))}
    </div>
  );
};

export default Products;
