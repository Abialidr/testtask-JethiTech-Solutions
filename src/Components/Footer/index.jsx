import React from "react";
import "./index.css";
function Footer() {
  return (
    <div className="">
      <div className="FooterMain">
        <div className="FooterLinks">
          <div className="FooterLinksLogo">
            <img src="./Logo/logoDark.svg" />
          </div>
          <div className="FooterLinksCompany">
            <span className="FooterLinksTitle">Company</span>
            <span className="FooterLinkBody">Home</span>
            <span className="FooterLinkBody">Our Offerings</span>
            <span className="FooterLinkBody">Our Team</span>
            <span className="FooterLinkBody">Contact Us</span>
          </div>
          <div className="FooterLinksCompany">
            <span className="FooterLinksTitle">Useful Link</span>
            <span className="FooterLinkBody">Blogs</span>
            <span className="FooterLinkBody">FAQ's</span>
          </div>
          <div className="FooterLinksContactMain">
            <div className="FooterLinksContactSub">
              <img src="./Logo/Envelope.svg" />
              <div>
                <span className="FooterLinksTitle">Email:</span>
                <span className="FooterLinkBody">support@inreglobal.com</span>
              </div>
            </div>
            <div className="FooterLinksContactSub">
              <img src="./Logo/Call.svg" />
              <div>
                <span className="FooterLinksTitle">Phone:</span>
                <span className="FooterLinkBody">+91 | 7019305889</span>
              </div>
            </div>
          </div>
        </div>
        <div className="FooterCopyright">
          <div className="FooterLinksTitle">
            Copyright 2023. Designed by INRE Global
          </div>
          <div className="FooterLinksBody">
            <div className="FooterLinksBodyItem">
              <img src="./Logo/LN.svg" />
              <span>LinkedIn</span>
            </div>
            <div className="FooterLinksBodyItem">
              <img src="./Logo/FB.svg" />
              <span>Facebook</span>
            </div>
            <div className="FooterLinksBodyItem">
              <img src="./Logo/TW.svg" />
              <span>Twitter</span>
            </div>
            <div className="FooterLinksBodyItem">
              <img src="./Logo/IN.svg" />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
