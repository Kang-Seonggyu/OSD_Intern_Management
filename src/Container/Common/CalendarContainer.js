import Calendar from "../../Components/Schedule/Calendar";
import {useState} from "react";
import AddNewEvent from "../../Components/Schedule/AddNewEvent";

function CalendarContainer() {

    const [NewEvent, setNewEvent] = useState(false);
    const [pickItem, setPickItem] = useState()

    const AddEventClick = () => {
        setNewEvent(true);
    };
    const CancelClick = () => {
        setNewEvent(false);
    };
    const ConfirmClick = () => {
        setNewEvent(false);
        let startDay = document.getElementById('startDate').value;
        let endDay = document.getElementById('endDate').value;

        let seletedDate = document.getElementById(`Date-${startDay}`);
        console.log(pickItem)
        let new_EventTag = document.createElement('div');
            new_EventTag.setAttribute('class',`${pickItem}`);
            new_EventTag.innerHTML = `새로운 이벤트`;


        seletedDate.appendChild(new_EventTag)

        //console.log(startDay) 형식 : 2022-10-17 과 같이 나타남

        // 여기에 저장하는 코드 입력해야함
    };
    const SelectItem = () => {
        let selectedItem = document.getElementById("EventCategory").value;
        setPickItem(selectedItem)
    }


    return (
        <div>
            <Calendar AddEventClick={AddEventClick} />
            <AddNewEvent
                visible={NewEvent}
                onCancel={CancelClick}
                onConfirm={ConfirmClick}
                pickItem={pickItem}
                SelectItem={SelectItem}
            />
        </div>
    );
}

export default CalendarContainer;