import React, { useState } from "react";
import { Button } from "@mui/material";
import { DescriptionProps } from "../../types/propTypes";
import ActionBTN from "./actionBTN/ActionBTN";
import DescrTop from "./descrTop.tsx/DescrTop";
import DescrFooter from "./descrFooter/DescrFooter";

const Description: React.FC<DescriptionProps> = ({
  el,
  navigate,
  setOrder,
  quantity,
}) => {
  const [active, setActive] = useState("S");
  const [counter, setCounter] = useState(1);

  const handleClickVariant = () => {
    const newObject = {
      id: el.id,
      img: el.img,
      name: el.name,
      price: newPriceOne,
      totalPrice: newPrice,
      quantity: counter,
      choosenSize: active,
    };
    setOrder(newObject);
  };

  const newPriceOne = el.discount
    ? Math.floor(Number(el.price) * (1 - el.discount / 100)).toFixed(2)
    : Number(el.price).toFixed(2);

  const newPrice = (Number(newPriceOne) * counter).toFixed(2);

  return (
    <>
      <DescrTop el={el} />
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
      <DescrFooter
        el={el}
        counter={counter}
        newPrice={newPrice}
        setCounter={setCounter}
      />
      <ActionBTN
        quantity={quantity}
        handleClickVariant={handleClickVariant}
        navigate={navigate}
        text={el.name}
      />
    </>
  );
};

export default Description;
