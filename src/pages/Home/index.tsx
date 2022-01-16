import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomDivider, MainLayout } from "../../components";
import { theme } from "../../styles/theme";
import { ProductCard } from "./components";
import FilterDrawer from "./components/FilterDrawer";
import useHomeLogic from "./useHomeLogic";

const createMockItems = (count: number) =>
  Array.from(new Array(count)).map(() => ({
    price: "₺14,99",
    name: "Gorgeous Office Mug",
  }));

function Home() {
  const { states, handlers } = useHomeLogic();
  const { showFilter } = states;
  const { toggleFilter } = handlers;

  return (
    <MainLayout>
      <section>
        <Box>
          <Typography
            variant="h1"
            color={theme.palette.grey[500]}
            sx={{ marginBottom: "16px" }}
          >
            Products
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            paddingBottom={"16px"}
          >
            <Box sx={{ display: "flex" }} width={{ xs: "80%", md: "100%" }}>
              <Button variant="contained" onClick={toggleFilter}>
                Test 1
              </Button>{" "}
              <Button variant="contained" onClick={toggleFilter}>
                Test 2
              </Button>
            </Box>
            <Box display={{ xs: "block", md: "none" }}>
              <Button variant="outlined" onClick={toggleFilter}>
                Filters
              </Button>
            </Box>
          </Box>
        </Box>
        <Grid
          container
          columnSpacing={{ xs: "16px", md: "24px" }}
          rowSpacing={{ xs: "16px", md: "22px" }}
        >
          {createMockItems(30).map(({ price, name }) => (
            <Grid item xs={6} md={4} lg={3}>
              <ProductCard price={price} name={name} />
            </Grid>
          ))}
        </Grid>
      </section>
      <FilterDrawer open={showFilter} onClose={toggleFilter} />
    </MainLayout>
  );
}

export default Home;
