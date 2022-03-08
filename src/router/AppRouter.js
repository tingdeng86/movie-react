// AppRouter

// Development Components
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';
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
              <Route path="/movie/:id" element={<PageSingleMovie />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
