import { useParams } from "react-router-dom";

function TourDetails(props) {
     let {id} = useParams();
     let {name,info,price  } = props.data.filter(e => e.id === id );
    return (
        <>
           <h1>{name}</h1>
           <p>{info}</p>
           <h2>{price}</h2>

        </>
    );
  }
  
  export default TourDetails;