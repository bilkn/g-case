import { Box, IconButton, ListItem, Typography } from "@mui/material";
import React from "react";
import { CustomDivider } from "../../../../components";
import { MinusSignIcon, PlusSignIcon } from "../../../../components/icons";
import { theme } from "../../../../styles/theme";
import { CartItemType } from "../../../../types/cartItemType";

function CartItem(props: CartItemType) {
  const { id, name, price, count } = props;

  return (
    <>
      <ListItem>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "6px",
            width: "100%",
          }}
        >
          <Box sx={{ maxWidth: "90%" }}>
            <Typography variant="body1">{name}</Typography>
            <Typography
              variant="body2"
              color="primary"
              fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
              sx={{ marginTop: "4px" }}
            >
              ₺{price}
            </Typography>
          </Box>
          <Box
            sx={{
              color: theme.palette.primary.main,
              display: "flex",
              height: "37px",
            }}
          >
            <IconButton sx={{ color: "inherit", width: "32px" }} disableRipple>
              <MinusSignIcon />
            </IconButton>
            <Box
              sx={{
                alignItems: "center",
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
                display: "flex",
                justifyContent: "center",
                width: "37px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  lineHeight: "20.43px",
                }}
              >
                {count}
              </Typography>
            </Box>
            <IconButton sx={{ color: "inherit", width: "32px" }} disableRipple>
              <PlusSignIcon />
            </IconButton>
          </Box>
        </Box>
      </ListItem>
      <CustomDivider variant="fullWidth" />
    </>
  );
}

export default CartItem;
