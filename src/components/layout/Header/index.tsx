import { LogoContainer, StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "../../icons";
import { useState } from "react";
import CartDrawer from "../../drawers/CartDrawer";

interface HeaderProps {
  totalPrice?: string | number;
}

function Header(props: HeaderProps) {
  const theme = useTheme();
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const toggleCartDrawer = () => setShowCartDrawer(!showCartDrawer);
  const { totalPrice = `39,97` } = props;

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
              maxWidth: "1222px",
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
                ₺{totalPrice}
              </Typography>
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
