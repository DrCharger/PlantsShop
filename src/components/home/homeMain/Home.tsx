import React from "react";
import { Absoluter, Flexer, Input, SearchButton } from "./Home.styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel from "../carousel/MyCarousel";
import Footer from "../footer/Footer";
import Content from "./content/Content";
import { Route, Routes } from "react-router-dom";
import Favourite from "src/components/favourite/Favourite";
import { items } from "../../../data/items";
import { HomeProps } from "../../../types/propTypes";

const Home: React.FC<HomeProps> = ({ favourites, orderList }) => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Flexer>
                <Absoluter>
                  <SearchIcon
                    sx={{ position: "absolute", top: "25%", left: "2%" }}
                  />
                  <Input placeholder="Find your plants" />
                </Absoluter>
                <SearchButton>
                  <FilterListIcon sx={{ margin: "auto", fontSize: "30px" }} />
                </SearchButton>
              </Flexer>
              <MyCarousel />
              <Content info={items} perPage={4} />
            </>
          }
        />
        <Route
          path="/favourite"
          element={<Favourite favourites={favourites} />}
        />
      </Routes>
      <Footer favourites={favourites} orderList={orderList} />
    </>
  );
};

export default Home;
