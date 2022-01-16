import { Box, BoxProps, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ChevronDownIcon } from "../../../../components/icons";
import { CommonProps } from "../../../../types/commonProps";
import { ContentContainer, TitleContainer } from "./style";

interface FilterBaseProps extends CommonProps {
  title: string;
  mobile?: boolean;
  titleContainerProps?: BoxProps;
  containerProps?: BoxProps;
  contentContainerProps?: BoxProps;
}

function FilterBase(props: FilterBaseProps) {
  const {
    children,
    title,
    containerProps,
    titleContainerProps,
    contentContainerProps,
    mobile = true,
  } = props;
  const [showChildren, setShowChildren] = useState(!mobile);
  const toggleDropdown = () => setShowChildren(!showChildren);

  return (
    <aside>
      <Box {...containerProps}>
        <TitleContainer
          marginBottom={{ xs: "10px", md: "18px" }}
          {...titleContainerProps}
        >
          {mobile ? (
            <Button
              sx={{
                justifyContent: "space-between",
                padding: "0",
                width: "100%",
              }}
              onClick={toggleDropdown}
              endIcon={
                <Box
                  sx={{
                    transform: showChildren ? "rotate(180deg)" : "rotate(0)",
                    marginRight: 0,
                  }}
                >
                  <ChevronDownIcon />
                </Box>
              }
            >
              <Typography
                variant="h2"
                sx={{ color: "#697488", textTransform: "capitalize" }}
                fontSize="1.6rem;"
              >
                {title}
              </Typography>
            </Button>
          ) : (
            <Typography
              variant="h2"
              sx={{ color: "#697488" }}
              fontSize="1.3rem"
            >
              {title}
            </Typography>
          )}
        </TitleContainer>
        {showChildren && (
          <ContentContainer {...contentContainerProps}>
            {children}
          </ContentContainer>
        )}
      </Box>
    </aside>
  );
}

export default FilterBase;
