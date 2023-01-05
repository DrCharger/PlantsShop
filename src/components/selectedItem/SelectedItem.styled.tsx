import styled from "styled-components";
import { AbsoluteType, MyButton } from "../../types/style.types";
import Badge, { BadgeProps } from "@mui/material/Badge";

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

export const CounterBTN = styled.button<MyButton>`
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 10px ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: ${(props) => props.tall || "36px"};
  height: ${(props) => props.tall || "36px"};
  margin: ${(props) => props.margin || "0 25px"};
  font-size: ${(props) => props.size || "28px"};
`;

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: -5,
    padding: "0 4px",
    fontSize: "14px",
  },
}));
