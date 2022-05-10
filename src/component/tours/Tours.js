

function ToursComponent(props){

    return(
        <>
        <img src={props.image} alt=""/>
        <p>The travel Id:{props.id}</p>
        <p>Travel Name:{props.name}</p>
        <p>Travel Information:{props.info}</p>
        <p>Travel Price:{props.price}</p>
        <p>------------------------</p>
        </>
    )
}

export default ToursComponent;