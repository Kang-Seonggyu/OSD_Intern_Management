import styled from "styled-components";
import Bobfriend from "./DashBob";
import DashCalendar from "./DashCalendar";

const DashboardBlock = styled.div`
  margin-top : 10px
`;

const DashboardMain = styled.div`
  display: grid;
  grid-template-columns : 1fr 1fr;
`;


function DASHBOARD () {
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
            <DashboardMain>
                <DashCalendar />
                <Bobfriend />
            </DashboardMain>
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