// 다른 달의 경우 모두 회색으로 처리
// if (dayClass === "anotherMonth"
// ) {
//     return (
//         <TableBody id={key} key={key}>
//             <div className="date anotherMonth"> {loadedMoment.format('D')} </div>
//         </TableBody>
//     )
// }
// // 이번 달의 경우 (오늘,평일,주말) 각각 따로 처리
// else {
//     if (isHoliday) {
//         if (isEvent) {
//             // 오늘의 경우
//             if (dayClass === "Today") {
//                 return (
//                     <TableBody id={key} key={key} className="today">
//                         <div className="date">
//                             {loadedMoment.format('D')}
//                             <div className="holiday">
//                                 {isHoliday}
//                             </div>
//                             <div className={isEvent}>
//                                 {eventTitle}
//                             </div>
//                         </div>
//                     </TableBody>
//                 )
//             }
//             else {
//                 return(
//                     <TableBody id={key} key={key}>
//                         {
//                             dayClass === "week" ?
//                                 // 평일일 경우 날짜를 검정색으로
//                                 <div className="date">
//                                     {loadedMoment.format('D')}
//                                     <div className="holiday">
//                                         {isHoliday}
//                                     </div>
//                                     <div className={isEvent}>
//                                         {eventTitle}
//                                     </div>
//                                 </div>
//                                 :
//                                 // 주말일 경우 날짜를 빨간색으로
//                                 <div className="date sunday">
//                                     {loadedMoment.format('D')}
//                                     <div className="holiday">
//                                         {isHoliday}
//                                     </div>
//                                     <div className={isEvent}>
//                                         {eventTitle}
//                                     </div>
//                                 </div>
//                         }
//                     </TableBody>)
//             }
//         }
//         else {
//             // 오늘의 경우
//             if (dayClass === "Today") {
//                 return (
//                     <TableBody id={key} key={key} className="today">
//                         <div className="date">
//                             {loadedMoment.format('D')}
//                             <div className="holiday">
//                                 {isHoliday}
//                             </div>
//                         </div>
//                     </TableBody>
//                 )
//             }
//             else {
//                 return(
//                     <TableBody id={key} key={key}>
//                         {
//                             dayClass === "week" ?
//                                 // 평일일 경우 날짜를 검정색으로
//                                 <div className="date">
//                                     {loadedMoment.format('D')}
//                                     <div className="holiday">
//                                         {isHoliday}
//                                     </div>
//                                 </div>
//                                 :
//                                 // 주말일 경우 날짜를 빨간색으로
//                                 <div className="date sunday">
//                                     {loadedMoment.format('D')}
//                                     <div className="holiday">
//                                         {isHoliday}
//                                     </div>
//                                 </div>
//                         }
//                     </TableBody>)
//             }
//         }
//     }
//     else {
//         if (isEvent) {
//             if (dayClass === "Today") {
//                 return (
//                     <TableBody id={key} key={key} className="today">
//                         <div className="date">
//                             {loadedMoment.format('D')}
//                             <div className={isEvent}>
//                                 {eventTitle}
//                             </div>
//                         </div>
//                     </TableBody>
//                 )
//             }
//             else {
//                 return(
//                     <TableBody id={key} key={key}>
//                         {
//                             dayClass === "week" ?
//                                 // 평일일 경우 날짜를 검정색으로
//                                 <div className="date">
//                                     {loadedMoment.format('D')}
//                                     <div className={isEvent}>
//                                         {eventTitle}
//                                     </div>
//                                 </div>
//                                 :
//                                 // 주말일 경우 날짜를 빨간색으로
//                                 <div className="date sunday">
//                                     {loadedMoment.format('D')}
//                                     <div className={isEvent}>
//                                         {eventTitle}
//                                     </div>
//                                 </div>
//                         }
//                     </TableBody>)
//             }
//         }
//         else {
//             if (dayClass === "Today") {
//                 return (
//                     <TableBody id={key} key={key} className="today">
//                         <div className="date">
//                             {loadedMoment.format('D')}
//                         </div>
//                     </TableBody>
//                 )
//             }
//             else {
//                 return(
//                     <TableBody id={key} key={key}>
//                         {
//                             dayClass === "week" ?
//                                 // 평일일 경우 날짜를 검정색으로
//                                 <div className="date">
//                                     {loadedMoment.format('D')}
//                                 </div>
//                                 :
//                                 // 주말일 경우 날짜를 빨간색으로
//                                 <div className="date sunday">
//                                     {loadedMoment.format('D')}
//                                 </div>
//                         }
//                     </TableBody>)
//             }
//         }
//     }
//
// }

// //------------------------------- 날짜 처리하는 구간 -------------------------------//
// // (이번달, !이번달)로 나눠서 처리.
// // 이번달은 글씨를 (평일 : 검정, 주말 : 빨강) 처리.
// if(days.format('MM') === today.format('MM')){
//     if (date in event) {
//         if (date === `Date-${startDate}` && confirm) {
//             // 오늘 날짜 처리
//             if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
//                 result.push(PushTag(date, days, "Today", event[date], pickItem, eventTitle));
//             }
//             // 일요일 인 날에는 빨간글씨
//             else if (day === 0) {
//                 result.push (PushTag(date, days, "sunday", event[date], pickItem, eventTitle));
//             }
//             // 일요일 아닌 날에는 검정글씨
//             else {
//                 result.push (PushTag(date, days, "week", event[date], pickItem, eventTitle));
//             }
//         }
//         else {
//             if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
//                 result.push(PushTag(date, days, "Today", event[date], '', ''));
//             }
//             // 일요일 인 날에는 빨간글씨
//             else if (day === 0) {
//                 result.push (PushTag(date, days, "sunday", event[date], '', ''));
//             }
//             // 일요일 아닌 날에는 검정글씨
//             else {
//                 result.push (PushTag(date, days, "week", event[date], '', ''));
//             }
//         }
//
//     }
//     else {
//         if(date === `Date-${startDate}` && confirm) {
//             // 오늘 날짜 처리
//             if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
//                 result.push(PushTag(date, days, "Today", '', pickItem, eventTitle));
//             }
//             // 일요일 인 날에는 빨간글씨
//             else if (day === 0) {
//                 result.push (PushTag(date, days, "sunday", '', pickItem, eventTitle));
//             }
//             // 일요일 아닌 날에는 검정글씨
//             else {
//                 result.push (PushTag(date, days, "week", '', pickItem, eventTitle));
//             }
//         }
//         else {
//             // 오늘 날짜 처리
//             if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
//                 result.push(PushTag(date, days, "Today", '', '', ''));
//             }
//             // 일요일 인 날에는 빨간글씨
//             else if (day === 0) {
//                 result.push (PushTag(date, days, "sunday", '', '', ''));
//             }
//             // 일요일 아닌 날에는 검정글씨
//             else {
//                 result.push (PushTag(date, days, "week", '', '', ''));
//             }
//         }
//
//     }
// }
// // 이번달이 아닌 경우 모두 회색처리.
// else {
//     result.push (PushTag(date, days,"anotherMonth"));
// }