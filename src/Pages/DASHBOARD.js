import './DASHBOARD.css'

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
        <div className="Dashboard">
            <div className="Dashboard main">
                <div className="Calendar">캘린더</div>
                <div className="Bob-friends">
                    <p className="Bob-tag">이번 주 밥친구</p>
                    <div className="Bob-this-week">
                        <p>날짜 - 메뉴</p>
                        <p>OOO, OOO, OOO, OOO</p>
                    </div>
                    <p className="Bob-tag">다음 주 밥친구</p>
                    <div className="Bob-next-week">
                        OOO, OOO, OOO, OOO
                    </div>
                </div>
            </div>
            <div>
                <ol>
                    {makeArray()}
                    End !
                </ol>
            </div>
        </div>
    )
}

export default DASHBOARD;