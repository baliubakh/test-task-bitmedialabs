import styled from "styled-components";
import { themes } from "./themes";

export const HeaderWrapper = styled.header`
  height: 72px;
  padding: 0 10%;
  background-color: ${themes.colors.blue};
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  color: ${themes.colors.secondary};
  font-size: 40px;
  line-height: 48.76px;
`;
