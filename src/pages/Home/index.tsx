import { Box, Grid } from "@mui/material";
import { Footer, MainLayout } from "../../components";
import FilterDrawer from "./components/FilterDrawer";
import { LeftColumn, MiddleColumn, RightColumn } from "./components/layout";
import useHomeLogic from "./useHomeLogic";

function Home() {
  const { states, handlers, formikValues } = useHomeLogic();
  const { showFilter } = states;
  const {
    toggleFilter,
    handlePageChange,
    handleFormikChange,
    handleItemTypeClick,
  } = handlers;
  const { _sort, tags, brands, _page, itemType } = formikValues;
  const filterValues = { _sort, tags, brands };

  return (
    <>
      <MainLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: "0", lg: "16px" }}
            sx={{ maxWidth: "1248px" }}
          >
            <Grid item xs={12} lg={3} display={{ xs: "none", lg: "block" }}>
              <LeftColumn
                filterValues={filterValues}
                onBrandChange={handleFormikChange}
                onSortingChange={handleFormikChange}
                onTagChange={handleFormikChange}
                brands={states.brands}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MiddleColumn
                onPageChange={handlePageChange}
                onItemTypeClick={handleItemTypeClick}
                toggleFilter={toggleFilter}
                currentPage={_page}
                itemType={itemType}
              />
            </Grid>
            <Grid item xs={12} lg={3} display={{ xs: "none", lg: "block" }}>
              <RightColumn />
            </Grid>
          </Grid>
        </Box>
      </MainLayout>
      <Footer />
      <FilterDrawer
        filterValues={filterValues}
        open={showFilter}
        onClose={toggleFilter}
        onBrandChange={handleFormikChange}
        onSortingChange={handleFormikChange}
        onTagChange={handleFormikChange}
        brands={states.brands}
      />
    </>
  );
}

export default Home;
