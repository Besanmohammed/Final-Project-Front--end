import React from "react";
import Woman1 from "../Images/Woman1.png";
import Woman2 from "../Images/Woman2.png";
import Accordion from "react-bootstrap/Accordion";
import Nexeon from "../Images/nexeon.png";
import Architect from "../Images/Architect.png";
import Buthers from "../Images/Buthers.png";
import Hosoren from "../Images/Hosoren.png";
import Hipesters from "../Images/Hipesters.png";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";


function AnimatedAchivment({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 100; 
    const interval = setInterval(() => 
      {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}

function About() {
  const Track = useRef(null);
  const Position = useRef(0);
  const Direction = useRef(-1); 
  const Request = useRef(null);

  useEffect(() => 
    {
    const track = Track.current;
    const WrapperWidth = track.parentElement.offsetWidth;
    const TrackWidth = track.scrollWidth;

    const speed = 0.8; 

    const animate = () => 
      {
        Position.current += speed * Direction.current;

      if (Position.current <= WrapperWidth - TrackWidth) {
        Direction.current = 1; 
      } else if (Position.current >= 0) {
        Direction.current = -1; 
      }

      track.style.transform = `translateX(${Position.current}px)`;
      Request.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(Request.current);
  }, []);

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
const Instructors = [
  {
    name: "Daniel Miller",
    role: "Logo Expert",
    courses: 3,
    students: 3,
    img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team2.jpg"
  },
  {
    name: "Masum Billah",
    role: "Developer",
    courses: 6,
    students: 5,
    img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team1.jpg"
  },
  {
    name: "Kenneth Renteria",
    role: "Marketer",
    courses: 0,
    students: 0,
    img: "	https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-vladimir-kudin-10141145.jpg"
  },
  {
    name: "Richard Hood",
    role: "UI/UX Designer",
    courses: 2,
    students: 0,
    img: "	https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-boris-hamer-16645409.jpg"
  }
];

const Features = [
  {
    icon: 'bx bx-book-open',
    title: 'Learn More Anywhere',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.'
  },
  {
    icon: 'bx bx-heart',
    title: 'Expert Instructor',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.'
  },
  {
    icon: 'bx bx-user',
    title: 'Team Management',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.'
  },
  {
    icon: 'bx bxs-show',
    title: 'Course Planing',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.'
  },
  {
    icon: 'bx bx-bulb',
    title: 'Teacher Monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.',
    bg: '#f5efe6ff'
  },
  {
    icon: 'bx bx-envelope',
    title: '24/7 Strong Support',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.'
  }
];

  const Achievements = [
  { 
    icon: 'bx bx-smile', 
    number: 854, 
    text: 'Enrolled Student', 
    color: '#2b468f' 
  },
  { 
    icon: 'bx bx-file-blank', 
    number: 521, 
    text: 'Enrolled Student', 
    color: '#eb7a35ff' 
  },
  { 
    icon: 'bx bx-support', 
    number: 163, 
    text: 'Enrolled Student', 
    color: '#5bd33dff' 
  },
  { icon: 'bx bx-user', 
    number: 93, 
    text: 'Enrolled Student', 
    color: '#ec2c75ff' 
  },
];

    return (
    <>
    <div className="ContactContainer">
      <h2>About Us</h2>
      <div className="PageAct">
        <Link className="LinkHomeContact" to="/">Home</Link> / About Us
      </div>
      <div className="Circle"></div>
      <div className="Lines"></div>
    </div>

    <div className="AboutContainer">
        
        <div className="ContainerBox">
            <h3>Quality Education</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
            </p>
        <div className="Explore" onClick={scrollToTop}>
            EXPLORE COURSES <i className="bx bx-right-arrow-alt"></i>
        </div>
        </div>

        <div className="ContainerBox">
            <h3>Experienced Teachers</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
            </p>
        <div className="Explore" onClick={scrollToTop}>
            EXPLORE COURSES <i className="bx bx-right-arrow-alt"></i>
        </div>
        </div>

        <div className="ContainerBox">
            <h3>Delicious Food</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
            </p>
        <div className="Explore" onClick={scrollToTop}>
            EXPLORE COURSES <i className="bx bx-right-arrow-alt"></i>
        </div>
        </div>
    </div>
    <div className="ContainerAll">
    <div className="TextImgContainer">
    <div className="ContainerPicture">
        <img className="ImgWoman1" src={ Woman1} alt="WomanImage" />
    </div>
    <div className="TextContainer">
        <h1>Learn New Skills To Go <span className="SpanAhead">Ahead For Your</span> Career.</h1>
        <p className="Paragraph1">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.</p>
        <p className="Paragraph2">Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</p>
        <button className="BtnAbout"><span>Explore More</span></button>
    </div>
    </div>
    
<div className="FeaturesContainer container-fluid py-5">
    <div className="QueFeatures container">
        <h4 className="mb-2 text-success fw-semibold d-flex align-items-center gap-2">
            WHY CHOOSE EDUSION <span className="LineGreen" />
        </h4>
        <h1 className="display-5 fw-bold text-primary-emphasis m-0">
        Find The <span className="BestFeatTitle">Best Features</span> Of Edusion
        </h1>
    </div>


<div className="FeaturesContainerBox container mt-4">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {Features.map((f, i) => (
          <div className="col" key={i}>
          <div className="FeatureBox h-100 p-4">
          <div className="TitleAndIcon d-flex align-items-center gap-3 mb-2">
          <div className="IconCircle" style={f.bg ? { backgroundColor: f.bg } : undefined}>
          <i className={f.icon} />
          </div>
          <h3 className="m-0">{f.title}</h3>
          </div>
          <p className="m-0">{f.text}</p>
          </div>
          </div>
        ))}
    </div>
</div>
</div>

  <div className="AchievementContainer pt-3 pt-lg-5">
    <div className="container">
    <div className="QueFeatures mb-4">
      <h4 className="d-flex align-items-center gap-2">
        SOME FUN FACT <span className="LineGreen"></span>
      </h4>
      <h1 className="fw-bold text-primary-emphasis">
        Our Great <span className="BestFeatTitle">Achievement</span>
      </h1>
    </div>

  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
      {Achievements.map((item) => (
        <div className="col d-flex" key={item.id}>
          <div className="TextIcon d-flex gap-3 align-items-center p-3">
            <i className={item.icon} style={{ color: item.color }} />
            <div className="TextContent">
              <h1><AnimatedAchivment target={item.number} /></h1>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

    <div className="InstructorsContainer my-4">
    <div className="container">
    <div className="row mb-4">
        <div className="col-12">
            <div className=" d-flex flex-column align-items-start ">
            <h4 className="TextH4">TEAM MEMBER <span className="LineGreen"></span></h4>
            <h1 className="TextH1">Our Expert <span className="BestFeatTitle">Instructors</span></h1>
        </div>
        </div>
    </div>
<div className="row">
  {Instructors.map((man, index) => (
    <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
      <div className="card InstructorCard">
        <div className="ImgMan">
          <img src={man.img} className="card-img-top" alt={man.name} />
          <div className="Over"></div>
          <div className="SocislIco">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <div className="card-body text-center">
            <h4 style={{ color: "#2eca7f" }} className="card-title mb-1">{man.name}</h4>
            <div className="NameUnderline">
              <span className="Line"></span>
              <span className="Dot"></span>
              <span className="Line"></span>
            </div>
            <p style={{ fontWeight: "600" }} className="text-muted mb-2">{man.role}</p>
            <div className="courses-students">
              <span className="Text me-3">
                <i className='bx bx-file-blank'></i> {man.courses} Courses
              </span>
              <span className="Text">
                <i className="bx bx-user"></i> {man.students} Students
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
    </div>
  </div>
</div>

    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h4 style={{color:"#2eca7f"}} className="LineGreenWrapper d-flex align-items-center gap-2">
            Frequently Asked Question <span className="LineGreen"></span>
          </h4>
          <h1 className="fw-bold text-primary-emphasis">
            General <span className="BestFeatTitle">Questions</span>
          </h1>

          <Accordion className="QueAccordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What does it take excellent author?
              </Accordion.Header>
              <Accordion.Body>
                To be an excellent author, you need consistency and quality in
                your work.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Who will view my content?</Accordion.Header>
              <Accordion.Body>
                Your content will be visible to students, learners, and the
                community on the platform.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What does it take become an author?
              </Accordion.Header>
              <Accordion.Body>
                Register on the platform, provide your details, and submit your
                content for review.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How to Change my Password easily?
              </Accordion.Header>
              <Accordion.Body>
                Go to <strong>Settings → Security</strong> and update your
                password with just a few clicks.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-md-6 text-center">
        <img
          src={Woman2} alt="FAQ illustration" className="img-fluid  w-80 w-lg-60"/>
        </div>

      </div>
  </section>
    <div className="SectionTitle">
      <div className="TitleTrusted">
          Trusted Company Around The World!
      </div>
      <div className="WrapperImgContainer">
      <div className="SlideImg" ref={Track}>
        <img src={Nexeon} alt="Nexeon" className="ImgesMove" />
        <img src={Architect} alt="Architect" className="ImgesMove" />
        <img src={Buthers} alt="Buthers" className="ImgesMove" />
        <img src={Hosoren} alt="Hosoren" className="ImgesMove" />
        <img src={Hipesters} alt="Hipesters" className="ImgesMove" />
      </div>
    </div>
  </div>
    </>
);
}
export default About;
