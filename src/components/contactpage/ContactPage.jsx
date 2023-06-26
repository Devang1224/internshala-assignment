import React from 'react'
import './contactpage.css'

const ContactPage = () => {

    // dummy data

 const contacts = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City, State',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      address: '456 Elm St, City, State',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      phone: '555-555-5555',
      address: '789 Oak St, City, State',
    },
    {
        id: 4,
        name: 'Chandler',
        email: 'Chandler@example.com',
        phone: '555-555-5555',
        address: '789 Oak St, City, State',
      },
      {
        id: 5,
        name: 'Ken Adams',
        email: 'kenadams@example.com',
        phone: '555-555-5555',
        address: '789 Oak St, City, State',
      },
  ];

  return (
    <div className='contact-container'>
      <h1>Contact Page</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>
            <br />
            Email: {contact.email}
            <br />
            Phone: {contact.phone}
            <br />
            Address: {contact.address}
         </li>
        ))}
      </ul>
    </div>
  );

}

export default ContactPage