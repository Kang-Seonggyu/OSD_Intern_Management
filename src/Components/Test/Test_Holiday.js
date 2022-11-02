import {useEffect, useState} from "react";

async function Test_Holiday () {
    const [Restdays, setRestdays] = useState([]);

    const API_KEY = "E6c3ACjloHKJTdlaQSkPVuUcoZEWV8zH9knCD4EFe7gqpiCWNhNwdX8laJuPFjvAouKFvRsoV%2FruPjl2kz4Yqw%3D%3D"
    let findYear = '2022';
    let findMonth = '09';
    const url = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=${findYear}&solMonth=${findMonth}&ServiceKey=${API_KEY}&_type=json`;

    const getRestDays = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    })
        .then((res) => res.json())
        .then((data) => setRestdays(data.response.body))
        .catch((error) => {
            console.error('실패',error);
        })

    console.log(Restdays)

    return(
        <div>test</div>
    )
}

export default Test_Holiday;