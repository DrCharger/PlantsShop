import React from "react";
import { IMyItem } from "../../../../types/types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Flexer } from "../Home.styles";
import { StyledDiscount, StyledSpan } from "./Content.styled";
import { useNavigate } from "react-router-dom";

type ContentItemProps = {
  el: IMyItem;
};

const ContentItem: React.FC<ContentItemProps> = ({ el }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/prod/${el.url}`)}>
        {el.discount && <StyledDiscount>% {el.discount} OFF</StyledDiscount>}
        <CardMedia component="img" height="150" image={el.img} alt={el.name} />
        <CardContent sx={{ height: "80px" }}>
          <Flexer row="column" align="start" justify="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {el.name}
            </Typography>
            {el.discount ? (
              <Flexer justify="space-between" align="end" margin="0">
                <StyledSpan>
                  ${" "}
                  {Math.floor(
                    Number(el.price) * (1 - el.discount / 100)
                  ).toFixed(2)}
                </StyledSpan>
                <StyledSpan color="rgb(181, 181, 181)" deco="line-through">
                  $ {Number(el.price).toFixed(2)}
                </StyledSpan>
              </Flexer>
            ) : (
              <StyledSpan>$ {Number(el.price).toFixed(2)}</StyledSpan>
            )}
          </Flexer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ContentItem;
