import React, { useState, useEffect } from "react";
import { shopItems } from "../data";

const Shop = () => {
  const [items, setItems] = useState(shopItems);

  const [cart, setCart] = useState([]);
  //hold our cart state
  //We can call setCart() and pass in the state changes
  //we want to make to cart. Let's create our addToCart function

  const [cartTotal, setCartTotal] = useState(0);

  //LAST
  //Finally, we will keep track of the total using useState and useEffect:
  useEffect(() => {
    total();
  }, [cart]);
  //The useEffect hook contains an arrow function. Inside the arrow function,
  //we call our total function.
  //The second argument in useEffect is the dependency array containing [cart].
  //useEffect will detect changes in the variables named within its dependency array.
  //When it detects a change, it will run again.
  //Every time an item is added or removed from the cart, useEffect will detect a
  //change in cart and run the total function.

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  //create formatted array
  const listItems = items.map((el) => (
    <div className="mb-2" key={el.id}>
      {`${el.name}: $${el.price}`}
      <input
        style={{ marginLeft: "13px" }}
        type="submit"
        value="add"
        onClick={() => addToCart(el)}
      />
    </div>
  ));

  // add to cart function
  const addToCart = (el) => {
    setCart([...cart, el]);
  };
  //addToCart takes the element selected and adds it to the cart array.
  //We are going to display the cart, in our app, under our store. First, make a new
  //formatted array from the cart array:
  const cartItems = cart.map((el) => (
    <div className="mb-2" key={el.id}>
      {`${el.name}: $${el.price}`}
      <input
        style={{ marginLeft: "13px" }}
        type="submit"
        value="remove"
        onClick={() => removeFromCart(el)}
      />
    </div>
  ));

  //We can create our removeFromCart function using the filter method.
  //note* We will make a copy of the cart state before filtering:
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  //Change the return statement to include cartItems:

  return (
    <div className="container-fluid bg-light p-5 text-center">
      <div className="card mb-3 p-5">
        <h1>STORE</h1>
        <div>{listItems}</div>
      </div>
      <div className="card mb-3 p-5">
        <h2>CART</h2>
        <div>{cartItems}</div>
        <div>Total: ${cartTotal}</div>
      </div>
    </div>
  );
};

export default Shop;
