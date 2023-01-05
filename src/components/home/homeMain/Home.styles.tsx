import styled from "styled-components";
import { Flex } from "../../../types/style.types";

export const Input = styled("input")`
  height: 45px;
  width: 100%;
  background: #f8f8f8;
  padding-left: 10%;
  outline: none;
  border: none;
  color: #a5a5a5;
`;

export const SearchButton = styled("button")`
  display: flex;
  width: 45px;
  height: 45px;
  border: none;
  padding: 0;
  box-shadow: 0px 10px 20px ${({ theme }) => theme.palette.primary.main};
  border-radius: 14px;
  margin-left: 5%;
  background: linear-gradient(
    137deg,
    ${({ theme }) => theme.palette.primary.main} -24.6%,
    ${({ theme }) => theme.palette.secondary.main}
  );
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Flexer = styled("div")<Flex>`
  display: flex;
  flex-direction: ${(props) => props.row || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${(props) => props.margin || "0 0 5% 0"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
`;

export const Absoluter = styled("div")`
  position: relative;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 10px;
  color: ${({ theme }) => theme.palette.text.icons};
`;

export const StyledIMG = styled("div")`
  width: 100%;
  max-height: 165px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const StyledIMGText = styled("div")`
  position: absolute;
  color: ${({ theme }) => theme.palette.text.secondary};
  z-index: 5;
  top: 15px;
  left: 15px;
  font-size: 13px;
  text-transform: uppercase;
  max-width: 60%;
  text-align: start;
`;

export const StyledH2 = styled("h2")`
  font-size: 20px;
  font-weight: 900;
  margin: 3px 0;
  & span {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
export const StyledP = styled("p")`
  color: ${({ theme }) => theme.palette.text.parag};
  margin: 5px;
`;
