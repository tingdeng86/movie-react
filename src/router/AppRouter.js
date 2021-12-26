// AppRouter

// Development Components
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageFavs from '../pages/PageFavs';
import PageIndividualMovie from '../pages/PageIndividualMovie';
import PageAbout from '../pages/PageAbout';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/favourites" element={<PageFavs />} />
              <Route path="/movie/:id" element={<PageIndividualMovie />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
