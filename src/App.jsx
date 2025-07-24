import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarApp from './Components/NavbarApp';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import MostBooked from './Components/MostBooked';
import Footer from './Components/Footer';
import Whoweare from './Components/Whoweare';
import InsideCard from './Components/InsideCard';
import Ourproces from './Components/Ourproces'
import Testimonials from './Components/Testimonials'
import AgentDetail from './Components/AgentDetail';
import Login from './Components/Login'

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
        <Route path="/AgentDetail/:id" element={<AgentDetail />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
