import styled from "styled-components";
import { themes } from "./themes";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 57px;
  padding: 0 10%;
  position: absolute;
  bottom: 0;
  background-color: ${themes.colors.darkBlue};
  color: ${themes.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLogo = styled.span`
  font-size: 1.5rem;
  line-height: 29px;

  @media ${themes.media.maxMobile} {
    font-size: 1rem;
  }

  @media ${themes.media.maxLowScreenMobile} {
    font-size: 0.8rem;
  }
`;

export const FooterData = styled.span`
  font-size: 16px;
  line-height: 142%;

  @media ${themes.media.maxMobile} {
    font-size: 0.7rem;
  }

  @media ${themes.media.maxLowScreenMobile} {
    font-size: 0.5rem;
  }
`;
