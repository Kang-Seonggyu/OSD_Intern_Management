import React from 'react';
import moment from "moment";

function TestComp(props) {
    const title = "반복되는 이벤트"
    const startDate= "2022-10-22"
    const endDate ="2022-11-06"

    const makeBetweenDates = (startDay, endDay) => {
        const datesArray = [];
        let currentDate = moment(startDay);
        let stopDate =moment(endDay);
        while ( currentDate <= stopDate) {
            datesArray.push( moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1,"days");
        }
        return datesArray
    }

    return (
        <div>
            <div>{title},{typeof(title)}</div>
            {
                makeBetweenDates(startDate,endDate).map((date) => {
                    return <div key={date}>{date}</div>
                })
            }
        </div>
    );
}

export default TestComp;