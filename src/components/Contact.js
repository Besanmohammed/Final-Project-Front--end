import React from "react";
import { Link } from "react-router-dom";
function Contact() {
    return (
    <>
    <div className="ContactContainer">
        <h2>Contact</h2>
        <div className="PageAct">
        <Link className="LinkHomeContact" to="/">Home</Link> / Contact
    </div>

    <div className="Circle"></div>
    <div className="Lines"></div>
    </div>

    <div className="TypeContactContainer">
    <div className="ContactBox">
        <div className="icon"><i className='bx bx-map-alt'></i></div>
        <h3>Our Location</h3>
        <p>
            3481 Melrose Place, Beverly Hills <br />
            CA 90210
        </p>
        </div>

    <div className="ContactBox">
        <div className="icon"><i className="bx bx-mobile"></i></div>
        <h3>Telephone</h3>
        <p>(+1) 517 397 7100
            <br/>
            (+1) 411 315 8138
        </p>
    </div>

    <div className="ContactBox">
        <div className="icon"><i className='bx bx-envelope'></i></div>
        <h3>Send Email</h3>
        <p>info@example.com
            <br/>
            admin@example.com
        </p>
    </div>
    </div>
    <div>
    <div  className="SectionTitleCont">
        <h2>Send your message.</h2>
    </div>
    <form className="ContainerContact">
        <div className="ContainerCol">
            <div className="FormGroup Col1">
            <p>
                <label>Name</label>
                <br />
                <span>
                    <input type="text" name="text1" size={40} maxLength={400}/>
                </span>
                </p>
            </div>
            <div className="FormGroup Col2">
                <p>
                <label>Your Email</label>
                <br />
                <span>
                    <input type="email" name="text1" size={40} maxLength={400}/>
                </span>
                </p>
            </div>
            </div>
            <div className="FormGroup Col3">
                <p>
                <label>Your Subject</label>
                <br />
                <span>
                    <input type="text" name="text1" size={40} maxLength={400}/>
                </span>
                </p>
            </div>
            <div className="FormGroup Col4">
                <p>
                <label>Your Subject</label>
                <br />
                <span>
                    <input type="text" name="text1" size={40} maxLength={400}/>
                </span>
                </p>
            </div>
            <div className="FormGroup Col5">
                <p>
                <label>Your Message</label>
                <br />
                <span>
                    <textarea cols={40} rows={10} maxLength={2000}></textarea>
                </span>
                </p>
            </div>
            <div className="FormGroup Col6">
                <button className="btnContact" type="submit">
                    Send Message
                </button>
            </div>
        </form>
    </div>
    </>
);
}
export default Contact