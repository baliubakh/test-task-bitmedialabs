import React from "react";
import * as Styled from "../../styles/footer.styled";

const Footer = () => {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterLogo>AppCo</Styled.FooterLogo>
      <Styled.FooterData>All rights reserved by ThemeTags</Styled.FooterData>
      <Styled.FooterData>Copyrights © 2023.</Styled.FooterData>
    </Styled.FooterWrapper>
  );
};

export default Footer;
