import React from "react";
import { Absoluter, Flexer, Input, SearchButton } from "./Home.styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel from "../carousel/MyCarousel";
import Footer from "../footer/Footer";
import Content from "./content/Content";
import { IMyItem } from "../../../types/item.types";

type HomeProps = {
  favourites: IMyItem[];
};

const Home: React.FC<HomeProps> = ({ favourites }) => {
  return (
    <>
      <Flexer>
        <Absoluter>
          <SearchIcon sx={{ position: "absolute", top: "25%", left: "2%" }} />
          <Input placeholder="Find your plants" />
        </Absoluter>
        <SearchButton>
          <FilterListIcon sx={{ margin: "auto", fontSize: "30px" }} />
        </SearchButton>
      </Flexer>
      <MyCarousel />
      <Content />
      <Footer favourites={favourites} />
    </>
  );
};

export default Home;
