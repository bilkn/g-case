import { Box, Grid } from "@mui/material";
import { Footer, MainLayout } from "../../components";
import FilterDrawer from "./components/FilterDrawer";
import { LeftColumn, MiddleColumn, RightColumn } from "./components/layout";
import useHomeLogic from "./useHomeLogic";

function Home() {
  const { states, handlers } = useHomeLogic();
  const { showFilter } = states;
  const { toggleFilter } = handlers;

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
              <LeftColumn />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MiddleColumn toggleFilter={toggleFilter} />
            </Grid>
            <Grid item xs={12} lg={3} display={{ xs: "none", lg: "block" }}>
              <RightColumn />
            </Grid>
          </Grid>
        </Box>
      </MainLayout>
      <Footer />
      <FilterDrawer open={showFilter} onClose={toggleFilter} />
    </>
  );
}

export default Home;
