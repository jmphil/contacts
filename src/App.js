import React, {useState, useEffect}from "react";
import ContactCard from "./components/contactCard";
import "./styles.css";
import ContactCard2 from './components/contactCard2';
// import "./App.css";
// import Header from '../src/components/layout/Header'

const App = () => {
  //function
  const [contacts, setContacts] = useState([]);
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
        {inHover && <div className="col right ">
          <ContactCard />
        </div>}
        </div>
        {/* <div className="col right ">
          <ContactCard2 
          />
        </div> */}
      </div>
    </div>
    </>
  );
}

export default App;
