import {useState} from 'react';
import moment from 'moment';
import styled from "styled-components";
import BackgroundLogo from "./BackgroundLogo";

const CalendarControllerBlock = styled.div`
  width: 95vw;
  height: 5vh;
  margin: 10px 0px 0px 10px;
  border: 1px solid black;
`
const CalendarBlock = styled.div`
  width: 95vw;
  height: 80vh;
  margin: 0px 0px 0px 10px;
  border: 1px solid black;
`
function Calendar () {
    return(
        <div>
            <BackgroundLogo/>
        </div>
    )
}

export default Calendar;