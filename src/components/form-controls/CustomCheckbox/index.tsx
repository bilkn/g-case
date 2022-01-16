import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../styles/theme";
import { CheckedIcon } from "../../icons";

interface CustomCheckboxProps {
  label: string;
  extra?: string;
}

function CustomCheckbox(props: CustomCheckboxProps) {
  const { label, extra } = props;
  const CustomLabel = () => (
    <Typography
      color="text.secondary"
      variant="body1"
      sx={{ marginLeft: "8px" }}
    >
      {label}{" "}
      {extra && (
        <Typography color={theme.palette.grey[300]} component={"span"}>
          {extra}
        </Typography>
      )}
    </Typography>
  );

  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            boxShadow: "0px 1px 7px rgba(93, 56, 192, 0.4);",
            border: "none",
            borderRadius: "2px",
            height: "22px",
            padding: 0,
            overflow: "hidden",
            width: "22px",
          }}
          icon={<></>}
          checkedIcon={
            <Box
              sx={{
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
                height: "100%",
                width: "100%",
              }}
            >
              <CheckedIcon />
            </Box>
          }
        />
      }
      label={<CustomLabel />}
    />
  );
}

export default CustomCheckbox;
