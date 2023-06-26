import React, { useContext } from 'react'
import './content.css'
import { SelectContext } from "../../context/SelectContext"
import Guide from '../guide/Guide';
import Homepage from '../homepage/Homepage';
import ContactPage from '../contactpage/ContactPage';


const Content = () => {

const {selectItem}  = useContext(SelectContext);

let content;

switch (selectItem) {
  case 'home':
    content = <Homepage/>
    break;
  case 'contact':
    content = <ContactPage/>
    break;
  case 'guide':
    content = <Guide/>
    break;
}

return (
  <div className="content-container">
    {content}
  </div>
)
}

export default Content