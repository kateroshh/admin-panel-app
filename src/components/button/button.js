import './button.css';

/*icons*/
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as FilterIcon } from './icons/filter.svg';
import { ReactComponent as PencilIcon } from './icons/pencil.svg';
import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as RefreshIcon } from './icons/refresh.svg';
import { ReactComponent as CheckmarkIcon } from './icons/checkmark.svg';
import { ReactComponent as XmediumIcon } from './icons/x-medium.svg';
/*icons*/

const STYLES = [
  "button_primary", //голуба кнопка
  "button_secondary", //прозрачная
  "button_third", //красная
  "button_clear", //крестик внутри input
];
const SIZES = [
  "button_size_small",
  "button_size_huge",
];

const ICONS = [
  <span></span>,
  <SunIcon className="button__icon"/>,
  <FilterIcon className="button__icon"/>,
  <PencilIcon className="button__icon"/>,
  <BinIcon className="button__icon"/>,
  <RefreshIcon className="button__icon"/>,
  <CheckmarkIcon className="button__icon"/>,
  <XmediumIcon className="button__icon"/>,
];

const Button = ({
  buttonStyle, 
  buttonSize, 
  buttonIcon, 
  buttonText,
  onClick
}) => {

  //Проверка параметров передаваемых в кнопку
  const checkButtonIcon = ICONS[buttonIcon]!==undefined
    ? ICONS[buttonIcon]
    : ICONS[0]; 

  const checkButtonText = buttonText === undefined
    ? 'Кнопка'
    : buttonText; 
  
  let checkButtonStyle = STYLES[buttonStyle]!==undefined
    ? STYLES[buttonStyle]
    : STYLES[0];

  const checkButtonSize = SIZES[buttonSize]!==undefined
    ? SIZES[buttonSize] 
    : SIZES[0]; 

  //Обнуляю padding у кнопки для варианта с одной иконкой
  if(checkButtonText==='' && checkButtonIcon!==<span></span>){
    if(checkButtonSize==="button_size_small"){
      checkButtonStyle = checkButtonStyle + ' button_size_small_icon';
    } else {
      checkButtonStyle = checkButtonStyle + ' button_size_huge_icon';
    } 
  }

  return (
      <div>
        <button style={{cursor: "pointer"}}
          onClick={onClick} 
          className={`button ${checkButtonStyle} ${checkButtonSize}`}>
            {checkButtonIcon}
            {checkButtonText!==''
              ? <div className="button__text">{checkButtonText}</div>
              : <span></span>}
        </button>
      </div>
  )
}

export default Button;