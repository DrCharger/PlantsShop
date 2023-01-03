import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Absolute } from "./SelectedItem.styled";
import ImageListItem from "@mui/material/ImageListItem";
import { items } from "../../data/items";
import { useNavigate, useParams } from "react-router-dom";
import Description from "./Description";

const SelectedItem = () => {
  const param = useParams();
  const navigate = useNavigate();
  const findedItem = items.find((elem) => elem.url === param.id);
  const [heart, setHeart] = useState("green");

  if (findedItem === undefined) return null;

  return (
    <>
      <ImageListItem>
        <img
          src={findedItem?.img}
          srcSet={findedItem?.img}
          alt={findedItem?.name}
          loading="lazy"
        />
      </ImageListItem>
      <Absolute top="5%" left="5%">
        <IconButton aria-label="back" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Absolute>
      <Absolute top="5%" right="5%">
        {heart === "green" ? (
          <IconButton
            aria-label="like"
            sx={{ color: heart }}
            onClick={() => setHeart("red")}
          >
            <FavoriteBorderIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="like"
            sx={{ color: heart }}
            onClick={() => setHeart("green")}
          >
            <FavoriteIcon />
          </IconButton>
        )}
      </Absolute>
      <Description el={findedItem} />
    </>
  );
};

export default SelectedItem;
