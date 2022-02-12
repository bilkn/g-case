import { FormControl, FormGroup, RadioGroup, Stack } from "@mui/material";
import { ChangeEvent } from "react";
import { CustomRadio } from "../../../../components";

const sorting = [
  {
    label: "Price low to high",
    value: "price",
  },
  {
    label: "Price high to low",
    value: "price_desc",
  },
  {
    label: "New to old",
    value: "added",
  },
  {
    label: "Old to new",
    value: "added_desc",
  },
];

interface SortingControlsProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
}

function SortingControls(props: SortingControlsProps) {
  const { onChange, value } = props;

  return (
    <FormGroup>
      <FormControl>
        <RadioGroup value={value} onChange={onChange}>
          <Stack spacing={"18px"} padding={{ xs: "16px", lg: "24px" }}>
            {sorting.map(({ label, value }) => (
              <CustomRadio
                key={value}
                name="_sort"
                label={label}
                value={value}
              />
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
}

export default SortingControls;
