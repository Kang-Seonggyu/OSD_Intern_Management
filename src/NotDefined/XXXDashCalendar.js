import {useState} from 'react';
import moment from 'moment';
import styled from "styled-components";

const DCalendarBlock = styled.div`
  height: 25rem;
  margin: 0 5px 0 10px;
  padding: 10px;
  align-items: center;
  justify-items: center;
`;

const DCalendarController = styled.div`
  display: grid;
  grid-template-columns: 30px 30px 1fr 30px 30px;
  align-items: center;
  justify-items: center;
`;

const DCalendarTable = styled.table`
  display: flex;
  width: 50vw;
  height: 50vh;
`

const DCalendarTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

const DCalendarTr = styled.tr`
  display: flex;
`

const DCalendarWeekIndex = styled.th`
  font-size: 2vh;
  width: 4vw;
  height: 3vh;
  text-align: center;
  justify-content: center;
  background-color: #22b8cf;
`;

const DCalendarWeekDays = styled.span`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.09);
    
    width: 4vw;
    height: 7vh;
`
const DCalendarDate = styled.span`
  width: 3vw;
  height: 3vh;
  font-size: 2vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const DCalendarEvent = styled.span`
  width: 10vw;
  height: 2vh;
  font-size: 1.5vm;
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


    const calendarArr=()=>{

        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <DCalendarTr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            // index : 0~6 반복
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                            let date = `Date-${days.format('YYYYMMDD')}`
                            //console.log(days)
                            //console.log(date)


                            //----------------------------날짜처리 하는 구간---------------------------
                            // 오늘 날짜
                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                // 일요일 인 날에는 빨간글씨
                                if(index === 0) {
                                    return(
                                        <DCalendarWeekDays key={index} style={{backgroundColor:'lightgreen', color:"red"}} >
                                            <DCalendarDate id={date}>{days.format('D')}</DCalendarDate>
                                        </DCalendarWeekDays>
                                    );
                                }
                                // 일요일 아닌 날에는 검정글씨
                                else {
                                    return(
                                        <DCalendarWeekDays key={index} style={{backgroundColor:'lightgreen'}} >
                                            <DCalendarDate id={date}>{days.format('D')}</DCalendarDate>
                                        </DCalendarWeekDays>
                                    );
                                }

                            }
                            // 이번 달이 아닌 날들에는 회색으로 처리
                            else if(days.format('MM') !== today.format('MM')){
                                return(
                                    <DCalendarWeekDays key={index} className="week-days" style={{color:'lightgray'}} >
                                        <DCalendarDate id={date}>{days.format('D')}</DCalendarDate>
                                    </DCalendarWeekDays>
                                );
                            }
                            // 이번 달에 속한 날
                            else{
                                // 일요일 인 날에는 빨간글씨
                                if (index === 0) {
                                    return (
                                        <DCalendarWeekDays key={index} className="week-days" style={{color : 'red'}}>
                                            <DCalendarDate id={date}>{days.format('D')}</DCalendarDate>
                                        </DCalendarWeekDays>
                                    );
                                }
                                // 일요일 아닌 날에는 검정글씨
                                else {
                                    return (
                                        <DCalendarWeekDays key={index} className="week-days"  style={{flexDirection:"column"}}>
                                            <DCalendarDate id={date}>{days.format('D')}</DCalendarDate>
                                            <DCalendarEvent>test</DCalendarEvent>
                                            <DCalendarEvent>test</DCalendarEvent>
                                        </DCalendarWeekDays>
                                    );
                                }
                            }
                        })
                    }
                </DCalendarTr>
            );
        }
        return result;
    }

    return (
        <DCalendarBlock>
            <DCalendarController>
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'year')) }} > « </button>
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} > ‹ </button>
                <span>{today.format('YYYY 년 MM 월')}</span>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} > › </button>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'year')) }} > » </button>
            </DCalendarController>
            <DCalendarTable>
                <DCalendarTableBody>
                    <DCalendarTr>
                        { ['일','월','화','수','목','금','토'].map((day) => {
                            return( <DCalendarWeekIndex key={day}>{day}</DCalendarWeekIndex> )
                        })}
                    </DCalendarTr>
                    {calendarArr()}
                </DCalendarTableBody>
            </DCalendarTable>
        </DCalendarBlock>
    );
}

export default DashCalendar;