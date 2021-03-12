import store from 'src/store';
import { changeValueGlobal } from 'src/actions/appActions';

export default () => {
  store.dispatch(changeValueGlobal('app__threeJs app__threeJS--animationIntro', 'backgroundClassName'));
  setTimeout(() => {
    store.dispatch(changeValueGlobal('app__threeJs', 'backgroundClassName'));
  }, 500);
};
