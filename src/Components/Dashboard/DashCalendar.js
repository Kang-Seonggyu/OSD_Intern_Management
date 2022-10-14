import {useState} from 'react';
import moment from 'moment';
import styled from "styled-components";

const ControllerBlock = styled.div`
  margin-top : 5px;
  margin-bottom : 5px;
  display: grid;
  grid-template-columns: 30px 30px 1fr 30px 30px;
  width: 100%;
  height: 4vh;
  min-height: 20px;
  font-size: 2vmin;
  align-items: center;
  justify-items: center;
`
const ControlButton = styled.button`
  border: none;
  text-align: center;
  cursor: pointer;
  margin : 3px
`
const CalendarBlock = styled.div`
  width: 99%;
  height: 90%;
`
const CalendarIndex = styled.div`
  display: flex;
  justify-content: space-around;
`
const CalendarBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
`
const TableHead = styled.div`
  height: 3vh;
  background: lightgreen;
  text-align: center;
`
const TableBody = styled.div`
  background: white;
  grid-auto-rows: minmax(15rem, auto);
  width: 100%;
  height: 7vh;
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

\`
`
const PushTag = (key, loadedMoment,weekend ,anothorM, today) => {
    return (
        <TableBody key={key} >
            {
                anothorM ?
                    <div id={key} className="date" style={{color : "lightgray"}}>{loadedMoment.format('D')}</div>
                    :
                    weekend ?
                        today ?
                            <div id={key} className="date" style={{background:"#c8ffc8", color : "red"}}>{loadedMoment.format('D')}</div>
                            :
                            <div id={key} className="date" style={{color : "red"}}>{loadedMoment.format('D')}</div>
                        :
                        today ?
                            <div id={key} className="date"  style={{background:"#c8ffc8"}}>{loadedMoment.format('D')}</div>
                            :
                            <div id={key} className="date">{loadedMoment.format('D')}</div>
            }
        </TableBody>
    )
}
function DashCalendar(props) {
    const [getMoment, setMoment] = useState(moment())

    const today = getMoment;
    // 이번달의 첫번째 주
    const firstWeek = today.clone().startOf('month').week();
    // 이번달의 마지막 주 (만약 마지막 주가 1이 나온다면 53번째 주로 변경)
    const lastWeek = today.clone().endOf('month').week() === 1? 53 : today.clone().endOf('month').week();

    const calendarArr=()=> {
        let result = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            for (let day = 0; day < 7; day++) {
                let days = today.clone().startOf('year').week(week).startOf('week').add(day, 'day'); //d로해도되지만 직관성
                let date = `Date-${days.format('YYYYMMDD')}`
                //------------------------------- 날짜 처리하는 구간 -------------------------------//
                // 크게 3분류(오늘, !이번달, 이번달)로 나눠서 처리.
                // 오늘 날짜 처리
                if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                    // 일요일 인 날에는 빨간글씨
                    if (day === 0) {
                        result.push(PushTag(date, days, 1, 0, 1));
                    }
                    // 일요일 아닌 날에는 검정글씨
                    else {
                        result.push(PushTag(date, days, 0, 0, 1));
                    }
                }
                // !이번달 => 이번 달이 아닌 날들은 글씨를 회색처리.
                else if (days.format('MM') !== today.format('MM')) {
                    result.push(PushTag(date, days, 0, 1));
                }
                // 이번 달에 속한 날
                else {
                    // 일요일 인 날에는 빨간글씨
                    if (day === 0) {
                        result.push(PushTag(date, days, 1, 0));
                    }
                    // 일요일 아닌 날에는 검정글씨
                    else {
                        result.push(PushTag(date, days, 0, 0));
                    }
                }
            }
        }
        return result;
    }
    return (
        <>
            <ControllerBlock>
                <ControlButton>«</ControlButton>
                <ControlButton>‹</ControlButton>
                <span>{today.format('YY 년 MM 월')}</span>
                <ControlButton>›</ControlButton>
                <ControlButton>»</ControlButton>
            </ControllerBlock>
            <CalendarBlock>
                <CalendarIndex>Index</CalendarIndex>
                <CalendarBox>
                    { ['일','월','화','수','목','금','토'].map((day) => {
                        return( <TableHead key={day} className="tableHead"><div>{day}</div></TableHead> )
                    })}
                    {calendarArr()}
                </CalendarBox>

            </CalendarBlock>
        </>
    );
}

export default DashCalendar;
