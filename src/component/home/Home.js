
import FooterComponent from '../footer/Footer';
import ToursComponent from '../tours/Tours';
 const travelList=require("../data/db.json")


 function HomeComponent() {
    return (
      <div>
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