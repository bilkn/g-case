import {
  Box,
  Button,
  Drawer,
  List,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../../pages/Home/components";
import { RootState } from "../../../redux/store";
import { theme } from "../../../styles/theme";

interface CartDrawerProps {
  open: boolean;
  total: string | number;
  onClose: MouseEventHandler;
}

function CartDrawer(props: CartDrawerProps) {
  const { open, total, onClose } = props;
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.values.lg}px)`);
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <Drawer
      open={!matches && open}
      anchor="right"
      PaperProps={{ sx: { padding: "16px", width: "80%" } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
      </Box>
      <List sx={{ padding: "16px 0" }}>
        <Stack spacing={"18px"}>
          {items.map((item) => (
            <CartItem {...item} />
          ))}
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
    </Drawer>
  );
}

export default CartDrawer;
