import store from 'src/store';
import { changeValueGlobal } from 'src/actions/appActions';

// triggers background animation in the App animation.scss
export default () => {
  store.dispatch(changeValueGlobal('app__threeJs app__threeJS--animationIntro', 'backgroundClassName'));
  setTimeout(() => {
    store.dispatch(changeValueGlobal('app__threeJs', 'backgroundClassName'));
  }, 2000);
};
