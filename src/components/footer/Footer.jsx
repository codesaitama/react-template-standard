import React from "react";
import FooterWrapper from "./footer.style";

const Footer = props => {
  return (
    <FooterWrapper {...props}>
      <div className="footerBack flex-x align-center">
        <div className="flex-1 fs-13 bold-text footer-text">
          © {new Date().getFullYear()} Persol Systems Ltd, All rights reserved.
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
