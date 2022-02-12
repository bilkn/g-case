import { TextFieldProps } from "@mui/material";
import { StyledTextField } from "./style";

function CustomTextField(props: TextFieldProps) {
  const { placeholder, onChange,value } = props;
  return <StyledTextField placeholder={placeholder} onChange={onChange} value={value} />;
}

export default CustomTextField;
