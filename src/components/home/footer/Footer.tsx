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
import { useNavigate } from "react-router-dom";

type FooterProps = {
  favourites: IMyItem[];
};

const Footer: React.FC<FooterProps> = ({ favourites }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

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
          background: "rgb(240, 240, 240)",
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate("/home")}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={
            <Badge badgeContent={favourites.length} color="secondary">
              <FavoriteIcon />
            </Badge>
          }
          onClick={() => navigate("/home")}
        />
        <BottomNavigationAction disabled={true} />
        <BottomNavigationAction
          label="Basket"
          icon={<ShoppingCartOutlinedIcon />}
          onClick={() => navigate("/cart")}
        />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
