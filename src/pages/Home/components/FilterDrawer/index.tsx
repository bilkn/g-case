import { Box, Button, Drawer, FormGroup, Stack } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { FilterBase } from "..";
import { CustomDivider } from "../../../../components";
import BrandControls from "../Controls/BrandControls";
import SortingControls from "../Controls/SortingControls";
import TagControls from "../Controls/TagControls";
interface FilterDrawerProps {
  onClose: MouseEventHandler;
  open: boolean;
}

function FilterDrawer(props: FilterDrawerProps) {
  const { open, onClose } = props;

  return (
    <Drawer
      anchor="bottom"
      open={open}
      PaperProps={{
        sx: {
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          paddingTop: "10px",
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
        <FilterBase title="Sorting">
          <SortingControls />
        </FilterBase>
        <FilterBase title="Brands">
          <BrandControls />
        </FilterBase>
        <FilterBase title="Tags">
          <TagControls />
        </FilterBase>
      </Stack>
    </Drawer>
  );
}

export default FilterDrawer;
