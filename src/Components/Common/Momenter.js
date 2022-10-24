function Momenter ( {year, month, yearIncreaseButton, yearDecreaseButton, monthIncreaseButton, monthDecreaseButton}) {
    return (
        <span>
            <button onClick={yearDecreaseButton} >«</button>
            <button onClick={monthDecreaseButton}>‹</button>
            <h1 style={{ display : "inline-block"}}>{year}년 {month}월</h1>
            <button onClick={monthIncreaseButton}>›</button>
            <button onClick={yearIncreaseButton}>»</button>
        </span>
    )
}

export default Momenter;