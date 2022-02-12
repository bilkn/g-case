import { LogoContainer, StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "../../icons";
import { useState } from "react";
import CartDrawer from "../../drawers/CartDrawer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function Header() {
  const theme = useTheme();
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const toggleCartDrawer = () => setShowCartDrawer(!showCartDrawer);
  const total = useSelector((state: RootState) => state.cart.total);
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
              justifyContent: "flex-end",
              margin: "0 auto",
              maxWidth: "1222px",
              position: "relative",
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
              display={{ xs: "none", lg: "flex" }}
              sx={{
                ...shoppingBagIconStyle,
                alignItems: "center",
                background: "#147594",
                height: "100%",
                padding: "24px 23px",
              }}
            >
              <ShoppingBagIcon />
              <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                ₺ {total}
              </Typography>
            </Box>
          </Box>
        </Box>
      </StyledHeader>
      <CartDrawer
        onClose={toggleCartDrawer}
        open={showCartDrawer}
        total={total}
      />
    </>
  );
}

export default Header;
