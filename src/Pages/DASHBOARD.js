function DASHBOARD () {
    // 임시로 배열 만들기.
    function makeArray () {
        let num = [];
        for (let i = 0; i <30; i++) {
            num.push(<li key={i}>복제에</li>)
        }
        return num;
    }

    return (
        <div>
            <div className="fullscreen"></div>

            <ol>
                {makeArray()}
                End !
            </ol>
        </div>
    )
}

export default DASHBOARD;