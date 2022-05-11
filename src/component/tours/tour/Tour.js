import React from 'react';

function Tour(props) { 
    
    return (
      <>
      <h1>{props.name}</h1>
      <img src={props.image} />
      
      
      </>
   );
  }
  
  export default Tour;