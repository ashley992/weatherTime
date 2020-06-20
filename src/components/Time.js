import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const TimeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  font-size: 32px;
  color: #fff;
  grid-gap: 20px;
`;

const Time = () => {
  const [time, setTime] = useState(moment().format("hh:mm:ss A"));

  setInterval(() => setTime(moment().format("hh:mm:ss A")), 500);

  return (
    <TimeWrapper>
      <div>Today is</div>
      <div>
        <b>{moment().format("dddd, MMMM Do YYYY")}</b>
      </div>
      <div>{time}</div>
    </TimeWrapper>
  );
};

export default Time;
