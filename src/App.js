import './App.css';
import Home from './components/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';
const travelData=require("./data/db.json");

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home data={travelData}/>}/>
      <Route path='/city/:id' element= {<TourDetails data={travelData}/>}/>
    </Routes>
    
    </>
  );
}

export default App;
