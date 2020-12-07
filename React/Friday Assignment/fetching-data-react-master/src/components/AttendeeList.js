import React, { Component } from "react";
import Attendees from "./Attendees";

const AttendeeList = ({ attendees }) => {
    console.log(attendees)
    attendees.map((attendee) => {
        return (
            <Attendees
            id={attendee.id}
            firstName={attendee.firstName}
            lastName={attendee.lastName}
            email={attendee.email}
            shirt={attendee.shirt}
            skillLevel={attendee.skillLevel}
          />
        );
      });

  return <div></div>;
};

export default AttendeeList;
/* .filter((attendee) => {
            return attendee.skillLevel === 'tbd' */
