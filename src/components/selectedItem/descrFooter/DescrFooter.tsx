import React from "react";
import { Flexer } from "../../home/homeMain/Home.styles";
import { StyledSpan } from "../../home/homeMain/content/Content.styled";
import Quantity from "../Quantity";
import { DesrcFooterProps } from "../../../types/propTypes";

const DescrFooter: React.FC<DesrcFooterProps> = ({
  el,
  counter,
  setCounter,
  newPrice,
}) => {
  return (
    <>
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
    </>
  );
};

export default DescrFooter;
