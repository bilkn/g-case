import React from "react";
import { MainLayout } from "../../components";
import FilterDrawer from "./components/FilterDrawer";
import useHomeLogic from "./useHomeLogic";

function Home() {
  const { states, handlers } = useHomeLogic();
  const { showFilter } = states;
  const { toggleFilter } = handlers;

  return (
    <MainLayout>
      <FilterDrawer open={showFilter} onClose={toggleFilter} />
    </MainLayout>
  );
}

export default Home;
