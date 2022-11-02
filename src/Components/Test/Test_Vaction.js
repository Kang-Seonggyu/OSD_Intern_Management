import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const ArraySheet = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 15px;
`

function TestVaction({
                         momentValue,
                         vacation,
                         loading,
                         yearIncreaseButton,
                         yearDecreaseButton,
                         monthIncreaseButton,
                         monthDecreaseButton,
                     }) {
    const [findDate, setFindDate ] = useState('');
    const onChange = (e) => {
        setFindDate(e.target.value)
    }
    const sortDate =(list) => {
        const sorted_list = list.sort(function(a, b) {
            return new Date(a.strdt) - new Date(b.strdt); // 오름차순
        });
        // 내림차순은 .reverse(); 해주기.
        return sorted_list;
    }

    const vacationArr = () => {
        let VArr = [];
        if(!loading && vacation){
            let sortedVacation = sortDate(vacation)
            sortedVacation.map((huga, idx) => {
                VArr.push(<div key={idx}>
                    <div>{huga.mnm}</div> <div>{huga.strdt} </div>
                </div>)
            })
        }
        return VArr;
    }

    const oneDayData = () => {
        if(!loading && vacation){
            const oneDayFilter = vacation.filter(e => e.strdt === findDate)
            if(oneDayFilter.length >1 ) {
                return `${oneDayFilter[0].mnm}외 ${oneDayFilter.length-1}명`
            }
            else if (oneDayFilter.length === 1) {
                return oneDayFilter[0].mnm
            }
            else { return ''}
        }
    }

    return (
        <div>
            <h1>휴가 정보 담기</h1>
            <button title="1년전" onClick={yearDecreaseButton}>«</button>
            <button title="1달전" onClick={monthDecreaseButton}>‹</button>
            <span>{momentValue.format('YYYY-MM')}</span>
            <button title="1달후"  onClick={monthIncreaseButton}>›</button>
            <button title="1년후"  onClick={yearIncreaseButton}>»</button>
            <ArraySheet>
                {vacationArr()}
            </ArraySheet>
            <input type="date" onChange={onChange} value={findDate}/>
            <div>{findDate}</div>
            <ArraySheet>
                {oneDayData()}
            </ArraySheet>
        </div>
    );
}

export default TestVaction;