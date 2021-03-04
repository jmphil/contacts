import React, { useState } from 'react'

const ContactCard2 = (props) => {

    const [showAge, setShowAge] = useState(false);
    // const [showEmail, setShowEmail] = useState();

    console.log(props.avatar); 
	console.log(props.name);
	console.log(props.email);
	console.log(props.age);

    

    return (
        <div className="contact-card2">
            <img className="img2" src={props.avatar} alt="profile" />
            <div className="user-details">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <p>DOB: {props.dob}</p>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
            </div>
        </div>
    );
};

export default ContactCard2