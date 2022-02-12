import { Box, FormGroup, Stack } from "@mui/material";
import React, { ChangeEvent, FormEventHandler } from "react";
import { CustomCheckbox, CustomTextField } from "../../../../components";
import { BrandType } from "../../../../types/brandType";

interface BrandControlsProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  values: string[] | [];
  brands: BrandType[];
}

function BrandControls(props: BrandControlsProps) {
  const { onChange, brands = [] } = props;

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
          {brands.length
            ? brands.map(({ name, slug }) => (
                <CustomCheckbox
                  name="brands"
                  label={name}
                  onChange={onChange}
                  value={slug}
                />
              ))
            : "Loading"}
        </Stack>
      </FormGroup>
    </Stack>
  );
}

export default BrandControls;
