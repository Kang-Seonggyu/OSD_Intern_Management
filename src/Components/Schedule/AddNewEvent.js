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

const AddNewEventBlock = styled.div`
    width : 520px;
    height: 600px;
    background : white;
    box-shadow : 0px 0px 8px rgba(0, 0, 0, 0.125);
    h1 {
      margin-top: 0;
      background: #001448;
      color : white;
      font-size: 30px;
    }
    h2 {
      margin: 10px;
    }
    input {
      margin-left : 10px;
    }
    select {
      margin-left : 10px;
    }
    p {
        margin-bottom : 3rem;
    }
    .description {
      font-size: 15px;
    }
    .buttons {
        display : flex;
        justify-content : flex-end;
    }
`;

const StyledButton = styled.button`
    height : 2rem;
    & + & {
        margin-left : 1.75rem;
    }
`;

const AddNewEvent = ({
                      visible,
                      onConfirm,
                      onCancel,
                  }) => {
    if (!visible) return null;
    return (
        <Fullscreen>
            <AddNewEventBlock>
                <h1>일정추가</h1>
                <h2>제목 <span style={{fontSize:"15px"}}>(휴가와 생일은 이름을 입력해주세요.)</span></h2>
                <input placeholder="제목을 입력하세요."></input>
                <h2>이름</h2>
                <input placeholder="이름을 입력하세요."></input>
                <h2>시작 일자</h2>
                <input type="date"></input>
                <h2>종료 일자</h2>
                <input type="date"></input>
                <h2>일정 분류</h2>
                <select >
                    <option>출장</option>
                    <option>생일</option>
                    <option>OSD행사</option>
                    <option>기타(워크샾 등)</option>
                </select>


                <div className="buttons" style={{justifyContent:"center"}}>
                    <StyledButton onClick={onCancel}>취소</StyledButton>
                    <StyledButton onClick={onConfirm}>저장</StyledButton>
                </div>
            </AddNewEventBlock>
        </Fullscreen>
    );
};

export default AddNewEvent;