import { Box, Button, Grid, Typography } from "@mui/material";
import React, { MouseEventHandler, useState } from "react";
import { ProductCard } from "..";
import { createMockItems } from "../../../../mocks/createMockItems";
import { theme } from "../../../../styles/theme";

interface MiddleColumnProps {
  toggleFilter: MouseEventHandler;
}

function MiddleColumn(props: MiddleColumnProps) {
  const { toggleFilter } = props;
  return (
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
            <Button variant="contained">Test 1</Button>{" "}
            <Button variant="contained">Test 2</Button>
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
  );
}

export default MiddleColumn;
