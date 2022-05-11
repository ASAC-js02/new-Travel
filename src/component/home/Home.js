
import FooterComponent from '../footer/Footer';
import ToursComponent from '../tours/Tours';
 const travelList=require("../data/db.json")


 function HomeComponent() {
    return (
      <div>
        <ToursComponent/>
        <FooterComponent/>
      </div>
    );
  }
  
  export default HomeComponent;