import React from "react";
import CardList from "./CardList";
import "./ImageList.css";
const ImageList = (props) => {
  if (props.images.length === 0) {
    return <h3 className="expense-list">no photos found</h3>;
  }

  const images = props.images.map((image) => {
    return <CardList key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
