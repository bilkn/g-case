import { LogoContainer, StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "../../icons";
import { useState } from "react";
import CartDrawer from "../../drawers/CartDrawer";

function Header() {
  const theme = useTheme();
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const toggleCartDrawer = () => setShowCartDrawer(!showCartDrawer);

  const shoppingBagIconStyle = {
    color: theme.palette.common.white,
    fontSize: "1.4rem",
  };

  return (
    <>
      <StyledHeader>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto",
              maxWidth: "1232px",
              width: "100%",
            }}
          >
            <LogoContainer>
              <Link to={"/"}>
                <img src={Logo} alt="Market" />
              </Link>
            </LogoContainer>
            <Box display={{ xs: "block", lg: "none" }}>
              <IconButton sx={shoppingBagIconStyle} onClick={toggleCartDrawer}>
                <ShoppingBagIcon />
              </IconButton>
            </Box>
            <Box
              display={{ xs: "none", lg: "block" }}
              sx={shoppingBagIconStyle}
            >
              <ShoppingBagIcon />
            </Box>
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
