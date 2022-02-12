import {
  Box,
  Button,
  Grid,
  Icon,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, MouseEventHandler, useMemo } from "react";
import { ProductCard } from "../../";
import { LeftArrowIcon, RightArrowIcon } from "../../../../../components/icons";
import { theme } from "../../../../../styles/theme";
import { CustomPaginationItem } from "../../utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CustomChip, Loader } from "../../../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { ProductType } from "../../../../../types/productType";
import { calculateTotalPage } from "../../../../../helpers";

interface MiddleColumnProps {
  toggleFilter: MouseEventHandler;
  onPageChange: (event: ChangeEvent<any>, page: number) => void;
  onItemTypeClick: MouseEventHandler<HTMLDivElement>;
  currentPage: string | number;
  itemType: string;
}

const LeftArrow = () => (
  <Box
    sx={{
      alignItems: "center",
      display: "flex",
    }}
    marginRight={{ lg: "57px" }}
  >
    <Icon sx={{ alignItems: "center", display: "flex" }}>
      <LeftArrowIcon />
    </Icon>
    <Typography variant="body2">Prev</Typography>
  </Box>
);

const RightArrow = () => (
  <Box
    sx={{
      alignItems: "center",
      display: "flex",
    }}
    marginLeft={{ lg: "57px" }}
  >
    <Icon sx={{ alignItems: "center", display: "flex" }}>
      <RightArrowIcon />
    </Icon>
    <Typography variant="body2">Next</Typography>
  </Box>
);

function MiddleColumn(props: MiddleColumnProps) {
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.values.sm}px)`);
  const {
    list: products,
    totalItemCount,
    loading,
  } = useSelector((state: RootState) => state.product);
  const { toggleFilter, onPageChange, onItemTypeClick, currentPage, itemType } =
    props;

  const totalPage = useMemo(
    () => calculateTotalPage(totalItemCount),
    [totalItemCount]
  );

  return (
    <>
      <Box>
        <section>
          <Box>
            <Typography variant="h1" color={theme.palette.grey[500]}>
              Products
            </Typography>
            <aside>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{ display: "flex", overflowX: "auto", padding: "16px 0" }}
                  width={{ xs: "80%", lg: "100%" }}
                >
                  <Stack direction={"row"} spacing={"8px"}>
                    <CustomChip
                      active={itemType === "mug"}
                      onClick={onItemTypeClick}
                      label="mug"
                    />
                    <CustomChip
                      active={itemType === "shirt"}
                      onClick={onItemTypeClick}
                      label="shirt"
                    />
                  </Stack>
                </Box>
                <Box display={{ xs: "block", lg: "none", padding: "16px 0" }}>
                  <Button variant="outlined" onClick={toggleFilter}>
                    Filters
                  </Button>
                </Box>
              </Box>
            </aside>
          </Box>
          {loading && !products.length ? (
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                minHeight: "60vh",
              }}
            >
              <Loader />
            </Box>
          ) : (
            <Grid
              container
              sx={{
                backgroundColor: { lg: "#fff" },
                borderRadius: "2px",
                padding: { xs: "0", lg: "12px 8px" },
              }}
            >
              {products.length ? (
                products.map((product: ProductType, i: number) => (
                  <Grid
                    key={product.slug}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    padding={{ xs: "16px", lg: "10px 12px" }}
                    sx={{
                      backgroundColor: { xs: "#fff", lg: "none" },
                      borderRadius: { xs: "12px", sm: "0" },
                      marginTop: { xs: i !== 0 ? "20px" : "0", sm: "0" },
                    }}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))
              ) : (
                <Typography>No product is found.</Typography>
              )}
            </Grid>
          )}

          <Box sx={{ marginTop: "32px" }}>
            <aside>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                  page={+currentPage}
                  onChange={onPageChange}
                  count={totalPage}
                  siblingCount={matches ? 2 : 0}
                  renderItem={(item) => (
                    <CustomPaginationItem
                      components={{
                        previous: LeftArrow,
                        next: RightArrow,
                      }}
                      {...item}
                    />
                  )}
                  sx={{ color: "white" }}
                />
              </Box>
            </aside>
          </Box>
        </section>
      </Box>
    </>
  );
}

export default MiddleColumn;
