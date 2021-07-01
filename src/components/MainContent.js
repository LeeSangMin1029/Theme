import ReactPage from './react/ReactPage.js';
import AngularPage from './angular/AngularPage.js';
import VuePage from './vue/VuePage.js';

const MainContent = () => {
  return (
    <>
      <ReactPage />
      <AngularPage />
      <VuePage />
    </>
  );
};
export default MainContent;
