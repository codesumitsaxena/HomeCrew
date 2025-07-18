import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './Components/NavbarApp';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import MostBooked from './Components/MostBooked';
import Footer from './Components/Footer';
import Whoweare from './Components/Whoweare';
import InsideCard from './Components/InsideCard';
import Ourproces from './Components/Ourproces'
import Testimonials from './Components/Testimonials'

function App() {
  return (
    <Router>
      <NavbarApp />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <MostBooked />
              <Whoweare/>
              <Ourproces/>
<Testimonials/>
              <Footer />
            </>
          }
        />
        <Route path="/service/:id" element={<InsideCard />} />
      </Routes>
    </Router>
  );
}

export default App;
