function PopupInfo (event) {
    // 팝업 창 영역 설정
    const popupArea = document.getElementById("popup_detailInfo")
    // 마우스가 올려져 있는 사람의 ID 값.
    let seletedID = event.target.id

    // 마우스가 올려졌을 때 팝업창 보이게 하기.
    popupArea.style = "display : block"
    // 팝업창의 정보 수정
    popupArea.innerText = `dddd ${seletedID}`
}

export default PopupInfo;