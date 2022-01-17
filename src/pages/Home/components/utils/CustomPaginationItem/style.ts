import { PaginationItem } from "@mui/material";
import styled from "styled-components/macro";

export const StyledPaginationItem = styled(PaginationItem)`
  &&.MuiButtonBase-root {
    color: #697488;
    height: 40px;
  }

  &&.MuiButtonBase-root:not(.Mui-selected):hover {
    background: none;
  }

  &&.Mui-selected {
    color: ${({ theme }) => theme.palette.common.white};
  }

  &&.MuiButtonBase-root:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
