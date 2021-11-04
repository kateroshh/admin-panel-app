import './styles/reset.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div class="title">
          <div><h2 class="title__text">Список заказов</h2></div>
          <div class="button">
            <button class="button__item button_empty-huge">
              <svg class="button__img"  viewBox="0 0 16 16" fill="#459DF5" strok="none">
              <circle cx="8" cy="8" r="4" stroke="none"/>
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
              <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
              </svg>
              <div class="button__text">Светлая тема</div>
            </button>
          </div>
        </div>
        <div class="filter">
          <div class="filter__search">
            <div class="searchbar">
              <input class="searchbar__item" type="text" placeholder="Номер заказа или ФИО" />
              <svg class="searchbar__img searchbar__img-search" viewBox="0 0 16 16" fill="none" stroke="#459DF5">
              <path d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" fill="none"/>
              </svg>
              <button class="button-search button-search_hidden">
                <svg class="button-search__img" viewBox="0 0 16 16" fill="none" stroke="#BAD8F5">
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none"/></svg> 
              </button>
              <button class="button-search button-search_hidden">
                <svg class="button-search__img" viewBox="0 0 16 16" fill="none" stroke="#BAD8F5">
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none"/></svg> 
              </button>
            </div>
            <div class="button button_filter">
              <button class="button__item button_full-huge">
                <svg  class="button__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none"/>
                </svg>
                <div class="button__text">Фильтры</div>
              </button>
            </div>
            <div class="button">
              <button class="button__item button_empty-huge">
                <div class="button__text">Сбросить фильтры</div>
              </button>
            </div>
          </div>
          <div class="button button_filter">
            <button class="button__item button_empty-huge">
            <svg class="button__img" viewBox="0 0 16 16" fill="none" stroke="#459DF5">
            <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" fill="none"/>
            <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none"/>
            <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none"/>
            <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none"/>
            </svg>
              <div class="button__text">Загрузка</div>
            </button>
          </div>
        </div>
        <div class="filter-hidden">
          <div class="filter-hidden__date">
            <div class="input-order input-order_right">
              <label class="input-order__label">Дата оформления</label>
              <div class="input-order__items input-order_from">
                <input class="input-order__item" type="text" placeholder="dd.mm.yyyy" value="20.01.2021" />
                <button class="button-input-order">
                  <svg class="button-input-order__img" viewBox="0 0 16 16" fill="none" stroke="#BAD8F5">
                  <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none"/></svg> 
                </button>
              </div>
            </div>
            <div class="input-order">
              <div class="input-order__items input-order_to">
                <input class="input-order__item" type="text" placeholder="dd.mm.yyyy" />
                <button class="button-input-order button-input-order_hidden">
                  <svg class="button-input-order__img" viewBox="0 0 16 16" fill="none" stroke="#BAD8F5">
                  <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none"/></svg> 
                </button>
              </div>
            </div>
          </div>
          <div class="filter-hidden__status">
            <div class="input-order">
              <label class="input-order__label">Статус заказа</label>
              <div class="input-order__items input-order__status">
                <input class="input-order__item input-order__item_status" type="text" value="Любой" />
                <div class="button">
                  <button class="button-input-order">
                    <svg class="button-input-order__img" viewBox="0 0 16 16" fill="#BAD8F5" stroke="none">
                    <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                    </svg>
                  </button>
                </div>
                <div class="dropdowns dropdowns_status dropdown__item-hidden">
                  <div class="dropdown">
                    <label class="dropdown__label">
                      <div class="dropdown__item">
                        <input class="dropdown__input" type="checkbox" />
                        <svg class="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                        </svg>
                      </div>
                      <div class="dropdown__text">Новый</div>
                    </label>
                  </div>
                  <div class="dropdown">
                    <label class="dropdown__label">
                      <div class="dropdown__item">
                        <input class="dropdown__input" type="checkbox" />
                        <svg class="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                        </svg>
                      </div>
                      <div class="dropdown__text">Рассчет</div>
                    </label>
                  </div>
                  <div class="dropdown">
                    <label class="dropdown__label">
                      <div class="dropdown__item">
                        <input class="dropdown__input" type="checkbox" />
                        <svg class="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                        </svg>
                      </div>
                      <div class="dropdown__text">Подтвержден</div>
                    </label>
                  </div>
                  <div class="dropdown">
                    <label class="dropdown__label">
                      <div class="dropdown__item">
                        <input class="dropdown__input" type="checkbox" />
                        <svg class="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                        </svg>
                      </div>
                      <div class="dropdown__text">Отложен</div>
                    </label>
                  </div>
                  <div class="dropdown">
                    <label class="dropdown__label">
                      <div class="dropdown__item">
                        <input class="dropdown__input" type="checkbox" />
                        <svg class="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                        </svg>
                      </div>
                      <div class="dropdown__text">Выполнен</div>
                    </label>
                  </div>
                  <div class="dropdown">
                    <label class="dropdown__label">
                      <div class="dropdown__item">
                        <input class="dropdown__input" type="checkbox" />
                        <svg class="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                        </svg>
                      </div>
                      <div class="dropdown__text">Отменен</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="filter-hidden__sum">
            <div class="input-order input-order_right">
              <label class="input-order__label">Сумма заказа</label>
              <div class="input-order__items input-order_fromsum">
                <input class="input-order__item" type="text" value="5000" />
                <button class="button-input-order">
                  <svg class="button-input-order__img" viewBox="0 0 16 16" fill="none" stroke="#BAD8F5">
                  <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none"/></svg> 
                </button>
              </div>
            </div>
            <div class="input-order">
              <div class="input-order__items input-order_tosum">
                <input class="input-order__item" type="text" />
                <button class="button-input-order button-input-order_hidden">
                  <svg class="button-input-order__img" viewBox="0 0 16 16" fill="none" stroke="#BAD8F5">
                  <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none"/></svg> 
                </button>
              </div>
            </div>
          </div>
          <div class="filter-hidden__apply">
            <div class="button">
              <button class="button__item button_empty-huge">
                <div class="button__text">Применить</div>
              </button>
            </div>
          </div>

        </div>

        <div class="table">
          <div class="table__header">
            <ul class="table__header-list">
              <li class="table__header-item">
                <div class="checkbox">
                  <label class="checkbox__label">
                    <div class="chechbox__item">
                      <input class="checkbox__input" type="checkbox" />
                      <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                      <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                      </svg>
                    </div>
                  </label>
                </div>
              </li>
              <li class="table__header-item">
                <div class="table__header-text">#</div>
              </li>
              <li class="table__header-item">
                <div class="table__header-group">
                  <div class="table__header-group-text">Дата</div>
                  <svg class="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                  <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                  </svg>
                </div>
              </li>
              <li class="table__header-item">
                <div class="table__header-group">
                  <div class="table__header-group-text">Статус</div>
                  <svg class="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                  <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                  </svg>
                </div>
              </li>
              <li class="table__header-item">
                <div class="table__header-group">
                  <div class="table__header-group-text">Позиций</div>
                  <svg class="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                  <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                  </svg>
                </div>
              </li>
              <li class="table__header-item">
                <div class="table__header-group">
                  <div class="table__header-group-text">Сумма</div>
                  <svg class="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                  <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                  </svg>
                </div>
              </li>
              <li class="table__header-item">
                <div class="table__header-text">ФИО покупателя</div>
              </li>
            </ul>
          </div>


          <div class="table__body">
            <ul class="table__body-list">
              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" checked />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1270989</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">15.02.2021, 18:00</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="4" fill="#FF8C56"></circle>
                      </svg>
                      <div class="table__body-item-text">Новый</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">6</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">101 907 <span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">Чернышов Филипп Семенович</div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">2353474</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">12.03.2021, 05:15</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="4" fill="#FF8C56"></circle>
                      </svg>
                      <div class="table__body-item-text">Новый</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">2</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">98 003<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Филиппов Степан Васильевич
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1103397</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">03.02.2021, 08:04</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="4" fill="#459DF5"></circle>
                      </svg>
                      <div class="table__body-item-text">Рассчет</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">5</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">3 800<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Тихонова Алина Давидовна
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">6924662</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">21.01.2021, 13:32</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16" fill="#0FB864" stroke="none">
                      <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                      </svg>
                      <div class="table__body-item-text table__body-item-text_done">Выполнен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">5 700<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Александрова Юлия Никитична
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" checked />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">6924662</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">21.01.2021, 13:32</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img table__body-item-img_cansel" viewBox="0 0 16 16">
                        <path d="M12.5 12.5L3.5 3.5" stroke="#000" fill="none"></path>
                        <circle cx="8" cy="8" r="6.5" stroke="#8055FF" fill="none"></circle>
                      </svg>
                      <div class="table__body-item-text table__body-item-text_cansel">Отменен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">-</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">-</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Андрей
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">2842064</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">04.01.2021, 12:12</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="4" fill="#FF8C56"></circle>
                      </svg>
                      <div class="table__body-item-text">Отложен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">20 500<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Судакова Анастасия Ильинична
                      </div>
                    </li>
                  </ul>
                </label>
              </li>
              
              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" checked />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1730071</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">17.12.2020, 22:45</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16" fill="#0FB864" stroke="none">
                      <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                      </svg>
                      <div class="table__body-item-text table__body-item-text_done">Выполнен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1 399<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Зверева Арина Николаевна
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">7987376</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">17.12.2020, 08:57</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16" fill="#0FB864" stroke="none">
                      <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                      </svg>
                      <div class="table__body-item-text table__body-item-text_done">Выполнен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">3</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">117 810<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Карташов Максим Кириллович
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1373265</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">15.11.2020, 14:26</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img" viewBox="0 0 16 16" fill="#0FB864" stroke="none">
                      <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                      </svg>
                      <div class="table__body-item-text table__body-item-text_done">Выполнен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">17 008<span>₽</span></div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        Васильев Вадим Даниилович
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

              <li class="table__body-items">
                <label class="table__body-items-lable">
                  <ul class="table__body-items-row">
                    <li class="table__body-item-row">
                      <div class="checkbox">
                        <label class="checkbox__label">
                          <div class="chechbox__item">
                            <input class="checkbox__input" type="checkbox" checked />
                            <svg class="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">1311100</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">07.11.2020, 18:52</div>
                    </li>
                    <li class="table__body-item-row">
                      <svg class="table__body-item-img table__body-item-img_cansel" viewBox="0 0 16 16">
                        <path d="M12.5 12.5L3.5 3.5" stroke="#000" fill="none"></path>
                        <circle cx="8" cy="8" r="6.5" stroke="#8055FF" fill="none"></circle>
                      </svg>
                      <div class="table__body-item-text table__body-item-text_cansel">Отменен</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">-</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">-</div>
                    </li>
                    <li class="table__body-item-row">
                      <div class="table__body-item-text">
                        София
                      </div>
                    </li>
                  </ul>
                </label>
              </li>

            </ul>

          </div>
          <div class="table__footer">
            <div class="table__footer-edit">
              <div class="table__footer-text">
                Выбрано записей: 
                <span class="table__footer-selected">4</span>
              </div>
              <div class="button button_footer">
                <button class="button__item button_full-small">
                  <svg class="button__img" viewBox="0 0 16 16" fill="none" stroke="#FFF">
                  <path d="M6 14.5H15" fill="none"/>
                  <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" fill="none"/>
                  </svg>
                  <div class="button__text">Изменить статус</div>
                </button>
              </div>
              <div class="table__footer-delete">
                <div class="dropdowns dropdowns__footer-delete dropdown__item-hidden">
                  <div class="dropdown-input">
                    <div class="dropdown-input__text">Удалить n записей?</div>
                      <div class="button">
                        <button class="button__item button_empty-small button__item_delete">
                          <div class="button__text">Удалить</div>
                        </button>
                      </div>
                      <div class="button">
                        <button class="button__item button_full-small button__item_cansel">
                          <div class="button__text">Отменить</div>
                        </button>
                      </div>
                  </div>
                </div>
                <div class="button">
                  <button class="button__item button_full-small button_full-small_delete">
                    <svg class="button__img" viewBox="0 0 16 16" fill="none" stroke="#FFF">
                    <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round"/>
                    <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round"/>
                    </svg>
                    <div class="button__text">Удалить</div>
                  </button>
                </div>
              </div>

            </div>
            <div class="table__footer-pages">
              <div class="button">
                <button class="button__item button_full-small button_footer-pages">
                  <div class="button__text">1</div>
                </button>
              </div>
              <div class="button">
                <button class="button__item button_empty-small button_footer-pages">
                  <div class="button__text">2</div>
                </button>
              </div>
              <div class="button">
                <button class="button__item button_empty-small button_footer-pages">
                  <div class="button__text">3</div>
                </button>
              </div>
              <div class="button">
                <button class="button__item button_empty-small button_footer-pages">
                  <div class="button__text">...</div>
                </button>
              </div>
              <div class="button">
                <button class="button__item button_empty-small button_footer-pages">
                  <div class="button__text">18</div>
                </button>
              </div>
              <div class="button">
                <button class="button__item button_empty-small">
                  <div class="button__text">#</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
