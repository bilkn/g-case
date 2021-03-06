import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField: any = styled(TextField)`
  width: 100%;

  && .MuiInputBase-root {
    height: 48px;
  }

  && .MuiInputBase-root fieldset {
    border-color: ${({ theme }) => theme.palette.grey[200]};
    border-width: 2px;
  }

  && .Mui-focused fieldset {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
