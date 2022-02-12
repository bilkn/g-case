import { Box, FormGroup, Stack } from "@mui/material";
import React, { ChangeEvent, FormEventHandler } from "react";
import { useSelector } from "react-redux";
import { CustomCheckbox, CustomTextField } from "../../../../components";
import { RootState } from "../../../../redux/store";
import { BrandType } from "../../../../types/brandType";

interface BrandControlsProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  brands: BrandType[];
}

function BrandControls(props: BrandControlsProps) {
  const { onChange, brands = [] } = props;
  const { totalItemCount } = useSelector((state: RootState) => state.product);

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
          {brands.length ? (
            <>
              <CustomCheckbox
                name="brands"
                label={"All"}
                extraText={`(${totalItemCount})`}
                onChange={onChange}
                value={""}
                defaultChecked
              />
              {brands.map(({ name, slug }, i: number) => (
                <CustomCheckbox
                  key={slug}
                  name="brands"
                  label={name}
                  onChange={onChange}
                  value={slug}
                />
              ))}
            </>
          ) : (
            "Loading"
          )}
        </Stack>
      </FormGroup>
    </Stack>
  );
}

export default BrandControls;
