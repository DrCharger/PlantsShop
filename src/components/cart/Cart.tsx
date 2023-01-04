import React, { useState } from "react";
import { CartProps } from "../../types/propTypes";
import { Absolute } from "../selectedItem/SelectedItem.styled";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import { Flexer } from "../home/homeMain/Home.styles";
import CartItem from "./CartItem";

const Cart: React.FC<CartProps> = ({ orderList }) => {
  console.log(orderList);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Absolute top="5%" left="5%">
        <IconButton aria-label="back" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Absolute>
      <Flexer margin="4% 0">
        <StyledSpan size="25px">Cart</StyledSpan>
      </Flexer>
      {orderList.map((order) => (
        <CartItem
          setOpen={setOpen}
          open={open}
          key={`${order.id}${order.choosenSize}${order.quantity}`}
          order={order}
        />
      ))}
    </div>
  );
};

export default Cart;
