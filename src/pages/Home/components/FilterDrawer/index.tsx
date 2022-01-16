import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Stack,
} from "@mui/material";
import React, { MouseEventHandler } from "react";
import { FilterBase } from "..";
import { CustomCheckbox, CustomTextField } from "../../../../components";

interface FilterDrawerProps {
  onClose: MouseEventHandler;
  open: boolean;
}

const mockBrands = [
  {
    label: "All",
    count: "18",
  },
  {
    label: "Konopelski Group",
    count: "5",
  },
  {
    label: "Rice Inc",
    count: "18",
  },
  {
    label: "Feil, Dooley and Reinger",
    count: "1",
  },
];

const BrandControls = () => {
  return (
    <Stack spacing={"17px"}>
      <Box>
        <CustomTextField placeholder="Search brand"  />
      </Box>
      <FormGroup>
        <Stack spacing={"18px"}>
          {mockBrands.map(({ label, count }) => (
            <CustomCheckbox label={label} extra={`(${count})`} />
          ))}
        </Stack>
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
