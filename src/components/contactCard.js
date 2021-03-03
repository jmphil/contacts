import React, { useState } from 'react'

const ContactCard = (props) => {

    const [showAge, setShowAge] = useState(false);

    console.log(props.avatar); 
	console.log(props.name);
	console.log(props.email);
	console.log(props.age);

    

    return (
        <div className="contact-card">
            <img src={props.avatar} alt="profile" />
            <div className="user-details">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
            {showAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    );
};

export default ContactCard