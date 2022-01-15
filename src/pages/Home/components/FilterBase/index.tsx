import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ChevronDownIcon } from "../../../../components/icons";
import { CommonProps } from "../../../../types/commonProps";
import { StyledAside } from "./style";

interface FilterBaseProps extends CommonProps {
  title: string;
  mobile?: boolean;
}

function FilterBase(props: FilterBaseProps) {
  const { children, title, mobile = true } = props;
  const [showChildren, setShowChildren] = useState(!mobile);
  const toggleDropdown = () => setShowChildren(!showChildren);

  return (
    <StyledAside>
      <Box>
        {mobile ? (
          <Button
            sx={{ justifyContent: "space-between", width: "100%" }}
            onClick={toggleDropdown}
            endIcon={
              <Box
                sx={{
                  transform: showChildren ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                <ChevronDownIcon />
              </Box>
            }
          >
            <Typography
              variant="h2"
              sx={{ color: "#697488" }}
              fontSize="1.6rem;"
            >
              {title}
            </Typography>
          </Button>
        ) : (
          <Typography variant="h2" sx={{ color: "#697488" }} fontSize="1.3rem">
            {title}
          </Typography>
        )}
      </Box>
      {showChildren && children}
    </StyledAside>
  );
}

export default FilterBase;
