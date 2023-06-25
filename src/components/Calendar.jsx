import datesMonth from './datesMonth';

function Calendar(now) {
  const data = datesMonth(now);
  const week1 = data.numbers.splice(0, 7);
  const week2 = data.numbers.splice(0, 7);
  const week3 = data.numbers.splice(0, 7);
  const week4 = data.numbers.splice(0, 7);
  const week5 = data.numbers.splice(0, 7);
  const week6 = data.numbers.splice(0, 7);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{data.dayWeek}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{data.number}</div>
          <div className="ui-datepicker-material-month">{data.month}</div>
          <div className="ui-datepicker-material-year">{data.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{data.month2}</span>&nbsp;<span className="ui-datepicker-year">{data.year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              {week1.map(el => <td key={el} className={el[1]}>{el[0]}</td>)}
            </tr>
            <tr>
              {week2.map(el => <td key={el} className={el[1]}>{el[0]}</td>)}
            </tr>
            <tr>
              {week3.map(el => <td key={el} className={el[1]}>{el[0]}</td>)}
            </tr>
            <tr>
              {week4.map(el => <td key={el} className={el[1]}>{el[0]}</td>)}
            </tr>
            <tr>
              {week5.map(el => <td key={el} className={el[1]}>{el[0]}</td>)}
            </tr>
            <tr>
              {week6.map(el => <td key={el} className={el[1]}>{el[0]}</td>)}
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
