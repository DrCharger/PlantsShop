export interface IBanner {
  id: string;
  img: any;
}

export interface IMyItem {
  id: number;
  img: string;
  name: string;
  price: string;
  discount?: number;
  url: string;
}

export type Flex = {
  justify?: string;
  align?: string;
  row?: string;
  height?: string;
  margin?: string;
  width?: string;
};

export type Span = {
  color?: string;
  deco?: string;
};
