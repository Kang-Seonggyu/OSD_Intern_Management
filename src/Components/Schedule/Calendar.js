import {useState} from 'react';
import moment from 'moment';
import styled from "styled-components";

const CalTotalBlock = styled.div`
  width: 100%;
  min-width: 650px;
  height: 100%;
  margin: 1px;
  display: grid;
  align-items: center;
  justify-items: center;
`
const CalendarControllerBlock = styled.div`
  display: grid;
  grid-template-columns: 50px 30px 1fr 30px 50px;
  width: 95vw;
  min-width: 640px;
  height: 60px;
  margin-top : 10px;
  align-items: center;
  justify-items: center;
`
const Spacer = styled.div`
`
const ControlButton = styled.button`
  border: none;
  text-align: center;
  cursor: pointer;
`
const CalendarBlock = styled.div`
  width: 95vw;
  min-width: 640px;
  height: 80vh;
  min-height: 490px;
  border: 1px solid black;
`
const CalendarIndex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
`
const CalendarBox = styled.div`
  margin: 2px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  text-align: center;
`
const TableHead = styled.div`
  background: lightgreen;
`
const TableBody = styled.div`
  background: white;
  grid-auto-rows: minmax(10rem, auto);
  width: 100%;
  min-width: 90px;
  height: auto;
  min-height: 90px;
  text-align: left;
  .date {
    padding-left: 8px;
  }
  .birthday {
    background: lightpink;
    width: 90%;
    padding-left: 6px;
  }
  .vacation {
    background: lightcyan;
    width: 90%;
    padding-left: 6px;
  }
  .Event {
    background: lightyellow;
    width: 90%;
    padding-left: 6px;
  }
`

function Calendar () {

    const [getMoment, setMoment] = useState(moment())

    const today = getMoment;
    // 이번달의 첫번째 주
    const firstWeek = today.clone().startOf('month').week();
    // 이번달의 마지막 주 (만약 마지막 주가 1이 나온다면 53번째 주로 변경)
    const lastWeek = today.clone().endOf('month').week() === 1? 53 : today.clone().endOf('month').week();

    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            for ( let day=0 ; day < 7 ; day ++ ) {
                let days = today.clone().startOf('year').week(week).startOf('week').add(day, 'day'); //d로해도되지만 직관성
                let date = `Date-${days.format('YYYYMMDD')}`
                //------------------------------- 날짜 처리하는 구간 -------------------------------//
                // 크게 3분류(오늘, !이번달, 이번달)로 나눠서 처리.
                // 오늘 날짜 처리
                if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                    // 일요일 인 날에는 빨간글씨
                    if(day === 0) {
                        result.push(
                            <TableBody key={date} style={{backgroundColor:'lightgreen', color:"red"}} >
                                <div id={date}>{days.format('D')}</div>
                            </TableBody>
                        );
                    }
                    // 일요일 아닌 날에는 검정글씨
                    else {
                        result.push(
                            <TableBody key={date} style={{backgroundColor:'lightgreen'}} >
                                <div id={date}>{days.format('D')}</div>
                            </TableBody>
                        );
                    }
                }
                // !이번달 => 이번 달이 아닌 날들은 글씨를 회색처리.
                else if(days.format('MM') !== today.format('MM')){
                    result.push(
                        <TableBody key={date} className="week-days" style={{color:'lightgray'}} >
                            <div id={date}>{days.format('D')}</div>
                        </TableBody>
                    );
                }
                // 이번 달에 속한 날
                else {
                    // 일요일 인 날에는 빨간글씨
                    if (day === 0) {
                        result.push (
                            <TableBody key={date} className="week-days" style={{color: 'red'}}>
                                <div id={date}>{days.format('D')}</div>

                            </TableBody>
                        );
                    }
                    // 일요일 아닌 날에는 검정글씨
                    else {
                        result.push (
                            <TableBody key={date} className="week-days" style={{flexDirection: "column"}}>
                                <div id={date}>{days.format('D')}</div>
                            </TableBody>
                        );
                    }
                }
            }
        }
        return result;
    }

    return(
        <div>
            <CalTotalBlock>
                <CalendarControllerBlock>
                    <button><i className="fas fa-redo fa-fw me-1" /></button>
                    <Spacer style={{gridColumn:"2/4",gridRow : "1"}}></Spacer>
                    <button style={{gridColumn:"4/6",gridRow : "1"}}>일정추가</button>
                    <ControlButton>«</ControlButton>
                    <ControlButton>‹</ControlButton>
                    <span>날짜</span>
                    <ControlButton>›</ControlButton>
                    <ControlButton>»</ControlButton>
                </CalendarControllerBlock>
                <CalendarBlock>
                    <CalendarIndex>
                        Index
                    </CalendarIndex>
                    <CalendarBox>
                        { ['일','월','화','수','목','금','토'].map((day) => {
                            return( <TableHead key={day}>{day}</TableHead> )
                        })}
                        {calendarArr()}

                    </CalendarBox>
                </CalendarBlock>
            </CalTotalBlock>
        </div>
    )
}

export default Calendar;