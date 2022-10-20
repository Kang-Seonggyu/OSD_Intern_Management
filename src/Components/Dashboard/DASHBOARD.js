import styled from "styled-components";
import Bobfriend from "./DashBob";
import DashCalendar from "./DashCalendar";
import Holiday from "../Calendar/Holiday";

const standardSize = 10;

const DashboardBlock = styled.div`
  margin-top : 10px;
  z-index : 1;
`;

const DashboardMainBlock = styled.div`
  display: grid;
  grid-template-columns : 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const DashboardMain = styled.div`
  margin-top: 50px;
  width: ${standardSize*3.5}vw;  
  height: ${standardSize*6.2}vh;
  border: 1px solid black;
`


function DASHBOARD ( {onClick, controller} ) {
    // 임시로 배열 만들기.
    function makeArray () {
        let num = [];
        for (let i = 0; i <30; i++) {
            num.push(<li key={i}>번째 복제글을 테스트 위해 하고있습니다. 덧셈 : {i}+{i} = {2*i} 곱셈 : {i}x{i} = {i*i}</li>)
        }
        return num;
    }

    return (
        <DashboardBlock>
            <DashboardMainBlock>
                <DashboardMain>
                    <DashCalendar onClick={onClick} controller={controller}/>
                </DashboardMain>
                <DashboardMain>
                    <Bobfriend />
                </DashboardMain>
            </DashboardMainBlock>

            <div>
                <ol>
                    {makeArray()}
                    End !
                </ol>
            </div>
        </DashboardBlock>
    )
}

export default DASHBOARD;