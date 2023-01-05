/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import { CartItemProps } from "../../types/propTypes";
import React, { useEffect, useState } from "react";
import { Flexer } from "../home/homeMain/Home.styles";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import Quantity from "./quantity/Quantity";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton/IconButton";
import { connect } from "react-redux";
import { editOrder } from "src/usersStore/users.actions";
import { editArrByCount } from "src/utilits/utilits";

const CartItem: React.FC<CartItemProps> = ({
  order,
  minusOrder,
  editOrder,
  orderList,
}) => {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(order.quantity);

  useEffect(() => {
    editOrder(editArrByCount(orderList, order, counter));
  }, [counter, order.id]);

  return (
    <>
      <Flexer width="120%" margin="0">
        <Box
          sx={[
            {
              width: "80%",
              boxShadow: "0px 6px 20px rgba(210, 210, 210, 0.5)",
              borderRadius: "14px",
              height: "100px",
              overflow: "hidden",
              margin: "20px 0",
              transition: "all 1s",
            },
            open && {
              marginLeft: "-150px",
            },
            !open && {
              marginLeft: "0px",
            },
          ]}
        >
          <Flexer margin="0" justify="space-between">
            <Box sx={{ height: "100px" }} onClick={() => setOpen(!open)}>
              <Flexer>
                <img
                  src={order.img}
                  srcSet={order.img}
                  alt={order.name}
                  loading="lazy"
                  style={{ maxHeight: "100%" }}
                />
                <Box>
                  <Typography variant="body1">
                    <StyledSpan weight="800" size="14px">
                      {order.name}
                    </StyledSpan>
                  </Typography>
                  <Typography variant="body1">
                    <StyledSpan size="14px" margin="0 0 20px">
                      Size: {order.choosenSize}
                    </StyledSpan>
                  </Typography>
                  <StyledSpan color="green" weight="800" size="18px">
                    ${(Number(order.price) * counter).toFixed(2)}
                  </StyledSpan>
                </Box>
              </Flexer>
            </Box>
            <Flexer justify="end" margin="0" width="30%">
              <Quantity
                counter={counter}
                setCounter={setCounter}
                editOrder={editOrder}
                size="13px"
                tall="20px"
                margin="10px"
                id={order.id}
                orderSize={order.choosenSize}
              />
            </Flexer>
          </Flexer>
        </Box>

        <IconButton
          sx={{ ml: "30px" }}
          onClick={() => {
            minusOrder(order.id);
            setOpen(false);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Flexer>
    </>
  );
};

const mapDispatch = {
  editOrder: editOrder,
};

export default connect(null, mapDispatch)(CartItem);
