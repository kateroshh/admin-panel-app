import './calendar.css';

const TEXT_BEFORE = [
  '',
  "calendar-order_with", // c 
  "calendar-order_on", //по
]

const Calendar = ({
  valueInput = null,
  textBefore = 0,
  textLabel = '',
}) => {

  const checkTextBefore = TEXT_BEFORE[textBefore]!==undefined
    ? TEXT_BEFORE[textBefore]
    : TEXT_BEFORE[0];
  
  const checkTextLabel = textLabel===undefined
  ? ''
  : <label className="calendar__label">{textLabel}</label>;

  return (
      <div className={'calendar calendar_size_medium'}>
        {checkTextLabel}
        <div className={checkTextBefore}>
          <input 
            className={'calendar-order__item calendar-order_primary'}
            type="date"
            value={valueInput} />
        </div>
      </div>
  )
}

export default Calendar;