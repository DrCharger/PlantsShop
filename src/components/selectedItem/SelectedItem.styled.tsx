import styled from "styled-components";
import { AbsoluteType } from "../../types/types";

export const Absolute = styled.div<AbsoluteType>`
  position: absolute;
  padding: 3px;
  background-color: ${({ theme }) => theme.palette.text.disabled};
  opacity: 0.5;
  border-radius: 50%;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
`;

export const CounterBTN = styled.button`
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 10px ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: 36px;
  height: 36px;
  margin: 0 25px;
  font-size: 28px;
`;
