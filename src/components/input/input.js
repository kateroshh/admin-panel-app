import './input.css';

import Button from '../button/button';

/*icons*/
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as LockedIcon } from './icons/locked.svg';
import { ReactComponent as ArrowIcon } from './icons/v_arrow.svg';
/*icons*/

const STYLES = [
  "input-order_primary", //голуба обводка
  "input-order_disabled", //недоступен
  "input-order_error ", //ошибка
];
const SIZES = [
  "input_size_medium",
  "input_size_small",
  "input_size_huge",
  "input_size_more_medium",
];
const ICONS_AFTER = [
  '',
  <SearchIcon className="input-order__img-after" />,
  <LockedIcon className="input-order__img-after" />,
  <ArrowIcon className="input-order__img-after_blue" />,

];
const ICONS_BEFORE = [
  '',
  <SearchIcon className="input-order__img-before" />,
  <LockedIcon className="input-order__img-before" />,
];
const TEXT_BEFORE = [
  '',
  "input-order_with", // c 
  "input-order_on", //по
  "input-order_from", // от
  "input-order_to", // до
]

const Input = ({
  inputStyle, 
  inputSize, 
  placeholderText,
  imageAfter,
  imageBefore,
  textBefore,
  textLabel,
  buttonOn,
  readOnly,
  valueInput,
}) => {

  //Проверка параметров передаваемых в кнопку
  const checkInputSize = SIZES[inputSize]!==undefined
    ? SIZES[inputSize]
    : SIZES[0];
  
  const checkPlaceholderText = placeholderText===undefined
    ? ''
    : placeholderText;

  // const checkValueInput = valueInput===undefined
  //   ? ''
  //   : valueInput;

  const checkReadOnly = readOnly===true
    ? true
    : false;

  const checkButtonOn = (buttonOn===undefined || buttonOn===0)
    ? 0
    : 1;

  const checkImageAfter = ICONS_AFTER[imageAfter]!==undefined
    ? ICONS_AFTER[imageAfter]
    : ICONS_AFTER[0];

  const checkImageBefore = ICONS_BEFORE[imageBefore]!==undefined
    ? ICONS_BEFORE[imageBefore]
    : ICONS_BEFORE[0];

  const checkTextBefore = TEXT_BEFORE[textBefore]!==undefined
    ? TEXT_BEFORE[textBefore]
    : TEXT_BEFORE[0];

  const checkTextLabel = textLabel===undefined
    ? ''
    : <label className="input__label">{textLabel}</label>;

  let checkButtonStyle = STYLES[inputStyle]!==undefined
    ? STYLES[inputStyle]
    : STYLES[0];

  if(checkTextBefore!=='' || checkImageBefore!==''){
    checkButtonStyle = checkButtonStyle + " input-order__item_left";
  } 


  return (
      <div className={`input ${checkInputSize}`}>
        {checkTextLabel}
        <div className={`input-order  ${checkTextBefore}`}>
          {checkImageBefore}
          <input 
            className={`input-order__item ${checkButtonStyle}`}
            type="text" 
            placeholder={checkPlaceholderText}
            readOnly={checkReadOnly}
            value={valueInput} />
          {checkButtonOn===1 ? 
            <div className="input-order__button">
              <Button buttonStyle = {3} buttonIcon={7} buttonText=""/> 
            </div>
            :
            <span></span>
          }
          <div className="input-order__button">
            <Button buttonStyle = {3} buttonIcon={7} buttonText=""/> 
          </div>
          {checkImageAfter}
        </div>
      </div>
  )
}

export default Input;