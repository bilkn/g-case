import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  Typography,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import { theme } from "../../../styles/theme";
import { CheckedIcon } from "../../icons";

interface CustomCheckboxProps {
  name: string;
  label?: string;
  extraText?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

function CustomCheckbox(props: CustomCheckboxProps) {
  const { label, extraText, name, value, onChange } = props;
  const CustomLabel = () => (
    <Typography
      color="text.secondary"
      variant="body1"
      sx={{ marginLeft: "8px" }}
    >
      {label}{" "}
      {extraText && (
        <Typography color={theme.palette.grey[300]} component={"span"}>
          {extraText}
        </Typography>
      )}
    </Typography>
  );

  return (
    <FormControlLabel
      name={name}
      value={value}
      control={
        <Checkbox
          onChange={onChange}
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
