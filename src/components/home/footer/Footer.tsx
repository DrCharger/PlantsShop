import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Badge, Button } from "@mui/material";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import { styleForBigBox, styleForButton, styleForSmallBox } from "./style";
import { IMyItem } from "../../../types/item.types";

type FooterProps = {
  favourites: IMyItem[];
};

const Footer: React.FC<FooterProps> = ({ favourites }) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={styleForBigBox}>
      <Box sx={styleForSmallBox}>
        <Button variant="contained" sx={styleForButton} color="secondary">
          <DocumentScannerOutlinedIcon />
        </Button>
      </Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: "relative",
          background: "lightgrey",
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Favorites"
          icon={
            <Badge badgeContent={favourites.length} color="secondary">
              <FavoriteIcon />
            </Badge>
          }
        />
        <BottomNavigationAction disabled={true} />
        <BottomNavigationAction
          label="Basket"
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
