import LandingView from './view/landing';
import { render, RenderPosition} from './utils';

const mainElement = document.querySelector('main');

render(mainElement, new LandingView(), RenderPosition.BEFOREEND);
