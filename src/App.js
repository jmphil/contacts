import React, {useState, useEffect}from "react";
import ContactCard from "./components/contactCard";
import "./styles.css";
import ContactCard2 from './components/contactCard2';
// import "./App.css";
// import Header from '../src/components/layout/Header'

const App = () => {
  //function
  const [contacts, setContacts] = useState([]);
  const [contacts2, setContacts2] = useState([]);
  const [inHover, setHover] = useState(false);
  //useEffect runs fn on every re-render
  //passing an empty array causes it to run once
  // this is called a dependency array
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => {
        setContacts2(data.results);
      });
  }, []);

  return (
    //jsx here
    <>
    {/* <Header /> */}
    <div className="container">
      <div className="row">
        <div className="col right  " >
          {contacts.map(contact => (
            <ContactCard  
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              avatar={contact.picture.large}
              name={contact.name.first + " " + contact.name.last}
              email={contact.email}
              age={contact.dob.age}
              phone={contact.phone}  
            />
          ))}
          </div>
        
        <div className="col right ">
          {contacts2.map(contacts => (
          <ContactCard2 
          avatar={contacts.picture.large}
          name={contacts.name.first + " " + contacts.name.last}
          email={contacts.email}
          age={contacts.dob.age}
          dob={contacts.dob.date}
          phone={contacts.phone} 
          location={contacts.location.country}
          />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
