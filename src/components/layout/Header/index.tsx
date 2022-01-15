import { CommonProps } from "../../../types/commonProps";
import { StyledHeader } from "./style";
import Logo from "../../../assets/logo.svg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header<T>(props: CommonProps<T>) {
  const { children } = props;
  return (
    <StyledHeader>
      <Box>
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="Market" />
          </Link>
        </div>
      </Box>
      {children}
    </StyledHeader>
  );
}

export default Header;
