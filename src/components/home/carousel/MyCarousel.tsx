import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { banner } from "../../../data/banner";
import {
  StyledH2,
  StyledIMG,
  StyledIMGText,
  StyledP,
} from "../homeMain/Home.styles";
const MyCarousel: React.FC = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showThumbs={false}
      stopOnHover={true}
    >
      {banner.map((item) => (
        <StyledIMG key={item.id}>
          <img src={item.img} alt={"first"} />
          <StyledIMGText>
            <span>Welcome to GreenShop</span>{" "}
            <StyledH2>
              Let’s make a better <span>planet</span>
            </StyledH2>
            <StyledP>
              We are an online plant shop offering a wide range{" "}
            </StyledP>
            <Button
              sx={{
                display: "flex",
                padding: 0,
                paddingLeft: "5px",
              }}
              variant="text"
              color="secondary"
              endIcon={<ArrowForwardIcon sx={{ margin: "auto" }} />}
            >
              <span style={{ marginTop: "3px" }}>SHOP NOW</span>
            </Button>
          </StyledIMGText>
        </StyledIMG>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
