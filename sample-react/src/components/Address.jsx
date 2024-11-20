const Address =(props)=>{
    const {street, city, country} = props.address.address;
    return(
       <div>
        <h1>Adress Component</h1>
          <p>Street:{street}</p>
          <p>city:{city}</p>
          <p>country:{country}</p>
       </div>
    )
}
export default Address;