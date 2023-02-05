import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

export default function Basket(props) {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order,
    removeFromOrder,
  } = props;
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ widht: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
}
