import AbstractView from './abstract.js';

//в аргумент передавать значение номера для контейнера, в зависимости от выбранной сетки (class='content{number}')
const createMainContentTemplate = () => (
  `<div class="content content-1 content--empty">
    <p class="placeholder">Content</p>
    <button type="button" class="add-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z" fill="#80CCF0"/>
      </svg>
    </button>

    <div class="choose-elem ">
      <button type="button" class="choose-elem__btn">Заголовок H1</button>
      <button type="button" class="choose-elem__btn">Заголовок H2</button>
      <button type="button" class="choose-elem__btn">Заголовок H3</button>
      <button type="button" class="choose-elem__btn">Абзац текста</button>
      <button type="button" class="choose-elem__btn">Изображение</button>
    </div>
  </div>`
);

class MainContent extends AbstractView {
  getTemplate(){
    return createMainContentTemplate();
  }
}

export default MainContent;
