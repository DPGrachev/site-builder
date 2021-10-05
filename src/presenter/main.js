import GridSelectorView from '../view/grid-selector';
import { render, RenderPosition} from '../utils';
import ContentAreaPresenter from './content';

class Main {
  constructor(status){
    this._status = status;
    this._contentPresenter = new ContentAreaPresenter();
    this._mainContainer = document.querySelector('.container');
  }

  init(){
    this._renderGridSelector();
    this._contentPresenter.init();
  }

  _renderGridSelector(){
    render(this._mainContainer, new GridSelectorView(), RenderPosition.BEFOREEND);
  }
}

export default Main;
