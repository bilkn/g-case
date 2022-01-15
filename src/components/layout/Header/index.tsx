import { StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <Box>
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="Market" />
          </Link>
        </div>
      </Box>
    </StyledHeader>
  );
}

export default Header;
