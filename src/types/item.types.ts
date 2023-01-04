export interface IMyItem {
  id: number;
  img: string;
  name: string;
  price: string;
  discount?: number;
  url: string;
  description: string;
  size?: string[];
  CODE: number;
  categories?: string;
  tags?: string[];
}

export interface OrderType {
  id: number;
  img: string;
  name: string;
  price: string;
  totalPrice: string;
  quantity: number;
  choosenSize: string;
}
