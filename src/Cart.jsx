import React from "react";
import { useGlobalContext } from "./context";
import "./Cart.css";

export default function Cart({ id, img, title, price, amount }) {
  const { add, dec, rem } = useGlobalContext();

  return (
    <div className="cart-container">
      <img src={img} alt="img" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{amount}</p>
      <div className="btn-div">
          <button onClick={() => add(id)}>add</button>
      <button
        onClick={amount <= 1 ? () => rem(id) : () => dec(id)}
        className="dec-button"
      >
        dec
      </button>
      <button onClick={() => rem(id)} className="rem-button">
        rem
      </button>
      </div>
    
    </div>
  );
}
