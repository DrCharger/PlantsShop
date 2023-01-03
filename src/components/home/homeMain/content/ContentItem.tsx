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

type ContentItemProps = {
  el: IMyItem;
};

const ContentItem: React.FC<ContentItemProps> = ({ el }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="150" image={el.img} alt={el.name} />
        <CardContent sx={{ height: "80px" }}>
          <Flexer row="column" align="start" justify="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {el.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {Number(el.price).toFixed(2)}
            </Typography>
          </Flexer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ContentItem;
