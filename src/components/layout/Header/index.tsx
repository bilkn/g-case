import { LogoContainer, StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "../../icons";

function Header() {
  const theme = useTheme();
  return (
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
        <IconButton
          sx={{ color: theme.palette.common.white, fontSize: "1.4rem" }}
        >
          <ShoppingBagIcon />
        </IconButton>
      </Box>
    </StyledHeader>
  );
}

export default Header;
