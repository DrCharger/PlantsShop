import React from "react";
import { IntegrationNotistack } from "../../snackbar/StyledSnackbar";
import { StyledBadge } from "../SelectedItem.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, IconButton } from "@mui/material";
import { Flexer } from "../../home/homeMain/Home.styles";
import { ActionBTNProps } from "../../../types/propTypes";

const ActionBTN: React.FC<ActionBTNProps> = ({
  navigate,
  handleClickVariant,
  quantity,
  text,
}) => {
  return (
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
        onClick={handleClickVariant}
      >
        <IntegrationNotistack text={text} />
      </Button>
      <IconButton
        aria-label="cart"
        onClick={() => navigate("/cart")}
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
        <StyledBadge badgeContent={quantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>{" "}
    </Flexer>
  );
};

export default ActionBTN;
