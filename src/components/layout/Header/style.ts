import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 18px 16px;
  padding-right: 8px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
