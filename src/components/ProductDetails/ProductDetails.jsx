import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import { cartContext } from "../../context/CartContext";

export default function ProductDetails() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  const [productDetails, setProductDetails] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productDetailsImages, setProductDetailsImages] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id, category } = useParams();
  let { addProductToCart } = useContext(cartContext);
  async function getDetails() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setProductDetails(data.data);
    setProductDetailsImages(data.data.images);
    setLoading(false);
  }
  async function getRelatedProducts() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    let allProducts = data.data;

    let related = allProducts.filter(
      (product) => product.category.name == category
    );
    setRelatedProducts(related);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
    getRelatedProducts();
  }, [id]);

  return (
    <>
      <div className="container mx-auto">
        {loading && <PacmanLoader color={"#0aad0a"} />}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-2/6">
            {productDetailsImages.length === 0 ||
            productDetailsImages.length === 1 ? (
              <img
                src={productDetails.imageCover}
                className="w-full cursor-grab"
                key={productDetails.id}
              />
            ) : (
              <Slider {...settings}>
                {productDetailsImages.map((image, index) => (
                  <img src={image} className="w-full cursor-grab" key={index} />
                ))}
              </Slider>
            )}
          </div>
          <div className="w-full md:w-3/5 px-10 py-5">
            <p className="font-medium text-lg mb-3">{productDetails.title}</p>
            <p className="px-3 font-normal mb-3 text-slate-400">
              {productDetails.description}
            </p>

            <div className="flex items-center justify-between pe-6 mb-3">
              <h4>{productDetails.price} L.E</h4>
              <p>
                <i className="fa fa-star text-yellow-300"></i>
                {productDetails.ratingsAverage}
              </p>
            </div>
            <button
              onClick={() => addProductToCart(productDetails._id)}
              className="btn bg-main w-full text-white p-2 rounded-xl"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {loading && <PacmanLoader color={"#0aad0a"} />}
        <div className="flex flex-wrap py-10 gap-y-3 items-center">
          {relatedProducts.map((obj) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-5"
              key={obj._id}
            >
              <div className="product p-2 rounded-lg">
                <Link to={`/productdetails/${obj._id}/${obj.category.name}`}>
                  <img className="w-full" src={obj.imageCover} alt="" />
                  <p className="text-main">{obj.category.name}</p>
                  <h3>{obj.title.split(" ").splice(0, 2)}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <h4>{obj.price} L.E</h4>
                    <p>
                      <i className="fa fa-star text-yellow-300"></i>{" "}
                      {obj.ratingsAverage}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => addProductToCart(obj._id)}
                  className="btn bg-main w-full text-white p-2 rounded-xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
