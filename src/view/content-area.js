import AbstractView from './abstract.js';

const createContentAreaTemplate = () => (
  '<div class="layout layout--landing"></div>'
);

class ContentArea extends AbstractView {
  getTemplate(){
    return createContentAreaTemplate();
  }
}

export default ContentArea;
