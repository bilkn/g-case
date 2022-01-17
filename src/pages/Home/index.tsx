import { Box, Grid } from "@mui/material";
import React from "react";
import { Footer, MainLayout } from "../../components";
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
          <Grid container>
            <Grid item xs={12} lg={3}>

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
