import {useState} from 'react';
import moment from 'moment';
import styled from "styled-components";


const CalendarBlock = styled.div`
  height: 25rem;
  margin: 0 5px 0 10px;
  padding: 10px;
  align-items: center;
  justify-items: center;
`;

const CalendarController = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

const CalendarTable = styled.table`
  display: flex;
  width: 50vw;
  height: 50vh;
`
const CalendarTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

const CalendarTr = styled.tr`
  display: flex;
  flex-direction: row;
`

const CalendarWeekIndex = styled.td`
  font-size: 2vh;
  width: 4vw;
  height: 3vh;
  text-align: center;
  justify-content: center;
  background-color: #22b8cf;
`;

const CalendarWeekDays = styled.div`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.09);
    font-size: 2vh;
    width: 4vw;
    height: 7vh;
`
const CalendarDate = styled.div`
  width: 3vw;
  height: 4vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const CalendarEvent = styled.div`
  width: 10vw;
  height: 3vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;


function DashCalendar () {
    const [getMoment, setMoment]=useState(moment());

    const today = getMoment;
    // 이번 달의 첫번째 주
    const firstWeek = today.clone().startOf('month').week();
    // 이번 달의 마지막 주
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    //const testWeek = today.clone().endOf('month')
    //console.log(testWeek)


    const calendarArr=(standardSize)=>{

        const _standardSize = standardSize
        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <CalendarTr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            // index : 0~6 반복
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                            let date = `Date-${days.format('YYYYMMDD')}`
                            ////console.log(date)

                            //----------------------------날짜처리 하는 구간---------------------------
                            // 오늘 날짜
                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                // 일요일 인 날에는 빨간글씨
                                if(index === 0) {
                                    return(
                                        <CalendarWeekDays key={index} className="week-days" style={{backgroundColor:'lightgreen', color:"red"}} >
                                            <CalendarDate id={date}>{days.format('D')}</CalendarDate>
                                        </CalendarWeekDays>
                                    );
                                }
                                // 일요일 아닌 날에는 검정글씨
                                else {
                                    return(
                                        <CalendarWeekDays key={index} className="week-days" style={{backgroundColor:'lightgreen'}} >
                                            <CalendarDate id={date}>{days.format('D')}</CalendarDate>
                                        </CalendarWeekDays>
                                    );
                                }

                            }
                            // 이번 달이 아닌 날들에는 회색으로 처리
                            else if(days.format('MM') !== today.format('MM')){
                                return(
                                    <CalendarWeekDays key={index} className="week-days" style={{color:'lightgray'}} >
                                        <CalendarDate id={date}>{days.format('D')}</CalendarDate>
                                    </CalendarWeekDays>
                                );
                            }
                            // 이번 달에 속한 날
                            else{
                                // 일요일 인 날에는 빨간글씨
                                if (index === 0) {
                                    return (
                                        <CalendarWeekDays key={index} className="week-days" style={{color : 'red'}}>
                                            <CalendarDate id={date}>{days.format('D')}</CalendarDate>
                                        </CalendarWeekDays>
                                    );
                                }
                                // 일요일 아닌 날에는 검정글씨
                                else {
                                    return (
                                        <CalendarWeekDays key={index} className="week-days">
                                            <CalendarDate id={date}>{days.format('D')}</CalendarDate>
                                            <CalendarEvent>test</CalendarEvent>
                                        </CalendarWeekDays>
                                    );
                                }
                            }
                        })
                    }
                </CalendarTr>
            );
        }
        return result;
    }

    return (
        <CalendarBlock>
            <CalendarController>
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'year')) }} > « </button>
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} > ‹ </button>
                <span>{today.format('YYYY 년 MM 월')}</span>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} > › </button>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'year')) }} > » </button>
            </CalendarController>
            <CalendarTable>
                <CalendarTableBody>
                    <CalendarTr>
                        <CalendarWeekIndex>일</CalendarWeekIndex>
                        <CalendarWeekIndex>월</CalendarWeekIndex>
                        <CalendarWeekIndex>화</CalendarWeekIndex>
                        <CalendarWeekIndex>수</CalendarWeekIndex>
                        <CalendarWeekIndex>목</CalendarWeekIndex>
                        <CalendarWeekIndex>금</CalendarWeekIndex>
                        <CalendarWeekIndex>토</CalendarWeekIndex>
                    </CalendarTr>
                    {calendarArr()}
                </CalendarTableBody>
            </CalendarTable>
        </CalendarBlock>
    );
}

export default DashCalendar;