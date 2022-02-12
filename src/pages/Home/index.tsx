import { Box, Grid } from "@mui/material";
import { Footer, MainLayout } from "../../components";
import FilterDrawer from "./components/FilterDrawer";
import { LeftColumn, MiddleColumn, RightColumn } from "./components/layout";
import useHomeLogic from "./useHomeLogic";

function Home() {
  const { states, handlers, formikValues } = useHomeLogic();
  const { showFilter } = states;
  const { toggleFilter, handlePageChange, handleFormikChange } = handlers;
  const { _sort, tags, brands } = formikValues;
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
                onChange={handleFormikChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MiddleColumn
                onPageChange={handlePageChange}
                toggleFilter={toggleFilter}
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
        onChange={handleFormikChange}
      />
    </>
  );
}

export default Home;
