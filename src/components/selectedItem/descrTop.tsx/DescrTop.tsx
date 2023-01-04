import React from "react";
import { Rating, Typography } from "@mui/material";
import { Flexer } from "../../home/homeMain/Home.styles";
import { DescrTopProps } from "../../../types/propTypes";

const DescrTop: React.FC<DescrTopProps> = ({ el }) => {
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
    </>
  );
};

export default DescrTop;
