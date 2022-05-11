const travelList=require("../data/db.json")


function HandelClick(id){
console.log(id);
}

function ToursComponent(){

    return(
        <>
            {travelList.map(travrl =>(
          <div key={travrl.id} onClick={()=>{HandelClick(travrl.id)}}>
            
         <img src={travrl.image} alt=""/>
        <p>Travel Name:{travrl.name}</p>
        <p>------------------------</p>
        </div>

            ))}
        
        </>
    )
}

export default ToursComponent;