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
}

export type Flex = {
  justify?: string;
  align?: string;
  row?: string;
  height?: string;
};
