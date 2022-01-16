import { LogoContainer, StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "../../icons";
import { useState } from "react";
import CartDrawer from "../../drawers/CartDrawer";

function Header() {
  const theme = useTheme();
  const [showCartDrawer, setShowCartDrawer] = useState(true);
  const toggleCartDrawer = () => setShowCartDrawer(!showCartDrawer);

  const shoppingBagIconStyle = {
    color: theme.palette.common.white,
    fontSize: "1.4rem",
  };

  return (
    <>
      <StyledHeader>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <LogoContainer>
            <Link to={"/"}>
              <img src={Logo} alt="Market" />
            </Link>
          </LogoContainer>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton sx={shoppingBagIconStyle} onClick={toggleCartDrawer}>
              <ShoppingBagIcon />
            </IconButton>
          </Box>
          <Box display={{ xs: "none", md: "block" }} sx={shoppingBagIconStyle}>
            <ShoppingBagIcon />
          </Box>
        </Box>
      </StyledHeader>
      <CartDrawer
        onClose={toggleCartDrawer}
        open={showCartDrawer}
        total={"200"}
      />
    </>
  );
}

export default Header;
