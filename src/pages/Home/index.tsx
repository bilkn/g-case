import { Box, Button, Drawer, InputLabel, Stack } from "@mui/material";
import React from "react";
import { CustomTextField, MainLayout } from "../../components";
import { FilterBase } from "./components";
import FilterDrawer from "./components/FilterDrawer";
import useHomeLogic from "./useHomeLogic";

export const FilterContent = () => {
  return (
    <Stack>
      <Box>
        <InputLabel />
        <CustomTextField />
      </Box>
    </Stack>
  );
};

function Home() {
  const { states, handlers } = useHomeLogic();
  const { showFilter } = states;
  const { toggleFilter } = handlers;

  return (
    <MainLayout>
      <FilterDrawer open={showFilter} onClose={toggleFilter} />

      {/*     <section>
      </section> */}
    </MainLayout>
  );
}

export default Home;
