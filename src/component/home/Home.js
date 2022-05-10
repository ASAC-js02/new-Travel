
import FooterComponent from '../footer/Footer';
import ToursComponent from '../tours/Tours';
import Header from '../header/Header';
 const travelList=require("../data/db.json")


 function HomeComponent() {
    return (
      <div>
        <Header/>
       {
        travelList.map(travel =>{
  
          return(
             <ToursComponent image={travel.image} id={travel.id} name={travel.name} info={travel.info} price={travel.price} />
          )
        })
      } 
      <FooterComponent/>
      </div>
    );
  }
  
  export default HomeComponent;