
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './component/home/Home';
import TourDetails from './component/TourDetails/TourDetails';
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tour/:id" element={<TourDetails />} />
      </Routes>
     <Home/>
    </>
  );
}

export default App;
