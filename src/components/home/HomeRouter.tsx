import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./homeMain/Home";
import { Main } from "./HomeRoter.styled";
import "./home.css";
import SelectedItem from "../selectedItem/SelectedItem";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import { connect } from "react-redux";
import { minusFavourites, setFavourites } from "src/usersStore/users.actions";
import { IMyItem } from "../../types/item.types";
import {
  MinusFavouriteAction,
  PlusFavouriteAction,
} from "../../types/users.types";

type HomeRoterProps = {
  setFavourites: (fav: IMyItem) => PlusFavouriteAction;
  minusFavourites: (id: number) => MinusFavouriteAction;
  favourites: IMyItem[];
};

const HomeRouter: React.FC<HomeRoterProps> = (props) => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home favourites={props.favourites} />} />
        <Route
          path="/prod/:id"
          element={
            <SelectedItem
              setFavourites={props.setFavourites}
              minusFavourites={props.minusFavourites}
              favourites={props.favourites}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Main>
  );
};

const mapState = (state: any) => {
  return {
    favourites: state.usersList.favourites,
  };
};

const mapDispatch = {
  setFavourites: setFavourites,
  minusFavourites: minusFavourites,
};

export default connect(mapState, mapDispatch)(HomeRouter);
