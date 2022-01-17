import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomLink } from "../..";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          marginTop: "136px",
          paddingBottom: "40px",
        }}
      >
        <Box>
          <Typography fontSize={"1.3rem"} color="primary">
            <Typography fontSize={"1.3rem"} component="span">
              ©2019 Market
            </Typography>
            <Typography
              fontSize={"1.3rem"}
              component="span"
              sx={{ margin: "0 16px" }}
            >
              •
            </Typography>
            <Typography fontSize={"1.3rem"} component="span" color="primary">
              <CustomLink to="/" color="primary" style={{ fontSize: "1.3rem" }}>
                Privacy Policy
              </CustomLink>
            </Typography>
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
