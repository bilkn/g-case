import { FormGroup, Stack } from "@mui/material";
import React from "react";
import { CustomRadio } from "../../../../components";

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

function SortingControls() {
  return (
    <FormGroup>
      <Stack spacing={"18px"} padding={{ xs: "16px", lg: "24px" }}>
        {sorting.map(({ label }) => (
          <CustomRadio label={label} />
        ))}
      </Stack>
    </FormGroup>
  );
}

export default SortingControls;
