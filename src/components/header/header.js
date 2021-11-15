import Button from '../button/button';

import './header.css';

const Header = () => {
  return (
    <div className="title">
      <div><h2 className="title__text">Список заказов</h2></div>
      <Button 
        buttonStyle = {1}
        buttonIcon = {1}
        buttonText = "Светлая тема" />
    </div>
  )
}

export default Header;