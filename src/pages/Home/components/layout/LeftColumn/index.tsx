import { Box } from "@mui/material";
import { FilterBase } from "../..";
import { BrandType } from "../../../../../types/brandType";
import { FilterType } from "../../../../../types/filterType";
import BrandControls from "../../Controls/BrandControls";
import SortingControls from "../../Controls/SortingControls";
import TagControls from "../../Controls/TagControls";

interface LeftColumnProps extends FilterType {
  brands: BrandType[] | [];
}

function LeftColumn(props: LeftColumnProps) {
  const {
    onSortingChange,
    onBrandChange,
    onTagChange,
    filterValues,
    brands: brandLabels,
  } = props;
  const { _sort, brands, tags } = filterValues;

  return (
    <>
      <Box>
        <FilterBase title="Sorting">
          <SortingControls value={_sort} onChange={onSortingChange} />
        </FilterBase>
      </Box>
      <Box marginTop={"24px"}>
        <FilterBase
          title="Brands"
          titleContainerProps={{
            marginBottom: { xs: "10px", lg: "18px" },
          }}
        >
          <BrandControls
            values={brands}
            brands={brandLabels}
            onChange={onBrandChange}
          />
        </FilterBase>
      </Box>
      <Box marginTop={"18px"}>
        <FilterBase title="Tags">
          <TagControls values={tags} onChange={onTagChange} />
        </FilterBase>
      </Box>
    </>
  );
}

export default LeftColumn;
