import styled from "styled-components";

const BobBlock = styled.div`
  height: 25rem;
  margin: 0 10px 0 5px;
  padding: 10px;
`;
const BobLabel  = styled.div`
    margin-left: 2rem;
`;
const BobTextbox = styled.div`
    border: 1px solid black;
    margin : 1rem 18px 1rem 18px;
    padding: 7px;
`;

function DashBob () {
    return (
        <BobBlock>
            <BobLabel>이번 주 밥친구</BobLabel>
            <BobTextbox>
                <p>날짜 - 메뉴</p>
                <p>OOO, OOO, OOO, OOO</p>
            </BobTextbox>
            <BobLabel>다음 주 밥친구</BobLabel>
            <BobTextbox>
                OOO, OOO, OOO, OOO
            </BobTextbox>
        </BobBlock>
    )
}

export default DashBob;