import axios from "axios";
import {useState} from "react";

//const [testData, setTestData] = useState([])
const client = axios.create();


// 공휴일 API

const API_KEY = "E6c3ACjloHKJTdlaQSkPVuUcoZEWV8zH9knCD4EFe7gqpiCWNhNwdX8laJuPFjvAouKFvRsoV%2FruPjl2kz4Yqw%3D%3D";
const operation = 'getHoliDeInfo';

export const getHoliday = (solYear, solMonth) =>
    client.get(`https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/${operation}?solYear=${solYear}&solMonth=${solMonth}&ServiceKey=${API_KEY}&_type=json`);


// 우리 DB API

const OSDInternURL = 'http://172.25.4.5:2101/calendar/'

// export const getNewEvent = (CalYear, CalMonth) => {
//     console.log(`http://172.25.4.5:2101/calendar/?year=${CalYear}&month=${CalMonth}`);
//     client.get(`http://172.25.4.5:2101/calendar/?year=${CalYear}&month=${CalMonth}`)
// }
export const getNewEvent = async (CalYear, CalMonth) => {
    return client.get(OSDInternURL, {
        params : {
            year : CalYear,
            month : CalMonth
        }
    })
        .then(function (res) {
            //setTestData(res)
            console.log('성공인가?', res)

            return res.data

        })
        .catch( function (error) {
            console.log(error)
        })
}

// export const addNewEvent = ({ title, category, startDate, endDate }) => {
//     fetch()
// }
export const addNewEvent = ({ title, category, startDate, endDate }) => {
    const bodyData = {
        cal_title: title,
        cal_category: category,
        cal_start_day: startDate,
        cal_end_day: endDate,
    }
    console.log(JSON.stringify(bodyData))
    client.post(OSDInternURL,JSON.stringify(bodyData),{
        method : "POST",
        header : {
            "Content-Type": "application/json",
        },
        //body : bodyData
    })
        .then(function (res){
            console.log('새로운 이벤트 포스트 하기', res)
            return res
        })
        .catch( function (error) {
            console.log('에러가 나버렸네요...')
            console.log(error)
        })
}