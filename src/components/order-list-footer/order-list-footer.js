import Button from '../button/button';

import './order-list-footer.css';

const OrderListFooter = () => {
  return (
    <div class="table__footer">
      <div class="table__footer-edit">
        <div class="table__footer-text">
          Выбрано записей: 
          <span class="table__footer-selected">4</span>
        </div>
        <div class="button_footer">
          <Button buttonText="Изменить статус" buttonIcon = {3}/>
        </div>
        <div class="table__footer-delete">
          <div class="dropdowns__footer dropdowns__footer-delete">
            <div class="dropdowns__footer__text">Удалить n записей?</div>
              <div className="dropdowns__footer_button">
                <Button buttonText="Удалить" buttonStyle={1}/>
              </div>
              <Button buttonText="Отмена" />
          </div>
          <Button buttonText="Удалить" buttonIcon = {4} buttonStyle={2}/>
        </div>

      </div>
      <div class="table__footer-pages">
        <Button buttonText="1" />
        <Button buttonText="2" buttonStyle={1} />
        <Button buttonText="3" buttonStyle={1}  />
        <Button buttonText="..." buttonStyle={1}  />
        <Button buttonText="18" buttonStyle={1}  />
        <Button buttonText="#" buttonStyle={1}  />
      </div>
    </div>
  )
}

export default OrderListFooter;