const Contact =(props)=>{
    const {email, phon} = props.contact.contactInfo;
    return(
        <div>
            <h2>Contact Info</h2>
             <p>Email:{email}</p>
             <p>{phon}</p>
        </div>
    )
}
export default Contact;