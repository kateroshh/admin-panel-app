import './checkbox.css';

const Checkbox = ({
  value,
  nameCheckbox,

}) => {

  return (
    <div className="checkbox">
        <div className="chechbox__item">
          <label className="chechbox__label">
            <input className="checkbox__input" type="checkbox"/>
            <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
            </svg>
          </label>
        </div>
    </div>
  )
}

export default Checkbox;