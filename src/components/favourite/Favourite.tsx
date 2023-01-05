import React from "react";
import { Absolute } from "../selectedItem/SelectedItem.styled";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { StyledSpan } from "../home/homeMain/content/Content.styled";
import { Flexer } from "../home/homeMain/Home.styles";
import { FavouritePropsType } from "../../types/propTypes";
import Content from "../home/homeMain/content/Content";

const Favourite: React.FC<FavouritePropsType> = ({ favourites }) => {
  const navigate = useNavigate();
  return (
    <>
      <Absolute top="5%" left="5%">
        <IconButton aria-label="back" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Absolute>
      <Flexer margin="4% 0">
        <StyledSpan size="25px">Favourite</StyledSpan>
      </Flexer>
      <Content info={favourites} perPage={6} />
    </>
  );
};

export default Favourite;
