import { NavigateFunction } from "react-router-dom";
import { OrderAction, OrderFilterAction } from "./users.types";
import { OrderType } from "./item.types";
import { IMyItem } from "./types";

export type DescriptionProps = {
  el: IMyItem;
  navigate: NavigateFunction;
  setOrder: (order: OrderType) => OrderAction;
  quantity: number;
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
};

export type QuantityTypeProps = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  size?: string;
  tall?: string;
  margin?: string;
};
