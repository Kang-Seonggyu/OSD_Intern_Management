import {useEffect, useState} from "react";
import PopupInfo from "./PopUpInfo";
import "./table.css"
import NoPopUp from "./NoPopUp";

function InfoTable (){
    const [loading, setLoading] = useState(true)
    const [Infos, setInfos] = useState([])

    // API 에서 값 불러와서 Infos에 저장하는 함수.
    const getInfo = async () => {
        const response = await fetch(`http://172.25.4.5:2101/osd_intern_board`)
        const interninfos = await response.json();

        setInfos(interninfos.data)
        setLoading(false)
    }
    // getInfo 실행.
    useEffect(()=> {getInfo()}, [])

    const object = { a: 1, b:2, c:3};
    const nextobject = { ...object, b : "this"}
    console.log(nextobject)

    return(
        <div className="tablePlaceA">
        { loading ?
            // 로딩 중
            <div className="loadingTable">
                <p>Loading</p>
                <img src="https://cdn-icons-png.flaticon.com/512/248/248959.png" className="loadingImg" alt="..."/>
            </div>
                :

            // 로딩 완료
            <table className="internInfoTable" border="1" >
                <thead className="tableHead">
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>직무</th>
                        <th>나이</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                { Infos && Infos.map((infoData) =>
                    <tr key={infoData.intern_number} className="addedInfo" onMouseEnter={PopupInfo} onMouseOut={NoPopUp}>
                        <th id={infoData.intern_number}>{infoData.intern_number}</th>
                        <th id={infoData.intern_number}>{infoData.intern_name}</th>
                        <th id={infoData.intern_number}>{infoData.intern_duty}</th>
                        <th id={infoData.intern_number}>{infoData.intern_age}</th>
                        <th id={infoData.intern_number}>{infoData.intern_phone_number}</th>
                    </tr>
                )}
                </tbody>
            </table>

        }
            <div id="popup_detailInfo">
                popUp INFO
            </div>
        </div>
    )
}

export default InfoTable;