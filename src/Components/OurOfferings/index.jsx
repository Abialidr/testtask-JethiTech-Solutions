import React, { useState } from "react";
import "./index.css";
import OurOfferingCard from "./OurOfferingCard";
import OurOffering1 from "../../Images/OurOffering1.png";
import OurOffering2 from "../../Images/OurOffering2.png";
import OurOffering3 from "../../Images/OurOffering3.png";
function OurOfferings() {
  const [booking, setBooking] = useState("PreR");

  return (
    <div className="MainDiv3">
      <span className="MainTextHeader">Our Offerings</span>
      <hr className="MainHR"></hr>
      <small className="MainSmall">
        This whole purchase journey can be divided into three stages. For more
        details, <span>Click Here</span>{" "}
      </small>
      <div className="MainBooking">
        <div
          className={`BookingChild ${
            booking === "PreB" ? "MainBookingActive" : "MainBookingInactive"
          }`}
          onClick={() => {
            setBooking("PreB");
          }}
        >
          <div>1</div>
          <span> Pre-Booking</span>
        </div>
        <div
          className={`BookingChild ${
            booking === "PreR" ? "MainBookingActive" : "MainBookingInactive"
          } `}
          onClick={() => {
            setBooking("PreR");
          }}
        >
          <div>2</div>
          <span> Post-Booking & Pre-Registration</span>
        </div>
        <div
          className={`BookingChild ${
            booking === "PostB" ? "MainBookingActive" : "MainBookingInactive"
          } `}
          onClick={() => {
            setBooking("PostB");
          }}
        >
          <div>3</div>
          <span> Post-Registration</span>
        </div>
      </div>
      <div className="BookingCard">
        {booking === "PreB" ? (
          <>
            <OurOfferingCard
              title="Background verification 1"
              body="Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..."
              image={OurOffering1}
            />
            <OurOfferingCard
              title="Virtual site visit 1"
              body="It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
              image={OurOffering2}
            />
            <OurOfferingCard
              title="Title diligence 1"
              body="Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
              image={OurOffering3}
            />
          </>
        ) : booking === "PreR" ? (
          <>
            <OurOfferingCard
              title="Background verification"
              body="Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..."
              image={OurOffering1}
            />
            <OurOfferingCard
              title="Virtual site visit"
              body="It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
              image={OurOffering2}
            />
            <OurOfferingCard
              title="Title diligence"
              body="Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
              image={OurOffering3}
            />
          </>
        ) : (
          booking === "PostB" && (
            <>
              <OurOfferingCard
                title="Background verification 3"
                body="Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..."
                image={OurOffering1}
              />
              <OurOfferingCard
                title="Virtual site visit 3"
                body="It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
                image={OurOffering2}
              />
              <OurOfferingCard
                title="Title diligence 3"
                body="Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
                image={OurOffering3}
              />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default OurOfferings;
