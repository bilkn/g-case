import { Box, FormGroup, Stack } from "@mui/material";
import React from "react";
import { CustomCheckbox, CustomTextField } from "../../../../components";

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

function BrandControls() {
  return (
    <Stack>
      <Box
        padding={{ xs: "16px", lg: "18px 21px 17px 27px" }}
        paddingBottom={{ xs: "0", lg: "10px" }}
      >
        <CustomTextField placeholder="Search brand" />
      </Box>
      <FormGroup sx={{ paddingRight: "21px" }}>
        <Stack
          spacing={"18px"}
          height={{ lg: "142px" }}
          padding={{ xs: "16px", lg: "7px 0 30px 27px" }}
          sx={{ overflowY: "auto", overscrollBehavior: "contain" }}
        >
          {mockBrands.map(({ label, count }) => (
            <CustomCheckbox label={label} extraText={`(${count})`} />
          ))}
        </Stack>
      </FormGroup>
    </Stack>
  );
}

export default BrandControls;
