import React from "react";

const SingleData = (props) => {
  const { name, image, features, published_id } = props.singleData;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
