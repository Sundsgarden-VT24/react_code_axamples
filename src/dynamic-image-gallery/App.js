import React, { useState } from "react";
import Card from "./Card";

import "./index.css";

function App() {
  const [images, setImages] = useState([
    { url: "http://source.unsplash.com/random/1" },
    { url: "http://source.unsplash.com/random/2" },
    { url: "http://source.unsplash.com/random/3" },
    { url: "http://source.unsplash.com/random/4" },
    { url: "http://source.unsplash.com/random/5" },
    { url: "http://source.unsplash.com/random/6" },
  ]);
  // Our state containing 6 images
  // images is our getter, we store the inital valu which is 6 images
  // setImages is our setter, through setImage when can manipulate our state
  // in this case we are using setImage to add or remove an image

  // Function for adding a new image
  const getNewImages = () => {
    setImages([
      ...images,
      {
        url: `http://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
          // getting an image with a random en number
        )}`,
      },
    ]);
    // with setImages we are setting the state to the previous using spread operator ...images
    // we are also adding a new image that ends with a random number
  };

  // Function for removing an image
  const removeImage = () => {
    setImages(images.slice(0, -1));
    // by calling setImages we say that our state (images) will be images - 1
  };

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card images={images} />
      </div>

      <div className="btnContainer">
        <button onClick={getNewImages}>Add</button>
        <button onClick={removeImage}>Remove</button>
      </div>
    </section>
  );
}

export default App;

/*
We are using the component Card to render our images. We say that the prop images should be equal
to our state images.

In our buttons we are calling the onClick function which triggers the add function when clicking the Add button
and calling our remove function when clicking Remove button
*/
