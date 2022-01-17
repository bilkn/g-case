import {
  Box,
  Button,
  Drawer,
  FormGroup,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { MouseEventHandler } from "react";
import { FilterBase } from "..";
import { CustomDivider } from "../../../../components";
import { theme } from "../../../../styles/theme";
import BrandControls from "../Controls/BrandControls";
import SortingControls from "../Controls/SortingControls";
import TagControls from "../Controls/TagControls";
interface FilterDrawerProps {
  onClose: MouseEventHandler;
  open: boolean;
}

function FilterDrawer(props: FilterDrawerProps) {
  const { open, onClose } = props;
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.values.lg}px)`);

  return (
    <Drawer
      anchor="bottom"
      open={!matches && open}
      PaperProps={{
        sx: {
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          paddingTop: "10px",
          paddingBottom: "20px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "4px",
          padding: "0 16px",
          width: "100%",
        }}
      >
        <Button variant="text" onClick={onClose}>
          Close
        </Button>
      </Box>
      <CustomDivider />
      <Stack sx={{ height: "80vh", overflowY: "auto" }} spacing={"10px"}>
        <FilterBase mobile title="Sorting">
          <SortingControls />
        </FilterBase>
        <FilterBase mobile title="Brands">
          <BrandControls />
        </FilterBase>
        <FilterBase mobile title="Tags">
          <TagControls />
        </FilterBase>
      </Stack>
    </Drawer>
  );
}

export default FilterDrawer;
