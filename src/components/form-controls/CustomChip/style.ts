import { Chip } from "@mui/material";
import styled from "styled-components";

interface StyledChipProps {
  active?: boolean;
}

export const StyledChip = styled(Chip)<StyledChipProps>`
  && .MuiChip-label {
    padding: 6px 16px;
  }

  &&:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.palette.primary.main : theme.palette.secondary.main};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
