import { Box } from "@mui/material";
import React from "react";
import { FilterBase } from "..";
import BrandControls from "../Controls/BrandControls";
import SortingControls from "../Controls/SortingControls";
import TagControls from "../Controls/TagControls";

function LeftColumn() {
  return (
    <>
      <Box>
        <FilterBase title="Sorting">
          <SortingControls />
        </FilterBase>
      </Box>
      <Box marginTop={"24px"}>
        <FilterBase
          title="Brands"
          titleContainerProps={{
            marginBottom: { xs: "10px", lg: "18px" },
          }}
        >
          <BrandControls />
        </FilterBase>
      </Box>
      <Box marginTop={"18px"}>
        <FilterBase title="Tags">
          <TagControls />
        </FilterBase>
      </Box>
    </>
  );
}

export default LeftColumn;
