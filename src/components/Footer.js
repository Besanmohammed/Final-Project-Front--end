import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="ContainerSec1">
          <div>
            <h2>
              <i className="bx bxs-graduation" style={{ color: "#2eca7f" }}></i>
              Edusion
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vitae risus nec dui venenatis
          </p>
          <div className="ContainerSocial">
            <div>
              <h4>CONNECT WITH:</h4>
            </div>
            <div className="Social">
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-youtube"></i>
              <i className="bx bxl-pinterest-alt"></i>
            </div>
          </div>
        </div>
        <div className="FooterSectionsGroup">
          <div className="ContainerCourses">
            <div className="Courses">
              <div>
                <h2>Courses</h2>
              </div>
              <div>
                <p>Creative Writing</p>
                <p>Digital Marketing</p>
                <p>SEO Business</p>
                <p>Social Marketing</p>
                <p>Graphic Design</p>
                <p>Website Development</p>
              </div>
            </div>
          </div>
          <div className="ContainerCompany">
            <div className="Company">
              <div>
                <h2>Company</h2>
              </div>
              <div>
                <p>About Us</p>
                <p>Knowledge Base</p>
                <p>Affiliate Program</p>
                <p>Community</p>
                <p>Market API</p>
                <p>Support Team</p>
              </div>
            </div>
          </div>
          <div className="ContainerInfo">
            <div>
              <h2>Contact Info</h2>
            </div>
            <div className="Info">
              <i className="bx bx-mobile"></i>
              <p>
                Phone Number
                <br />
                +88 457 845 695
              </p>
            </div>
            <div className="Info">
              <i className="bx bx-envelope"></i>
              <p>
                Email Address
                <br />
                example#yourmail.com
              </p>
            </div>
            <div className="Info">
              <i className="bx bx-map-alt"></i>
              <p>
                Location
                <br />
                California, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ContainerSec2">
        <p  className="FooterCopyright">&copy; Edusion. All Rights Reserved</p>
        <div className="Links">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Terms & Conditions
          </Link>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Special
          </Link>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
