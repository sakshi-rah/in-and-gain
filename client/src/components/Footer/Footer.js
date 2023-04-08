import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer row'>

            <div className='row footer-row'>

                <div className='col-3 footer-col'>
                    <Link className='text-decoration-none rest-name' to='/'>Sweet Hub</Link>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='col-3 footer-col'>
                    <p>Follow Us</p>
                    <span className='socials'>
                        <a href="https://github.com/sakshi-rah" target="_blank" rel='noreferrer' className='socials-link'>GitHub</a>
                        <a href="https://www.linkedin.com/in/sakshi-rah/" target="_blank" rel='noreferrer' className='socials-link'>LinkedIn</a>
                        <a href="https://www.instagram.com/r.sakshi_07/" target="_blank" rel='noreferrer' className='socials-link'>Instagram</a>
                    </span>
                </div>

                <div className='col-3 footer-col'>
                    <p>Call Us</p>
                    <p>+91 9356580327</p>
                    <p>+91 9422132156</p>
                </div>

                <div className='col-3 footer-col'>
                    <p>Subscribe to get important Updates</p>
                    <input placeholder='Your E-MAIL' className='text-center subs-input' type='email' />
                    <input value='SUBSCRIBE' className='text-center btn btn-danger text-white'/>
                </div>

            </div>

            <div className='copyright-section row'>
                <p className='col-4'>@2023 Sakshi Rahangdale. All Rights Reserved</p>
                <p className='col-4'>Privacy Policy</p>
                <p className='col-4'>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer;
