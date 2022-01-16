import { Box } from "@mui/material";
import React from "react";
import { MainLayout } from "../../components";
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
          <MiddleColumn toggleFilter={toggleFilter} />
        </Box>
      </MainLayout>
      <FilterDrawer open={showFilter} onClose={toggleFilter} />
    </>
  );
}

export default Home;
