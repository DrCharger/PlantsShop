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
import { IMyItem, OrderType } from "../../types/item.types";
import {
  MinusFavouriteAction,
  OrderAction,
  PlusFavouriteAction,
} from "../../types/users.types";

type SelectedItemProps = {
  setFavourites: (fav: IMyItem) => PlusFavouriteAction;
  minusFavourites: (id: number) => MinusFavouriteAction;
  setOrder: (order: OrderType) => OrderAction;
  favourites: IMyItem[];
};

const SelectedItem: React.FC<SelectedItemProps> = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  const findedItem = items.find((elem) => elem.url === param.id);
  let color;
  if (findedItem !== undefined) {
    props.favourites.find((fav) => fav.id === findedItem.id) === undefined
      ? (color = "green")
      : (color = "red");
  }
  const [heart, setHeart] = useState(color);

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
            onClick={() => {
              setHeart("red");
              props.setFavourites(findedItem);
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="like"
            sx={{ color: heart }}
            onClick={() => {
              setHeart("green");
              props.minusFavourites(findedItem.id);
            }}
          >
            <FavoriteIcon />
          </IconButton>
        )}
      </Absolute>
      <Description
        el={findedItem}
        navigate={navigate}
        setOrder={props.setOrder}
      />
    </>
  );
};

export default SelectedItem;
