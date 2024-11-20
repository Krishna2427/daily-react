function Garage(props){

    const cars = props.cars;
    return(
        <div>
            <h1>Garage</h1>
            {cars.length > 0 && <h2>
                You have  {cars.length} cars in you Garage
                </h2>}
        </div>
    )
}

const cars = ['Ford', 'BMW','AUDI'];

export default Garage;