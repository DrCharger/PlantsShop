import { IMyItem } from "../../types/types";
import React, { useState } from "react";
import { Button, IconButton, Rating, Typography } from "@mui/material";
import { Flexer } from "../home/homeMain/Home.styles";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Quantity from "./Quantity";

type DescriptionProps = {
  el: IMyItem;
};

const Description: React.FC<DescriptionProps> = ({ el }) => {
  const [active, setActive] = useState("S");
  const [counter, setCounter] = useState(1);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newObject = {
      ...el,
      totalPrice: newPrice,
      quantity: counter,
      size: active,
    };

    console.log(newObject);
  };

  const newPrice = el.discount
    ? (
        Math.floor(Number(el.price) * (1 - el.discount / 100)) * counter
      ).toFixed(2)
    : (Number(el.price) * counter).toFixed(2);

  return (
    <>
      <Flexer justify="space-between">
        <Typography variant="h5" component="h2" sx={{ fontWeight: 800 }}>
          {el.name}
        </Typography>
        <Flexer width="70px" margin="0">
          <Rating name="disabled" value={1} readOnly max={1} />
          <span>4.5 (19)</span>
        </Flexer>
      </Flexer>
      <Typography variant="subtitle1" sx={{ letterSpacing: 1 }}>
        {el.description}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "16px", marginTop: "10px", fontWeight: 800 }}
      >
        Size:
      </Typography>
      {el.size &&
        el.size.map((sizes) => (
          <Button
            key={sizes}
            variant={sizes === active ? "contained" : "outlined"}
            color="secondary"
            size="small"
            onClick={() => setActive(sizes)}
            sx={{
              borderRadius: "50%",
              padding: "5px",
              margin: "1%",
              minWidth: "30px",
            }}
          >
            {sizes}
          </Button>
        ))}
      <Flexer row="column" justify="start" align="start">
        <StyledSpan margin="5px 0" color="rgb(181, 181, 181)">
          SKU: {el.CODE}
        </StyledSpan>
        <StyledSpan margin="5px 0" color="rgb(181, 181, 181)">
          Categories: {el.categories}
        </StyledSpan>
        <StyledSpan margin="5px 0" color="rgb(181, 181, 181)">
          Tags: {el.tags?.join(", ")}
        </StyledSpan>
      </Flexer>
      <Flexer justify="space-between">
        <Flexer margin="0" justify="start">
          <StyledSpan size="20px" margin="0 10px 0 0">
            Q-ty :{" "}
          </StyledSpan>
          {<Quantity counter={counter} setCounter={setCounter} />}
        </Flexer>
        <StyledSpan size="20px" color="green">
          ${newPrice}
        </StyledSpan>
      </Flexer>
      <Flexer justify="start">
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "200px",
            height: "60px",
            borderRadius: "40px",
            boxShadow: "0px 10px 20px rgba(70, 163, 88, 0.3)",
          }}
          onClick={handleClick}
        >
          Buy Now
        </Button>
        <IconButton
          aria-label="cart"
          size="large"
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: "#c8cdcd",
            marginLeft: "20px",
            boxShadow: "0px 10px 20px #c8cdcd",

            ":hover": {
              backgroundColor: "#c8cdcd",
            },
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Flexer>
    </>
  );
};

export default Description;
