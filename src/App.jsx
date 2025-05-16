import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hotels from "./pages/Hotels";
import Contact from "./pages/contact/contact";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Layout from "./components/Layout/Layout";
import Destinations from "./pages/destinations";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/bbtravel/" element={<Home />} />
          <Route path="/bbtravel/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bbtravel/destinations" element={<Destinations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
