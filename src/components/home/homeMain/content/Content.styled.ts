import styled from "styled-components";
import { Span } from "../../../../types/style.types";

export const StyledDiscount = styled.span<Span>`
  color: #fff;
  position: absolute;
  padding: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  top: 10px;
`;

export const StyledSpan = styled.span<Span>`
  display: inline-block;
  color: ${(props) => props.color || "#000"};
  text-decoration: ${(props) => props.deco || "none"};
  font-size: ${(props) => props.size || "18px"};
  font-weight: ${(props) => props.weight || "400"};
  margin: ${(props) => props.margin || "0"};
`;
