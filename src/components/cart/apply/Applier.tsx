import { Box, Button } from "@mui/material";
import { ApplierPropsType } from "../../../types/propTypes";
import React, { useState } from "react";
import { StyledSpan } from "src/components/home/homeMain/content/Content.styled";
import { Flexer } from "../../home/homeMain/Home.styles";
import { StyledInput } from "./Applier.styled";
import { styleForBigBox, styleForButton } from "./style";
import { couponDiscount } from "../../../data/coupon";

const Applier: React.FC<ApplierPropsType> = ({ totalPrice }) => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(couponDiscount);
  const [discountPrice, setdiscountPrice] = useState(0);

  const handleClick = () => {
    const finded = discount.find((el) => el.text === coupon);
    console.log(finded);

    if (finded && finded.used === false) {
      const changeFinded = discount.map((elem) =>
        elem === finded ? { ...elem, used: true } : elem
      );
      setdiscountPrice(finded.discount / 100);
      setDiscount(changeFinded);
      setCoupon("");
    } else {
      alert("There is no such coupon or you already used it!");
      setCoupon("");
    }
  };

  return (
    <Box sx={styleForBigBox}>
      <Box sx={{ position: "relative", mb: "20px" }}>
        <StyledInput
          placeholder="Enter coupon code here..."
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <Button
          variant="contained"
          sx={styleForButton}
          color="secondary"
          onClick={handleClick}
        >
          Apply
        </Button>
      </Box>
      <Box>
        <Flexer justify="space-between" margin="25px 0 18px">
          <StyledSpan>Subtotal</StyledSpan>
          <StyledSpan weight="800">${totalPrice.toFixed(2)}</StyledSpan>
        </Flexer>
        <Flexer justify="space-between" margin="18px 0">
          <StyledSpan>Coupon Discount</StyledSpan>
          <StyledSpan weight="800">
            (-) ${(totalPrice * discountPrice).toFixed(2)}
          </StyledSpan>
        </Flexer>
        <Flexer justify="space-between" margin="18px 0">
          <StyledSpan>Shiping</StyledSpan>
          <StyledSpan weight="800">$16.00</StyledSpan>
        </Flexer>
        <Flexer justify="space-between" margin="20px 0">
          <StyledSpan weight="800" size="22px">
            Total
          </StyledSpan>
          <StyledSpan weight="800" color="green" size="22px">
            ${(totalPrice - discountPrice + 16).toFixed(2)}
          </StyledSpan>
        </Flexer>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%", height: "60px", borderRadius: "40px" }}
        >
          Proceed To Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Applier;
