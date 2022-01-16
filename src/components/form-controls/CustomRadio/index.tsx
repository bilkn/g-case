import { Box, FormControlLabel, Icon, Radio, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../styles/theme";
import { CheckedIcon } from "../../icons";

interface CustomRadioProps {
  label: string;
}

function CustomRadio(props: CustomRadioProps) {
  const { label } = props;

  const CustomLabel = () => (
    <Typography
      color="text.secondary"
      variant="body1"
      sx={{ marginLeft: "12px" }}
    >
      {label}
    </Typography>
  );

  return (
    <FormControlLabel
      label={<CustomLabel />}
      control={
        <Radio
          sx={{
            border: "none",
            height: "22px",
            padding: 0,
            overflow: "hidden",
            width: "22px",
          }}
          icon={
            <Icon
              sx={{
                border: "3px solid",
                borderColor: "#DFDEE2",
                borderRadius: "50%",
              }}
            />
          }
          checkedIcon={
            <Box
              sx={{
                border: "2px solid",
                borderRadius: "50%",
                color: theme.palette.primary.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8rem",
                height: "100%",
                width: "100%",
              }}
            >
              <Box sx={{ flexShrink: "0", display: "flex" }}>
                <CheckedIcon />
              </Box>
            </Box>
          }
        />
      }
    />
  );
}

export default CustomRadio;
