import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import D_404 from "./components/D_404/D_404";
import D_About from "./components/D_About/D_About";
import D_Accommodation from "./components/D_Accommodation/D_Accommodation";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accommodation" element={<D_Accommodation />} />
        <Route path="/Accommodation/:id" element={<D_Accommodation />} />
        <Route path="/About" element={<D_About />} />
        <Route path="*" element={<D_404 />} />
      </Routes>
    </div>
  );
}

export default App;
