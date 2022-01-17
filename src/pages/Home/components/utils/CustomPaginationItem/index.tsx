import { PaginationItemProps } from "@mui/material";
import React from "react";
import { StyledPaginationItem } from "./style";

function CustomPaginationItem(props: PaginationItemProps) {
  return <StyledPaginationItem {...props} />;
}

export default CustomPaginationItem;
