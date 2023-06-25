import moment from "moment";
import 'moment/dist/locale/ru';

function datesMonth(now) {
  const millisec = now.now.getTime(); // дата в миллисекундах
  const fulldate = moment(millisec).format('YYYYMMDD'); // moment - дата в формате год месяц число слитно
  const fullDateText = moment(millisec).format('DD MMMM YYYY'); // формат даты: число; месяц прописью; год. Все раздельно
  const todayDate = moment(millisec).format('D'); // день месяца без нуля спереди
  const month = fullDateText.slice(2, -4); // срез. название месяца прописью в каком-то там падеже
  const month2 = moment(millisec).format('MMMM'); // название месяца в именительном падеже
  const year = moment(millisec).format('YYYY'); // год полным числом
  const nameOfTheDayOfTheWeek = moment(millisec).format('dddd'); // день недели прописью
  const firstDayOfTheMonth = `${fulldate.slice(0, 6)}01`; // срез. в полную дату подставлено первое число месяца
  const dayWeekBeginningMonth = moment(firstDayOfTheMonth).isoWeekday(); // день недели числом
  const numberOfDaysInMonth = moment(millisec).daysInMonth(); // количество дней в месяце
  const numberOfDaysBeforeTheBeginningOfTheMonth = dayWeekBeginningMonth - 1; // количество дней до начала месяца
  const numberOfDaysUntilTheEndOfTheMonth = 42 - numberOfDaysInMonth - numberOfDaysBeforeTheBeginningOfTheMonth; // количество дней до конца месяца

  let before = numberOfDaysBeforeTheBeginningOfTheMonth;
  let after = numberOfDaysUntilTheEndOfTheMonth;
  const list = [];
  let counter = 0;

  while(before > 0) {
    let day = moment(firstDayOfTheMonth).subtract(before, 'days')
    const dayMonth = moment(day).format('D')
    list.push([dayMonth, 'ui-datepicker-other-month'])
    before -= 1;
  }
  
  while(counter < numberOfDaysInMonth) {
    let day = moment(firstDayOfTheMonth).add(counter, 'days');
    const dayMonth = moment(day).format('D');
    if ((counter + 1) === Number(todayDate)) {
      list.push([dayMonth, 'ui-datepicker-today'])
    } else {
      list.push([dayMonth, ''])
    }
    counter += 1;
  }
  
  counter = 0;
  while(counter != after) {
    let day = moment(firstDayOfTheMonth).add(counter, 'days');
    const dayMonth = moment(day).format('D')
    list.push([dayMonth, 'ui-datepicker-other-month'])
    counter += 1;
  }

  return {
    millisec,
    number: todayDate,
    month,
    month2,
    year,
    dayWeek: nameOfTheDayOfTheWeek,
    numbers: list
  };
}

export default datesMonth