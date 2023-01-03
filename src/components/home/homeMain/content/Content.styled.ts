import styled from "styled-components";
import { Span } from "../../../../types/types";

export const StyledDiscount = styled.span<Span>`
  color: #fff;
  position: absolute;
  padding: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  top: 10px;
`;

export const StyledSpan = styled.span<Span>`
  color: ${(props) => props.color || "#000"};
  text-decoration: ${(props) => props.deco || "none"};
`;
