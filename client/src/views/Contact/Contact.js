import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div>

            <div className="container">
                <div className="row contact-container">
                    <div className="col-6 pt-2 contact-card">
                        <p className="contact-name fw-bold">Feel Free To Contact Us</p>

                        <form>
                            <label>FULL NAME</label>
                            <br />
                            <input className="input-box" placeholder="Sakshi Rahangdale" type="text" />

                            <br />
                            <label>EMAIL ADDRESS</label>
                            <br />
                            <input
                                className="input-box"
                                type="email"
                                placeholder="sweetahub2023@gmail.com"
                            />

                            <br />
                            <label>MESSAGE</label>
                            <br />
                            <textarea className="textarea" placeholder="Message" />
                        </form>

                        <button className="btn btn-danger w-25">SEND</button>
                    </div>

                    <div className="col-6 map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29701.414788058628!2d79.94165204999999!3d21.481192699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680941778049!5m2!1sen!2sin"
                            height="319px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="map"
                        >
                        </iframe>
                    </div>

                    <div className="row contact-bottom">
                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-location-dot contact-bottom-icon bg-danger"></i>
                            <p className="contact-bottom-desc">
                                <b>Address: </b>Sukali Nakul, Bapera, Tumsar, Bhandara, 441915
                            </p>
                        </div>

                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-phone contact-bottom-icon bg-danger"></i>
                            <p className="contact-bottom-desc">
                                <b>Phone: </b>+91 9356580327
                            </p>
                        </div>

                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-paper-plane contact-bottom-icon bg-danger"></i>
                            <p className="contact-bottom-desc">
                                <b>Email: </b>sweetahub2023@gmail.com
                            </p>
                        </div>

                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-earth-americas contact-bottom-icon bg-danger"></i>
                            <p className="contact-bottom-desc">
                                <b>Website: </b>sweetahub2023.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;