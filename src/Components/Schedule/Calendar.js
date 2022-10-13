import {useState} from 'react';
import moment from 'moment';
import styled from "styled-components";
import BackgroundLogo from "../Common/BackgroundLogo";

const CalTotalBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 1px;
  display: grid;
  align-items: center;
  justify-items: center;
`
const CalendarControllerBlock = styled.div`
  width: 95vw;
  height: 25px;
  margin-top : 10px;
  border: 1px solid black;
`
const ControllButton = styled.button`
  border: none;
`
const CalendarBlock = styled.div`
  width: 95vw;
  height: 80vh;
  border: 1px solid black;
`
function Calendar () {
    return(
        <div>
            <CalTotalBlock>
                <CalendarControllerBlock>
                    <ControllButton>«</ControllButton>
                    <ControllButton>‹</ControllButton>
                    컨트롤러
                    <ControllButton>›</ControllButton>
                    <ControllButton>»</ControllButton>
                </CalendarControllerBlock>
                <CalendarBlock>
                    캘린더
                </CalendarBlock>
            </CalTotalBlock>
        </div>
    )
}

export default Calendar;