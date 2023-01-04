import { OrderType } from "../../types/item.types";
import React from "react";

type CartTypes = {
  order: OrderType[];
};

const Cart: React.FC<CartTypes> = ({ order }) => {
  console.log(order);

  return <div>Cart</div>;
};

export default Cart;
