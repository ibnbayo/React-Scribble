


function Contact(props) {
    return(
        <div className = "contact-card">
            {props.contact.openSpots===0? <div className="open-spots">UNAVAILABLE</div>: ''} 
        <img src= {props.contact.img} alt={props.contact.alt}/>
        <h3>{props.contact.title}</h3>
        <div className = "info-group">
            <p>{props.contact.number}</p>
        </div>
        <div className = "info-group">
            <p>{props.contact.email}</p>
        </div>
        </div>
    )
}

export default Contact