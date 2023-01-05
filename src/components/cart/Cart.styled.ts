import styled from "styled-components";
import { MyDiv } from "../../types/style.types";

export const StyledDiv = styled.div<MyDiv>`
  min-height: 90vh;
  overflow: hidden;
  margin-bottom: ${(props) => props.margin || "0"};
`;
