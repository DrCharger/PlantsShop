import { NavigateFunction } from "react-router-dom";
import {
  MinusFavouriteAction,
  OrderAction,
  OrderEditAction,
  OrderFilterAction,
  PlusFavouriteAction,
} from "./users.types";
import { OrderType } from "./item.types";
import { IMyItem } from "./item.types";

export type DescriptionProps = {
  el: IMyItem;
  navigate: NavigateFunction;
  setOrder: (order: OrderType) => OrderAction;
  quantity: number;
  orderList: OrderType[];
  editOrder: (order: OrderType[]) => OrderEditAction;
};

export type ActionBTNProps = {
  handleClickVariant: () => void;
  navigate: NavigateFunction;
  quantity: number;
  text: string;
};

export type DescrTopProps = {
  el: IMyItem;
};

export type DesrcFooterProps = {
  el: IMyItem;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  newPrice: string;
};

export type NotistackProps = {
  text: string;
};

export type CartProps = {
  orderList: OrderType[];
  minusOrder: (id: number) => OrderFilterAction;
};

export type CartItemProps = {
  order: OrderType;
  minusOrder: (id: number) => OrderFilterAction;
  editOrder: (order: OrderType[]) => OrderEditAction;
  orderList: OrderType[];
};

export type QuantityTypeProps = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export type QuantityProdTypeProps = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  editOrder: (order: OrderType[]) => OrderEditAction;
  size: string;
  tall: string;
  margin: string;
  id: number;
  orderSize: string;
};

export type ApplierPropsType = {
  totalPrice: number;
};

export type SelectedItemProps = {
  setFavourites: (fav: IMyItem) => PlusFavouriteAction;
  minusFavourites: (id: number) => MinusFavouriteAction;
  setOrder: (order: OrderType) => OrderAction;
  favourites: IMyItem[];
  quantity: number;
  orderList: OrderType[];
};
