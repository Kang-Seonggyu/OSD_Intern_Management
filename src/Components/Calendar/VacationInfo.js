import React from 'react';
import styled from "styled-components";

const Fullscreen = styled.div`
  position : fixed;
  z-index : 30;
  top : 0;
  left : 0;
  width : 100%;
  height : 100%;
  background : rgba(0, 0, 0, 0.25);
  display : flex;
  justify-content : center;
  align-items : center;
`;
const VacationInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background : white;
  width: 300px;
  border-radius: 15px;
  text-align: center;
`
const KidItem = styled.div`
  margin: 3px;
  border-radius : 15px;

  :nth-child(odd) {
    background: #afdafd;
  }

  :nth-child(even) {
    background: #ebf5ff;
  }
`



function VacationInfo({
                          visible,
                          VacationOutClick,
                          newVacationList,
                          PickedId
}) {
    const matchCategory = (pair) => {
        if (pair ==='PMVACATION'){ return '오후반차'}
        else if (pair ==='AMVACATION'){ return '오후반차'}
        else if (pair ==='ANNUAL'){ return '연차'}
        else if (pair ==='TRAINING'){ return '훈련'}
    }

    if (!visible) {return <></>}
    else {
        return (
            <Fullscreen onClick={VacationOutClick}>
                <VacationInfoBlock>
                    <h2>{PickedId}일 휴가명단</h2>
                    <div>
                    {newVacationList.filter(e => e.date === PickedId).map((data,idx) => {
                        return <KidItem key={idx}>{data.title}  {matchCategory(data.category)}</KidItem>
                    } )}
                    </div>
                </VacationInfoBlock>
            </Fullscreen>
        )};
    };

export default VacationInfo;