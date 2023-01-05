import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./homeMain/Home";
import { Main } from "./HomeRoter.styled";
import "./home.css";
import SelectedItem from "../selectedItem/SelectedItem";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import { connect } from "react-redux";
import * as actions from "src/usersStore/users.actions";
import { IMyItem, OrderType } from "../../types/item.types";
import * as actionTypes from "../../types/users.types";

type HomeRoterProps = {
  setFavourites: (fav: IMyItem) => actionTypes.PlusFavouriteAction;
  setOrder: (order: OrderType) => actionTypes.OrderAction;
  minusFavourites: (id: number) => actionTypes.MinusFavouriteAction;
  minusOrder: (id: number) => actionTypes.OrderFilterAction;
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
              orderList={props.orderList}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart orderList={props.orderList} minusOrder={props.minusOrder} />
          }
        />
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
  setFavourites: actions.setFavourites,
  minusFavourites: actions.minusFavourites,
  setOrder: actions.setOrder,
  minusOrder: actions.minusOrder,
};

export default connect(mapState, mapDispatch)(HomeRouter);
