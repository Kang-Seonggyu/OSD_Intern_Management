import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import moment from "moment";

const H2 = styled.h2`
  background: lightgrey;
`
const ArraySheet = styled.div`
  display: grid;
  border: 1px solid black;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 4px;
  margin-bottom: 15px;
`
const KidDiv = styled.div`
  :nth-child(odd) {
    background: #bde8bd;
  }

  :nth-child(even) {
    background: #f5fff5;
  }
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
                VArr.push(
                    <KidDiv key={idx}>
                        <div>{huga.mnm}</div>
                        <div>{huga.strdt} </div>
                        <div>{huga.enddte} </div>
                    </KidDiv>)
            })
        }
        return VArr;
    }
    const newVacationArr = () => {
        let newVArr = [];
        if(!loading && vacation) {
            vacation.map((oneDayInfo) => {
                let currentDate = moment(oneDayInfo.strdt);
                let stopDate = ''
                if(oneDayInfo.enddte === null) {
                    stopDate = moment(oneDayInfo.strdt)

                } else {
                    stopDate = moment(oneDayInfo.enddte)
                }
                while (currentDate <= stopDate) {
                    newVArr.push({
                        title : oneDayInfo.mnm,
                        date : moment(currentDate).format('YYYY-MM-DD')
                    })
                    currentDate = moment(currentDate).add(1,"days");
                }
            })
        }
        return newVArr
    }

    const oneDayDataMerge = () => {
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
    const oneDayDataSpread = () => {
        if(!loading && vacation) {
            const oneDayFilter = vacation.filter(e => e.strdt === findDate)
            return oneDayFilter.map((data, idx) => {
                return(
                <KidDiv key={idx}>
                    <div>{data.mnm}</div>
                    <div>{data.depnm}</div>
                    <div>{data.strdt}</div>
                    <div>{data.enddte}</div>
                    <div>{data.reason}</div>
                    <div>{data.v_type}</div>
                </KidDiv>
                )
            })
        }
    }

    return (
        <div>
            <h1>휴가 정보 처리</h1>
            <H2>원본 휴가 정보 정리</H2>
            <button title="1년전" onClick={yearDecreaseButton}>«</button>
            <button title="1달전" onClick={monthDecreaseButton}>‹</button>
            <span>{momentValue.format('YYYY-MM')}</span>
            <button title="1달후"  onClick={monthIncreaseButton}>›</button>
            <button title="1년후"  onClick={yearIncreaseButton}>»</button>
            <ArraySheet>
                {vacationArr()}
            </ArraySheet>
            <H2>날짜를 푼 휴가 정보</H2>
            <ArraySheet>
                {newVacationArr().map((data, idx) => {
                    return (
                        <KidDiv key={idx}>
                            <div>{data.title}</div>
                            <div>{data.date}</div>
                        </KidDiv>
                    )

                })}
            </ArraySheet>
            <H2>데이터 검색</H2>
            <input type="date" onChange={onChange} value={findDate}/>
            <div>{findDate} 데이터 모으기</div>
            <ArraySheet>
                {oneDayDataMerge()}
            </ArraySheet>
            <div>{findDate} 데이터 펼치기</div>
            <ArraySheet>
                {oneDayDataSpread()}
            </ArraySheet>
            <div style={{marginTop:"60px"}}>.</div>
        </div>
    );
}

export default TestVaction;