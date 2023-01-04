import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./homeMain/Home";
import { Main } from "./HomeRoter.styled";
import "./home.css";
import SelectedItem from "../selectedItem/SelectedItem";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import { connect } from "react-redux";
import {
  minusFavourites,
  setFavourites,
  setOrder,
} from "src/usersStore/users.actions";
import { IMyItem, OrderType } from "../../types/item.types";
import {
  MinusFavouriteAction,
  OrderAction,
  PlusFavouriteAction,
} from "../../types/users.types";

type HomeRoterProps = {
  setFavourites: (fav: IMyItem) => PlusFavouriteAction;
  setOrder: (order: OrderType) => OrderAction;
  minusFavourites: (id: number) => MinusFavouriteAction;
  orderList: OrderType[];
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
              setOrder={props.setOrder}
              quantity={props.orderList.length}
            />
          }
        />
        <Route path="/cart" element={<Cart orderList={props.orderList} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Main>
  );
};

const mapState = (state: any) => {
  return {
    favourites: state.usersList.favourites,
    orderList: state.usersList.order,
  };
};

const mapDispatch = {
  setFavourites: setFavourites,
  minusFavourites: minusFavourites,
  setOrder: setOrder,
};

export default connect(mapState, mapDispatch)(HomeRouter);
