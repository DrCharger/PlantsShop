import { OrderType } from "../types/item.types";

export const pricer = (data: OrderType[]): number =>
  data
    .map((item: OrderType) => Number(item.price) * item.quantity)
    .reduce((acc: number, el: number) => acc + el, 0);

export const marginCheck = (length: number): any => {
  if (length <= 3) return "0";
  if (length === 4) return "200px";
  if (length >= 5) return "330px";
};

export const editArrByCount = (
  arr: OrderType[],
  obj: OrderType,
  counter?: number
) =>
  arr.map((item) =>
    item.id === obj.id && item.choosenSize === obj.choosenSize
      ? counter
        ? { ...item, quantity: counter }
        : { ...item, quantity: item.quantity + obj.quantity }
      : item
  );

export const findItemInArr = (arr: OrderType[], obj: OrderType) =>
  arr.find(
    (item) => item.id === obj.id && item.choosenSize === obj.choosenSize
  );
