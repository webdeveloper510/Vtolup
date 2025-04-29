import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import Header from './components/header';
import Login from './Pages/login';
import ForgotPassword from './Pages/forgot-password';
import Register from './Pages/register';
import Contact from './Pages/contact';
import About from './Pages/about';
import PrivacyPolicy from './Pages/privacy-policy';
import MyFlightPlan from './Pages/myflightplan';
import ResultPage from './Pages/result';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
             <Route path="/result" element={<ResultPage />} />
             <Route path="/myflightplan" element={<MyFlightPlan />} />
             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
             <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    </Router>
  );
}

export default App;



