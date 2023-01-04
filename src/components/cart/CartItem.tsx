import { Box, IconButton, Typography } from "@mui/material";
import { CartItemProps } from "../../types/propTypes";
import React, { useState } from "react";
import { Flexer } from "../home/homeMain/Home.styles";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import Quantity from "../selectedItem/Quantity";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem: React.FC<CartItemProps> = ({ order, open, setOpen }) => {
  const [counter, setCounter] = useState(order.quantity);
  return (
    <Flexer>
      <Box
        sx={{
          width: "100%",
          boxShadow: "0px 6px 20px rgba(210, 210, 210, 0.5)",
          borderRadius: "14px",
          height: "100px",
          overflow: "hidden",
          margin: "20px 0",
        }}
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
                  {order.price}
                </StyledSpan>
              </Box>
            </Flexer>
          </Box>
          <Flexer justify="end" margin="0" width="30%">
            <Quantity
              counter={counter}
              setCounter={setCounter}
              size="15px"
              tall="25px"
              margin="10px"
            />
          </Flexer>
        </Flexer>
      </Box>
      {open && (
        <IconButton>
          <DeleteIcon />
        </IconButton>
      )}
    </Flexer>
  );
};

export default CartItem;
