import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Music from "./pages/Music";
import Theatre from "./pages/Theatre";
import Literature from "./pages/Literature";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Music" element={<Music/>} />
      <Route path="/Theatre" element={<Theatre/>} />
      <Route path="/Literature" element={<Literature/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App