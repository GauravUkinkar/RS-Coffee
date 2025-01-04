import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import OurCoffee from "./pages/ourCoffee/OurCoffee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 