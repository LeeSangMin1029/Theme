import { Route } from 'react-router-dom';
import ReactPage from './react/ReactPage';
import AngularPage from './angular/AngularPage';
import VuePage from './vue/VuePage';

const MainContent = () => {
  return (
    <>
      <Route path={['/react', '/']} component={ReactPage} exact />
      <Route path='/angular' component={AngularPage} exact />
      <Route path='/vue' component={VuePage} exact />
    </>
  );
};
export default MainContent;
