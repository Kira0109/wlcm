import React from 'react';
import {Link} from 'react-router-dom';
import "./Footer.css";
import {FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";


const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, reprehenderit!</p>
                <span className='text'>&copy; {date.getFullYear().toString()} KolnHub. Theme</span>
                <div className="grid footer-content text-center">
                <p className='text'>
                    <h4>CONTACT US:</h4>
                    <p>© 2023 Kylix</p>
                    <p >Phone: (+216) 21568282</p>

                       
                        <a href="mailto:gitieee@gmail.com">
                            <span className="lnr lnr-envelope"></span>
                            <span className="text">
                                <span className="text">Khalilcheguenni@gmail.com</span>
                            </span>
                        </a>
                    
                        <ul className='navbar-social flex'>
                            <li className='text-white'>
                                <Link to = "" className='flex flex-center'><FaFacebook /></Link>
                            </li>
                            <li className='text-white'>
                                <Link to = "" className='flex flex-center'><FaInstagram /></Link>
                            </li>
                            <li className='text-white'>
                                <Link to = "" className='flex flex-center'><FaTwitter /></Link>
                            </li>
                        </ul>
                  
                    </p>
                </div>
            </div>
            
        </div>
        
        
    </footer>
  )
}

export default Footer