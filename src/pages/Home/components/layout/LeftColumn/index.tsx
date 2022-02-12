import { Box } from "@mui/material";
import React, { ChangeEvent, MouseEventHandler } from "react";
import { FilterBase } from "../..";
import { FilterValuesType } from "../../../../../types/filterValuesType";
import BrandControls from "../../Controls/BrandControls";
import SortingControls from "../../Controls/SortingControls";
import TagControls from "../../Controls/TagControls";

interface LeftColumnProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  filterValues: FilterValuesType;
}

function LeftColumn(props: LeftColumnProps) {
  const { onChange, filterValues } = props;
  const { _sort } = filterValues;

  return (
    <>
      <Box>
        <FilterBase title="Sorting">
          <SortingControls value={_sort} onChange={onChange} />
        </FilterBase>
      </Box>
      {/*   <Box marginTop={"24px"}>
        <FilterBase
          title="Brands"
          titleContainerProps={{
            marginBottom: { xs: "10px", lg: "18px" },
          }}
        >
          <BrandControls onChange={onChange} />
        </FilterBase>
      </Box>
      <Box marginTop={"18px"}>
        <FilterBase title="Tags">
          <TagControls onChange={onChange} />
        </FilterBase>
      </Box> */}
    </>
  );
}

export default LeftColumn;
