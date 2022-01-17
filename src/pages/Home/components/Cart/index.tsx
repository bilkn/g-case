import { Box, List, Stack, Typography } from "@mui/material";
import React from "react";
import { CartItem } from "..";
import { theme } from "../../../../styles/theme";

interface CartProps {
  total: number;
}

function Cart(props: CartProps) {
  const { total } = props;

  return (
    <Box
      sx={{
        background: "#fff",
        border: "8px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        padding: "16px",
        paddingTop: "26px",
      }}
    >
      <List sx={{ padding: "16px 0" }}>
        <Stack spacing={"18px"}>
          <CartItem name="Example Product" price="14,99" itemCount="1" />
          <CartItem name="Example Product" price="14,99" itemCount="1" />
          <CartItem name="Example Product" price="14,99" itemCount="1" />
          <CartItem name="Example Product" price="14,99" itemCount="1" />
        </Stack>
      </List>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box
          sx={{
            border: "2px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius,
            minWidth: "92px",
            textAlign: "center",
            padding: "14px 24px",
          }}
        >
          <Typography variant="body2" color="primary">
            {total}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
