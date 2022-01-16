import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  InputLabel,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import React, { MouseEventHandler } from "react";
import { FilterBase } from "..";
import { CustomCheckbox, CustomTextField } from "../../../../components";

interface FilterDrawerProps {
  onClose: MouseEventHandler;
  open: boolean;
}

const BrandControls = () => {
  return (
    <Stack>
      <Box>
        <InputLabel />
        <CustomTextField />
      </Box>
      <FormGroup>
        <CustomCheckbox label="All" extra='(56)' />
      </FormGroup>
    </Stack>
  );
};

function FilterDrawer(props: FilterDrawerProps) {
  const { open, onClose } = props;

  return (
    <Drawer
      anchor="bottom"
      open={true}
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
          <BrandControls />
        </FilterBase>
      </Stack>
    </Drawer>
  );
}

export default FilterDrawer;
