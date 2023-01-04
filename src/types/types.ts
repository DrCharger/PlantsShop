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
  description: string;
  size?: string[];
  CODE: number;
  categories?: string;
  tags?: string[];
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
  size?: string;
  margin?: string;
  weight?: string;
};
export type AbsoluteType = {
  top?: string;
  left?: string;
  right?: string;
};

export type MyButton = {
  size?: string;
  tall?: string;
  margin?: string;
};
