import React, {useState, useEffect}from "react";
import ContactCard from "./components/contactCard";
import "./styles.css";
// import "./App.css";
// import Header from '../src/components/layout/Header'

const App = () => {
  //function
  const [contacts, setContacts] = useState([]);
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

  // const alternatingColor = ['#d5d5d5', '#a9a9a9'];
  
  // const message = "Error";

  // const handleClick = () => {
  //   alert("you clicked the message")
  // }


  return (
    //jsx here
    <>
    {/* <Header /> */}
    <div >
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
          phone={contact.phone}
        />
      ))}
    </div>
    </>
  );
}

export default App;
