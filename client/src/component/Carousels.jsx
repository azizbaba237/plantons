import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FruitsCarou } from "./FruitsCarou";

const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const productData = [
    {
      id: 1,
      imageurl:
        "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755__480.jpg",
      name: "Strawberry",
      price: "$150",
      description: "Lorem ipsum dolor...",
    },
    {
      id: 2,
      imageurl:
        "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537__480.jpg",
      name: "Apple",
      price: "$150",
      description: "Lorem ipsum dolor...",
    },
    {
      id: 3,
      imageurl:
        "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__480.jpg",
      name: "Orange",
      price: "$150",
      description: "Lorem ipsum dolor...",
    },
    {
      id: 4,
      imageurl:
        "https://cdn.pixabay.com/photo/2017/01/15/18/23/mango-1982330__480.jpg",
      name: "Coconut",
      price: "$150",
      description: "Lorem ipsum dolor...",
    },
    {
      id: 5,
      imageurl:
        "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019__480.jpg",
      name: "Bananas",
      price: "$150",
      description: "Lorem ipsum dolor...",
    },
    {
      id: 6,
      imageurl:
        "https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356__480.jpg",
      name: "Tomatos",
      price: "$150",
      description: "Lorem ipsum dolor...",
    },
  ];

  const product = productData.map((item) => (
    <FruitsCarou
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
      <h1 className="mb-28 flex justify-center uppercase font-bold text-6xl ">
        Our product
      </h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};
export default Carousels;
