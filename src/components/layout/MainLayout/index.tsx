import React from "react";
import { CommonProps } from "../../../types/commonProps";
import { StyledMain } from "./style";

function MainLayout(props: CommonProps) {
  const { children } = props;
  return <StyledMain>{children}</StyledMain>;
}

export default MainLayout;
