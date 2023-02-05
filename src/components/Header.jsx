import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const Header = ({handleCart}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton 
        color="inherit"
        onClick={handleCart}
        >
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
