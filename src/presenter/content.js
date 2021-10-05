import ContentAreaView from '../view/content-area';
import MainContentView from '../view/main-content';
import FooterContentView from '../view/footer-content';
import HeaderContentView from '../view/header-content';
import { render, RenderPosition} from '../utils';

class ContentArea {
  constructor(status){
    this._status = status;
    this._contentContainer = new ContentAreaView();
    this._mainContainer = document.querySelector('.container');
  }

  init(){
    this._renderContentContainer();
    render(this._contentContainer, new HeaderContentView(), RenderPosition.BEFOREEND);
    render(this._contentContainer, new MainContentView(), RenderPosition.BEFOREEND);
    render(this._contentContainer, new FooterContentView(), RenderPosition.BEFOREEND);
  }

  _renderContentContainer(){
    render(this._mainContainer, this._contentContainer, RenderPosition.BEFOREEND);
  }
}

export default ContentArea;
