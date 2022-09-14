import "./table.css"
function Body () {
    return (
        <div className="internManageBody">
            <table className="internInfoTable" border="1">
                <tr className="tableHead">
                    <th>   </th>
                    <th>1번째</th>
                    <th>2번째</th>
                    <th>3번째</th>
                    <th>4번째</th>
                </tr>
                <tr>
                    <th className="tableHead">누구</th>
                    <th>세요</th>
                    <th>거기</th>
                    <th>누구</th>
                    <th>없소</th>
                    
                </tr>
            </table>
        </div>
    )
}

export default Body;