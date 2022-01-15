import styled from "styled-components/macro";

export const StyledAside = styled.aside`
  background: ${({ theme }) => theme.palette.common.main};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: 18px;
  padding-left: 27px;
  padding-right: 21px;
  width: 100%;
`;
