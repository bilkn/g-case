import {
  Box,
  Button,
  Grid,
  Icon,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, MouseEventHandler } from "react";
import { ProductCard } from "../../";
import { LeftArrowIcon, RightArrowIcon } from "../../../../../components/icons";
import { theme } from "../../../../../styles/theme";
import { CustomPaginationItem } from "../../utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CustomChip } from "../../../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { ProductType } from "../../../../../types/productType";

interface MiddleColumnProps {
  toggleFilter: MouseEventHandler;
  onPageChange: (event: ChangeEvent<any>, page: number) => void;
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
  const { list: products, totalItemCount } = useSelector(
    (state: RootState) => state.product
  );
  const { toggleFilter, onPageChange } = props;

  const totalPage = Math.ceil(totalItemCount / 16);

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
                      active
                      onClick={() => "do something"}
                      label="mug"
                    />
                    <CustomChip onClick={() => "do something"} label="shirt" />
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
          <Grid
            container
            sx={{
              backgroundColor: { lg: "#fff" },
              borderRadius: "2px",
              padding: { xs: "0", lg: "12px 8px" },
            }}
          >
            {products.length
              ? products.map((product: ProductType, i: number) => (
                  <Grid
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
              : null}
          </Grid>
          <Box sx={{ marginTop: "32px" }}>
            <aside>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination
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
