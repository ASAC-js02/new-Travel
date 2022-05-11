import Header from '../header/Header';
import Tours from  '../tours/Tours';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import TourDetails from '../TourDetails/TourDetails';
import data from '../data/db.json';



function Home(props) {
    return (
      <>
      <nav>
      <Header/>
      <Navbar/>

      </nav>
      <Tours   data={data}/>
      <Footer />
      </>
   );
  }
  
  export default Home;