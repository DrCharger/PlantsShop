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
