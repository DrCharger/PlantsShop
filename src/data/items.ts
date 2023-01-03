import image1 from "../img/prods/image1.png";
import image2 from "../img/prods/image2.png";
import image3 from "../img/prods/image3.png";
import image4 from "../img/prods/image4.png";
import image5 from "../img/prods/image5.png";
import image6 from "../img/prods/image6.png";
import image7 from "../img/prods/image7.png";
import image8 from "../img/prods/image8.png";
import image9 from "../img/prods/image9.png";
import { IMyItem } from "../types/types";

export const items: IMyItem[] = [
  { id: 1, img: image1, name: "Barberton Daisy", price: "119", url: "daisy" },
  {
    id: 2,
    img: image2,
    name: "African Violet",
    price: "199",
    discount: 13,
    url: "african",
  },
  {
    id: 3,
    img: image3,
    name: "Angel Wing Begonia",
    price: "169",
    url: "angel",
  },
  {
    id: 4,
    img: image5,
    name: "Beach Spider Lily",
    price: "125",
    url: "spider",
  },
  {
    id: 5,
    img: image7,
    name: "Blushing Bromeliad",
    price: "139",
    url: "bromeliad",
  },
  { id: 6, img: image8, name: "Aluminum Plant", price: "179", url: "aluminum" },
  {
    id: 7,
    img: image9,
    name: "Bird's Nest Fern",
    price: "199",
    discount: 25,
    url: "birdsNest",
  },
  {
    id: 8,
    img: image4,
    name: "Broadleaf Lady Palm",
    price: "59",
    url: "ladyPalm",
  },
  {
    id: 9,
    img: image6,
    name: "Chinese Evergreen",
    price: "39",
    url: "evergreen",
  },
];
