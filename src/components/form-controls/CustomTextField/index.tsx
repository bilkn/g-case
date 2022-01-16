import { TextFieldProps } from "@mui/material";
import { StyledTextField } from "./style";

function CustomTextField(props: TextFieldProps) {
  const { placeholder } = props;
  return <StyledTextField placeholder={placeholder} />;
}

export default CustomTextField;
