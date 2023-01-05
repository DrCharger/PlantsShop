import { QuantityTypeProps } from "../../types/propTypes";
import React from "react";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import { CounterBTN } from "./SelectedItem.styled";

const Quantity: React.FC<QuantityTypeProps> = ({ counter, setCounter }) => {
  return (
    <div>
      <CounterBTN
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          counter <= 1 ? null : setCounter(counter - 1);
        }}
      >
        -
      </CounterBTN>
      <StyledSpan color="rgba(70, 163, 88, 100%)">{counter}</StyledSpan>
      <CounterBTN onClick={() => setCounter(counter + 1)}>+</CounterBTN>
    </div>
  );
};

export default Quantity;
