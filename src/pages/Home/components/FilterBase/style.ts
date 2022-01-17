import { Box } from "@mui/material";
import styled from "styled-components/macro";

export const TitleContainer = styled(Box)`
  padding: 0 16px;

  @media (min-width: 900px) {
    padding: 0;
  }
`;

export const ContentContainer = styled(Box)`
  background: ${({ theme }) => theme.palette.common.main};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  width: 100%;
  /*   padding-left: 27px;
  padding-right: 21px; */
`;
