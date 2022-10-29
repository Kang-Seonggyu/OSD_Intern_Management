import moment from "moment/moment";

const PushTag = (
    key,
    loadedMoment,
    dayClass,
    isHoliday,
    isEvent,
    eventTitle
) => {
    const today = loadedMoment.format('YYYYMMDD') === moment().format('YYYYMMDD');

    return (
        <TableBody id={key} key={key} className={`${today ? 'today' : ''}`}>
            <div className={`date ${dayClass}`}>
                {loadedMoment.format('D')}
            </div>
            <div className="holiday">
                {isHoliday}
            </div>
            <div className={isEvent}>
                {eventTitle}
            </div>

        </TableBody>
    )

}