import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, NavbarContainer, SearchContainer } from "../../styles/Navbar";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log(cart);
  return (
    <AppBar position="sticky">
      <NavbarContainer>
        <Logo onClick={() => navigate("/")}>ecomm-shop.</Logo>
        <SearchContainer sx={{ flexGrow: ".125" }}>
          <IconButton disableRipple disableTouchRipple disableFocusRipple>
            <SearchOutlined />
          </IconButton>
          <Input
            value={searchTerm}
            disableUnderline
            fullWidth
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <Badge
          onClick={() => navigate("/cart")}
          badgeContent={cart.cartTotalQty}
          color="error"
          sx={{ cursor: "pointer" }}
        >
          <ShoppingCartOutlined fontSize="large" />
        </Badge>
      </NavbarContainer>
    </AppBar>
  );
};

export default Navbar;
