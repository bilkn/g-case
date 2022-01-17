import React from "react";
import { LinkProps } from "react-router-dom";
import { StyledLink } from "./styled";

function CustomLink(props: LinkProps) {
  const { children, ...rest } = props;
  return <StyledLink {...rest}>{children}</StyledLink>;
}

export default CustomLink;
