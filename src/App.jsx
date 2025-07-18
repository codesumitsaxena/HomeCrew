import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './Components/NavbarApp';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import MostBooked from './Components/MostBooked';
import Footer from './Components/Footer';
import InsideCard from './Components/InsideCard';

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
