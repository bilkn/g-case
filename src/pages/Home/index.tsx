import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Footer, MainLayout } from "../../components";
import { FilterBase } from "./components";
import BrandControls from "./components/Controls/BrandControls";
import SortingControls from "./components/Controls/SortingControls";
import TagControls from "./components/Controls/TagControls";
import FilterDrawer from "./components/FilterDrawer";
import { MiddleColumn } from "./components/layout";
import useHomeLogic from "./useHomeLogic";

function Home() {
  const { states, handlers } = useHomeLogic();
  const { showFilter } = states;
  const { toggleFilter } = handlers;

  return (
    <>
      <MainLayout>
        <Box>
          <Grid container spacing={{ xs: "0", lg: "16px" }}>
            <Grid item xs={12} lg={3}>
              <Box display={{ xs: "none", lg: "block" }}>
                <Box>
                  <FilterBase title="Sorting">
                    <SortingControls />
                  </FilterBase>
                </Box>
                <Box marginTop={"24px"}>
                  <FilterBase
                    title="Brands"
                    titleContainerProps={{
                      marginBottom: { xs: "10px", md: "18px" },
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
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MiddleColumn toggleFilter={toggleFilter} />
            </Grid>
            <Grid item xs={12} lg={3}></Grid>
          </Grid>
        </Box>
      </MainLayout>
      <Footer />
      <FilterDrawer open={showFilter} onClose={toggleFilter} />
    </>
  );
}

export default Home;
