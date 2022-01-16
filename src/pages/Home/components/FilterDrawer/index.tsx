import { Box, Button, Drawer, FormGroup, Stack } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { FilterBase } from "..";
import {
  CustomCheckbox,
  CustomDivider,
  CustomRadio,
  CustomTextField,
} from "../../../../components";

interface FilterDrawerProps {
  onClose: MouseEventHandler;
  open: boolean;
}

const mockBrands = [
  {
    label: "All",
    value: "All",
    count: "18",
  },
  {
    label: "Konopelski Group",
    value: "Konopelski Group",
    count: "5",
  },
  {
    label: "Rice Inc",
    value: "Rice Inc",
    count: "18",
  },
  {
    label: "Feil, Dooley and Reinger",
    value: "Feil, Dooley and Reinger",
    count: "1",
  },
];

const sorting = [
  {
    label: "Price low to high",
    value: "0",
  },
  {
    label: "Price high to low",
    value: "1",
  },
  {
    label: "New to old",
    value: "2",
  },
  {
    label: "Old to new",
    value: "3",
  },
];

const tags = [
  {
    label: "All",
    value: "All",
    count: "18",
  },
  {
    label: "Beach",
    value: "Beach",
    count: "5",
  },
  {
    label: "People",
    value: "People",
    count: "18",
  },
  {
    label: "Bicyle",
    value: "Bicyle",
    count: "1",
  },
];

const BrandControls = () => {
  return (
    <Stack>
      <Box
        padding={{ xs: "16px", md: "18px 21px 17px 27px" }}
        paddingBottom={{ xs: "0", md: "0" }}
      >
        <CustomTextField placeholder="Search brand" />
      </Box>
      <FormGroup>
        <Stack
          spacing={"18px"}
          height={{ md: "142px" }}
          padding={{ xs: "16px", md: "16px 21px 30px 27px" }}
          sx={{ overflowY: "auto" }}
        >
          {mockBrands.map(({ label, count }) => (
            <CustomCheckbox label={label} extraText={`(${count})`} />
          ))}
        </Stack>
      </FormGroup>
    </Stack>
  );
};

const SortingControls = () => {
  return (
    <FormGroup>
      <Stack spacing={"18px"} padding={{ xs: "16px", md: "24px" }}>
        {sorting.map(({ label }) => (
          <CustomRadio label={label} />
        ))}
      </Stack>
    </FormGroup>
  );
};

const TagControls = () => {
  return (
    <Stack>
      <Box
        padding={{ xs: "16px", md: "24px" }}
        paddingBottom={{ xs: "0", md: "0" }}
      >
        <CustomTextField placeholder="Search brand" />
      </Box>
      <FormGroup>
        <Stack
          spacing={"18px"}
          height={{ md: "142px" }}
          sx={{ overflowY: "auto" }}
          padding={{ xs: "16px", md: "24px" }}
        >
          {tags.map(({ label, count }) => (
            <CustomCheckbox label={label} extraText={`(${count})`} />
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
