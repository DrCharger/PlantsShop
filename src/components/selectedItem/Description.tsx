import React, { useState } from "react";
import { Button } from "@mui/material";
import { DescriptionProps } from "../../types/propTypes";
import ActionBTN from "./actionBTN/ActionBTN";
import DescrTop from "./descrTop.tsx/DescrTop";
import DescrFooter from "./descrFooter/DescrFooter";
import { connect } from "react-redux";
import { editOrder } from "src/usersStore/users.actions";
import { editArrByCount, findItemInArr } from "src/utilits/utilits";

const Description: React.FC<DescriptionProps> = ({
  el,
  quantity,
  orderList,
  navigate,
  setOrder,
  editOrder,
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
    if (findItemInArr(orderList, newObject) === undefined) {
      setOrder(newObject);
    } else {
      editOrder(editArrByCount(orderList, newObject));
    }
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

const mapDispatch = {
  editOrder: editOrder,
};

export default connect(null, mapDispatch)(Description);
