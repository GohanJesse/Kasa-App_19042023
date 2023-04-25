import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Accommodation from "./components/Accommodation/Accommodation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accommodation" element={<Accommodation />} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
