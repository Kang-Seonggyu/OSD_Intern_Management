import {useState, useEffect} from "react";

//// API  //////////////////////////////////////////////////////////////////////////
//  필수 입력값들
// API_KEY : 인증키값
// solYear & solMonth : 검색할 연도와 월
// 오퍼레이션 : { getHoliDeInfo : 국경일 , getRestDeInfo : 공휴일,
//         getAnniversaryInfo : 기념일 , get24DivisionsInfo : 24절기, getSundryDayInfo : 잡절 ]
//
//  참고
// 배포 페이지 : https://www.data.go.kr/dataset/15012690/openapi.do
// 예시 : https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=2019&solMonth=05&ServiceKey=E6c3ACjloHKJTdlaQSkPVuUcoZEWV8zH9knCD4EFe7gqpiCWNhNwdX8laJuPFjvAouKFvRsoV%2FruPjl2kz4Yqw%3D%3D&_type=json
//
////////////////////////////////////////////////////////////////////////////////////////////////

function HolidayList () {
    const [loading, setLoading] = useState(true);
    const [Holidays, setHolidays] = useState([]);

    const API_KEY = "E6c3ACjloHKJTdlaQSkPVuUcoZEWV8zH9knCD4EFe7gqpiCWNhNwdX8laJuPFjvAouKFvRsoV%2FruPjl2kz4Yqw%3D%3D"

    let solYear = '2022';
    let solMonth = '09';
    const operation = 'getHoliDeInfo';

    let url = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/${operation}?solYear=${solYear}&solMonth=${solMonth}&ServiceKey=${API_KEY}&_type=json`;

    const getHolidays = async() => {
        let res = await fetch(url);
        let json = await res.json();
        //console.log("res :" ,res ,"json :", json)

        setHolidays(json.response.body.items.item)
        setLoading(false);
    }

    useEffect(() => {
        getHolidays()
    }, [])


    console.log(Holidays)

    return (
        loading?
            <div>
                로딩중!
            </div>
            :
            <div>
                {
                    Holidays && Holidays.map((day) => (
                    <div key={day.locdate}>
                        {day.dateName}
                        <span> {(day.locdate).toString().substring(0,4) }</span>
                        <span>/ {day.locdate.toString().substring(4,6).padStart(2,0)}</span>
                        <span>/ {day.locdate.toString().substring(6,8).padStart(2,0)}</span>
                    </div>
                ))}
            </div>
    )

}

export default HolidayList;