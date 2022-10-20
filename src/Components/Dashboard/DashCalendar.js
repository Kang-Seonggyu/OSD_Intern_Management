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
  display: grid;
  grid-auto-rows: 30px 1fr;
  width: 100%;
  height: 90%;
`
const CalendarIndex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .birthday {
    background: lightpink;
  }

  .vacation {
    background: lightcyan;
  }

  .Event {
    background: #ffffb5;  
  }
  .others {
    background: #bcc5fd;
  }
`
const IndexingBar = styled.div`
  width: 3vw;
  height: 3vh;
  min-height: 15px;
  max-height: 25px;
  font-size: 2vh;
`;

const CalendarBox = styled.div`
  position: relative;
  margin: 2px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
`
const NaviBox = styled.div`
  position: absolute;
  color: black;
  width: 100%;
  height: 99%;
  cursor: pointer;
  background: black;
  opacity: 0;
  &:hover {
    opacity: 0.4;
    background-color: lightgray;
  }

`
const TableHead = styled.div`
  height: 3vh;
  min-height: 21px;
  background: lightgreen;
  text-align: center;
`
const TableBody = styled.div`
  background: white;
  grid-auto-rows: minmax(15rem, auto);
  width: 100%;
  height: 7vh;
  text-align: left;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;

  .date {
    width: 100%;
    padding-left: 8px;
    text-align: left;
  }
  .sunday {
    color : red;
  }
  
  .holiday {
    background: #ffd7a3;
    width: 90%;
    padding-left: 6px;
    font-size: 1vh;
  }

  .birthday {
    background: lightpink;
    width: 90%;
    padding-left: 6px;
    font-size: 1vh;
  }

  .vacation {
    background: lightcyan;
    width: 90%;
    padding-left: 6px;
    font-size: 1vh;
  }

  .Event {
    background: #ffffb5;
    width: 90%;
    padding-left: 6px;
    font-size: 1vh;
  }
  .others {
    background: #bcc5fd;
    width: 90%;
    padding-left: 6px;
    font-size: 1vh;
  }

`

const PushTag = (
    key,
    loadedMoment,
    dayClass
) => {
    // 다른 달의 경우 모두 회색으로 처리
    if (dayClass === "anotherMonth"
    ) {
        return (
            <TableBody id={key} key={key}>
                <div className="date" style={{color: "lightgray"}}> {loadedMoment.format('D')} </div>
            </TableBody>
        )
    }
    // 이번 달의 경우 (오늘,평일,주말) 각각 따로 처리
    else {
        // 오늘의 경우
        if (dayClass === "Today") {
            return (
                <TableBody id={key} key={key} style={{background: "#c8ffc8"}}>
                    <div className="date"> {loadedMoment.format('D')} </div>
                </TableBody>
            )
        }
        else {
            return(
                <TableBody id={key} key={key}>
                    {
                        dayClass === "week" ?
                            // 평일일 경우 날짜를 검정색으로
                            <div className="date"> {loadedMoment.format('D')} </div>
                            :
                            // 주말일 경우 날짜를 빨간색으로
                            <div className="date sunday"> {loadedMoment.format('D')} </div>
                    }
                </TableBody>)
        }
    }
}

function DashCalendar({onClick}) {
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
                let days = today.clone().startOf('year').week(week).startOf('week').add(day, 'day'); // 'D' 로해도되지만 직관성
                let date = `Date-${days.format('YYYY-MM-DD')}`
                //------------------------------- 날짜 처리하는 구간 -------------------------------//
                // (이번달, !이번달)로 나눠서 처리.
                // 이번달은 글씨를 (평일 : 검정, 주말 : 빨강) 처리.
                if(days.format('MM') === today.format('MM')){
                    // 오늘 날짜 처리
                    if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                        result.push(PushTag(date, days, "Today"));
                    }
                    // 일요일 인 날에는 빨간글씨
                    else if (day === 0) {
                        result.push (PushTag(date, days, "sunday"));
                    }
                    // 일요일 아닌 날에는 검정글씨
                    else {
                        result.push (PushTag(date, days, "week"));
                    }

                }
                // 이번달이 아닌 경우 모두 회색처리.
                else {
                    result.push (PushTag(date, days,"anotherMonth"));
                }
            }
        }
        return result;
    }
    return (
        <>
            <ControllerBlock>
                <ControlButton title="1년전" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'year')) }}>«</ControlButton>
                <ControlButton title="1달전" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>‹</ControlButton>
                <span>{today.format('YY 년 MM 월')}</span>
                <ControlButton title="1달후" onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>›</ControlButton>
                <ControlButton title="1년후" onClick={()=>{ setMoment(getMoment.clone().add(1, 'year')) }}>»</ControlButton>
            </ControllerBlock>
            <CalendarBlock>
                <CalendarIndex>
                    <IndexingBar className="birthday"/>생일
                    <IndexingBar className="vacation"/>휴가
                    <IndexingBar className="Event"/>행사
                    <IndexingBar className="others"/>기타
                </CalendarIndex>
                <CalendarBox>
                    <NaviBox onClick={onClick} />
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
