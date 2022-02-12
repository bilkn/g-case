import { Box, FormGroup, Stack } from "@mui/material";
import { CustomCheckbox, CustomTextField } from "../../../../components";

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
    label: "Bicycle",
    value: "Bicycle",
    count: "1",
  },
];

function TagControls() {
  return (
    <Stack>
      <Box
        padding={{ xs: "16px", lg: "24px 24px 10px 24px" }}
        paddingBottom={{ xs: "0" }}
      >
        <CustomTextField placeholder="Search brand" />
      </Box>
      <FormGroup sx={{ paddingRight: "24px" }}>
        <Stack
          spacing={"18px"}
          height={{ lg: "142px" }}
          sx={{ overflowY: "auto", overscrollBehavior: "contain" }}
          padding={{ xs: "16px", lg: "7px 0 24px 24px" }}
        >
          {tags.map(({ label, count }) => (
            <CustomCheckbox label={label} extraText={`(${count})`} />
          ))}
        </Stack>
      </FormGroup>
    </Stack>
  );
}

export default TagControls;
