import React from "react";

const Card = ({ images }) => {
  // destructure prop

  return (
    <>
      {images.map((img, i) => (
        <div
          className="card"
          key={i}
          style={{ background: `url("${img.url}") no-repeat center/cover` }}
        ></div>
      ))}
    </>
  );
};

export default Card;

/*
We pass the prop images to the Card component and then we use map to render all the images in our state array
We do this so we dont have to repeat our code.
When using map you always need to specify a key for every index you map through, key={i}
Then we use style to display our image. We set it as a background. We can reach the specific url for every image
by saying the url should be img.url. we spcified url as a property to our state i App.
*/
