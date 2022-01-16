import { Divider, DividerProps } from "@mui/material";

function CustomDivider(props: DividerProps) {
  return (
    <Divider sx={{ borderColor: "#F3F0FE", marginBottom: "10px" }} {...props} />
  );
}

export default CustomDivider;
