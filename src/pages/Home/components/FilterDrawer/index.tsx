import { Box, Button, Drawer, Stack } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { FilterBase } from "..";
import { FilterContent } from "../..";

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
      <Stack sx={{ minHeight: "80vh" }}>
        <FilterBase title="Sorting">
          <FilterContent />
        </FilterBase>
      </Stack>
    </Drawer>
  );
}

export default FilterDrawer;
