// 일정 분류 선택시 아래 선택란이 변경되는 부분
const DateForm = (
    pickItem,
    NoCategory,
    setNoCategory
) => {
    // 선택을 하지 않은 경우 에러 상태 'true' 로 변경
    if(pickItem === "default" || pickItem === undefined) {
        setNoCategory(true)
    }
    // 선택을 한 경우 에러 'false' 로 변경
    else {
        setNoCategory(false)
    }
    return (
        <>
                <span style={{marginTop :"10px"}}>
                    { pickItem === "birthday" ?
                        <>
                            <label htmlFor="startDate">생년월일</label>
                            <div>
                                <input type="date" disabled={NoCategory} id="startDate"></input>
                            </div>
                        </>
                        :
                        <>
                            <label htmlFor="startDate" style={{marginRight:"120px"}}>시작 일자</label>
                            <label htmlFor="endDate">종료 일자</label>
                            <input type="date" disabled={NoCategory} id="startDate"></input>
                            <input type="date" disabled={NoCategory} id="endDate"></input>
                        </>
                    }
                </span>
        </>
    )
}

export default DateForm;
