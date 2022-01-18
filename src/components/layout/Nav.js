import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import {Link} from 'react-router-dom';
import { MdImportContacts } from "react-icons/md";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg na vbar-light bg-danger text-white" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{position: 'relative', left: '100px', color: 'white', fontWeight: '700',  fontSize: '26px'}}>
          Contact-Book <MdImportContacts/>
        </a>
       
        <div className="collapse navbar-collapse" style={{position: 'absolute', right: '100px'}} id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <a className="nav-link" href="#">
            <Link exact to="/contact/add" style={{color: 'white', fontSize: '26px', textDecoration: 'none'}}><IoMdPersonAdd /></Link> 
              </a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  
  );
};

export default Nav;
