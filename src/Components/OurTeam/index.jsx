import React from "react";
import "./index.css";
import OurTeam1 from "../../Images/OurTeam1.png";
import OurTeam2 from "../../Images/OurTeam2.png";
import OurTeam3 from "../../Images/OurTeam3.png";
import OurTeamCard from "./OurTeamCard";
function OurTeam() {
  return (
    <div className="MainDiv4" >
      <span className="MainTextHeader">Our Team Members</span>
      <hr className="MainHR"></hr>

      <div className="BookingCard">
        <OurTeamCard
          title="Brajesh Pathak"
          body="A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been..."
          image={OurTeam1}
        />
        <OurTeamCard
          title="Deepak Shukla"
          body="Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications."
          image={OurTeam2}
        />
        <OurTeamCard
          title="Alok Kumar Singh"
          body="Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management."
          image={OurTeam3}
        />
      </div>
    </div>
  );
}

export default OurTeam;
