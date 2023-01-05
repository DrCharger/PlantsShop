import React from "react";
import { CartProps } from "../../types/propTypes";
import { Absolute } from "../selectedItem/SelectedItem.styled";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import { Flexer } from "../home/homeMain/Home.styles";
import CartItem from "./CartItem";
import Applier from "./apply/Applier";
import { marginCheck, pricer } from "src/utilits/utilits";
import { StyledDiv } from "./Cart.styled";

const Cart: React.FC<CartProps> = ({ orderList, minusOrder }) => {
  const navigate = useNavigate();
  let margin = marginCheck(orderList.length);

  return (
    <StyledDiv margin={margin}>
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
          key={`${order.id}${order.choosenSize}${order.quantity}`}
          order={order}
          minusOrder={minusOrder}
          orderList={orderList}
        />
      ))}
      <Applier totalPrice={pricer(orderList)} />
    </StyledDiv>
  );
};

export default Cart;
