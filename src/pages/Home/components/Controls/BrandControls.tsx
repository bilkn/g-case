import { Box, FormGroup, Stack } from "@mui/material";
import React, {
  ChangeEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import {
  CustomCheckbox,
  CustomTextField,
  Loader,
} from "../../../../components";
import { RootState } from "../../../../redux/store";
import { BrandType } from "../../../../types/brandType";

interface BrandControlsProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  brands: BrandType[];
}

function BrandControls(props: BrandControlsProps) {
  const { onChange, brands = [] } = props;
  const [displayedBrands, setDisplayedBrands] = useState(brands);
  const [search, setSearch] = useState("");
  const { totalItemCount } = useSelector((state: RootState) => state.product);

  const filterBrandsBySearchQuery = useCallback(
    (value) =>
      setDisplayedBrands(
        brands.filter((brand) =>
          brand.name.toLowerCase().includes(value.toLowerCase())
        )
      ),
    [brands]
  );

  const handleSearchBoxChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
    filterBrandsBySearchQuery(value);
  };

  useEffect(() => {
    filterBrandsBySearchQuery(search);
  }, [brands, filterBrandsBySearchQuery, search]);

  return (
    <Stack>
      <Box
        padding={{ xs: "16px", lg: "18px 21px 17px 27px" }}
        paddingBottom={{ xs: "0", lg: "10px" }}
      >
        <CustomTextField
          value={search}
          placeholder="Search brand"
          onChange={handleSearchBoxChange}
        />
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
              {displayedBrands.map(({ name, slug }, i: number) => (
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
            <Box sx={{ display: "flex", minHeight: "40px" }}>
              <Box sx={{ m: "auto" }}>
                <Loader height={40} width={40} />
              </Box>
            </Box>
          )}
        </Stack>
      </FormGroup>
    </Stack>
  );
}

export default BrandControls;
