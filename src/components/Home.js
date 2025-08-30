import React from "react";
import Business from '../Images/Business.svg'
import DataScience from '../Images/Data Science.svg'
import DigitalProgram from '../Images/Digital Program.svg'
import Finance from '../Images/Finance.svg'
import ModernPhysics from '../Images/Modern Physics.svg'
import UiUxDesign from '../Images/UIUX Desigen.svg'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card} from "react-bootstrap";
import Woman1 from "../Images/Woman1.png";
import Course1 from "../Images/Course1.jpg";
import Course2 from "../Images/Course2.jpg";
import Course3 from "../Images/Course3.jpg";
import Course4 from "../Images/Course4.jpg";
import Course5 from "../Images/Course5.jpg";
import Course6 from "../Images/Course6.jpg";
import Platform from '../Images/Platform.png'
import Technology from '../Images/Technology.jpg';
import Programming from '../Images/Programming.jpg';
import Nexeon from "../Images/nexeon.png";
import Architect from "../Images/Architect.png";
import Buthers from "../Images/Buthers.png";
import Hosoren from "../Images/Hosoren.png";
import Hipesters from "../Images/Hipesters.png";
import { useRef, useEffect, useState } from "react";


import Video from './video'

function AnimatedAchivment({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
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




const cours = [
    { 
    image: Course1, 
    title: "Financial Security Thinking And Principles Theory", 
    lessons: 16, 
    duration: "4 hours", 
    rating: 4.5, 
    level: "All Levels",
    price: "$265",
    buttonText: "Business"
    },
    { 
    image: Course2, 
    title: "Professional Ceramic Moulding For Beginners", 
    lessons: 15, 
    duration: "4 hours", 
    rating: 5.00, 
    level: "All Levels",
    price: "$250",
    buttonText: "Finance"
    },
    { 
    image: Course3, 
    title: "Basic Fundamentals Of Interior & Graphics Design", 
    lessons: 16, 
    duration: "22 hours 30 minutes", 
    rating: 5, 
    level: "Intermediate",
    price: "Free",
    buttonText: "UI/UX Design"
    },
    { 
    image: Course4, 
    title: "WordPress For Beginners - Master WordPress", 
    lessons: 10, 
    duration: "7 hours 30 minutes", 
    rating: 4.4, 
    level: "Beginner",
    price: "Free",
    buttonText: "Digital Program"
    },
    { 
    image: Course5, 
    title: "The Complete Python Course For Beginner 2023", 
    lessons: 14, 
    duration: "18 hours 20 minutes", 
    rating: 4.6, 
    level: "Intermediate",
    price: "$300",
    buttonText: "Data Sience"
    },
    { 
    image: Course6, 
    title: "Ultimate Photoshop Training: From Beginner", 
    lessons: 14, 
    duration: "13 hours 20 minutes", 
    rating: 3.33, 
    level: "All Levels",
    price: "Free",
    buttonText: "UI/UX Design"
    },
];
function Home(){
  const Track = useRef(null);
  const Position = useRef(0);
  const Direction = useRef(-1); 
  const Request = useRef(null);
  
    useEffect(() => {
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
  
      return () => cancelAnimationFrame(React.current);
    }, []);
        const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
  const TopicsToLearn = [
  { 
    img: Business, 
    title: 'Business', 
    text: '1 Courses'
  },
  { 
    img: DataScience, 
    title: 'Data Science', 
    text: '1 Courses'
  },
  { 
    img: DigitalProgram, 
    title: 'Digital Program', 
    text: '2 Courses'
  },
  { img: Finance, 
    title: 'Finance', 
    text: '2 Courses'
  },
  { 
    img: ModernPhysics, 
    title: 'Modern Physics', 
    text: '3 Courses'
  },
  { 
    img: UiUxDesign, 
    title: 'UI/UX Design', 
    text: '3 Courses'
  },
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
  { 
    icon: 'bx bx-user', 
    number: 93, 
    text: 'Enrolled Student', 
    color: '#ec2c75ff' 
  },
];
  const rows = [];
    for (let i = 0; i < TopicsToLearn.length; i += 3) {
    rows.push(TopicsToLearn.slice(i, i + 3));
}

  const TopCourses = [
    {
      title: "Free",
      price: "$0",
      month: "/Month",
      year: "Upgrade as you need",
      features: [
        { icon: "bx bx-calendar-week", text: "Learn at your own pace" },
        { icon: "bx bx-file-blank", text: "Learn at your own pace" },
        { icon: "bx bx-bulb", text: "Learn at your own pace" },
        { icon: "bx bx-star", text: "Learn at your own pace" },
        { icon: "bx bx-bar-chart-square", text: "Learn at your own pace" },
        { icon: "bx bx-flag bx-flip-horizontal", text: "Learn at your own pace" },
      ],
    },
    {
      title: "Saver plan",
      price: "$29",
      month: "/Month",
      year: "$348 Per Year",
      features: [
        { icon: "bx bx-calendar-week", text: "Learn at your own pace" },
        { icon: "bx bx-file-blank", text: "Learn at your own pace" },
        { icon: "bx bx-bulb", text: "Learn at your own pace" },
        { icon: "bx bx-star", text: "Learn at your own pace" },
        { icon: "bx bx-bar-chart-square", text: "Learn at your own pace" },
        { icon: "bx bx-flag bx-flip-horizontal", text: "Learn at your own pace" },
      ],
    },
    {
      title: "Unlimited plan",
      price: "$49",
      month: "/Month",
      year: "$588 Per Year",
      features: [
        { icon: "bx bx-calendar-week", text: "Learn at your own pace" },
        { icon: "bx bx-file-blank", text: "Learn at your own pace" },
        { icon: "bx bx-bulb", text: "Learn at your own pace" },
        { icon: "bx bx-star", text: "Learn at your own pace" },
        { icon: "bx bx-bar-chart-square", text: "Learn at your own pace" },
        { icon: "bx bx-flag bx-flip-horizontal", text: "Learn at your own pace" },
      ],
    },
  ];
  
      useEffect(() => {
        const cards = document.querySelectorAll(".course-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("cardanim");
            }, index * 150); 
          });
      }, []);

    return(
        <>
        <section className="ContainerHome">
        <span className="Dot DotSmall"></span>
        <span className="Dot DotLarge"></span>
        <span className="DotBig"></span>

        <h1 className="TitleHome">
        Get smart <span className="highlight">opportunity for</span>{" "}
        <span className="dark">your best future</span>
        </h1>

        <p className="Subtitle">
        It is a long established fact that reader will be distracted readable
        content of a page when.
        </p>

        <div className="Search">
        <input
            type="text"
            placeholder="Search Your Course Here"
            className="InputSearch"
        />
        <button className="BtnSearch">
            Search <i className='bx bxs-paper-plane'></i>
        </button>
        </div>

        <p className="PopularTopics">
        Popular Topic: <span>Business</span>, <span>Data Science</span>,{" "}
        <span>Digital Program</span>, <span>Finance</span>
        </p>

        <span className="Smile">: )</span>
    </section>
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

    <div className="AchievementContainer pt-3 pt-lg-5">
        <div className="container">

        <div className="QueFeatures mb-4">
            <h4 className="d-flex align-items-center gap-2">
            START LEARNING <span className="LineGreen"></span>
            </h4>
            <h1 className="fw-bold text-primary-emphasis">
            Popular <span className="BestFeatTitle">Topics To Learn</span> From Today.
            </h1>
        </div>

        <div className="row g-3">
            {TopicsToLearn.map((item, idx) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
                <div className="TextIcon d-flex gap-3 align-items-center p-3 achievement-box w-100">
                <img src={item.img} alt={item.text} className="iconImage" />
                <div className='TopicsContainer'>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>

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


  <Container className="my-4">
  {[0, 1, 2].map((rowIndex) => (
    <Row key={rowIndex}>
      {cours.slice(rowIndex * 2, rowIndex * 2 + 2).map((course, index) => (
        <Col 
          xs={12} 
          sm={12}  
          lg={6} 
          key={index} 
          className="d-flex mb-4" 
        >
          <Card className="course-card flex-fill d-flex flex-column">
            <div className="d-flex flex-column flex-md-row align-items-start">
              <div className="CourseImageWrapper position-relative mb-2 mb-md-0" style={{ flex: '0 0 auto' }}>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="CourseImgWide" 
                />
                <div className="PriceCircle">{course.price}</div>
              </div>
              <Card.Body className="CourseBody flex-grow-1 d-flex flex-column justify-content-center ms-md-3">
                <Link to="/" className="CourseLink">{course.buttonText}</Link>
                <h5 style={{color:"#1a2d62", fontWeight:"700"}}>{course.title}</h5>
              </Card.Body>
            </div>
            <div className="mt-3 px-3 mb-4">
              <span className="CourseInfo"><i className='bx bx-file'></i> {course.lessons} Lessons</span>
              <span className="CourseInfo ms-3"><i className='bx bx-time-five'></i> {course.duration}</span>
              <span className="CourseInfo"><i className='bx bxs-star'></i> {course.rating}</span>
              <span className="CourseInfo ms-3"><i className='bx bx-signal-4'></i> <strong>{course.level}</strong></span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  ))}

    <div className="d-flex justify-content-center mt-4">
      <button className="BtnAllCourse">
      <span className="BtnText">View All Course</span>
    </button>
    </div>
  </Container>



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
      {Achievements.map((item, index) => (
        <div className="col d-flex" key={index}>
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
            <Video/>

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

  <div className='ContainerPlatform'>
    <div className="CircledDotPlat Left"></div>
    <div className="CircledDotPlat Right"></div>
    <div className="CircleSmall TopRight"></div>
    <div className="yellow-circle BottomLeft"></div>

  <div className="ContentPlatform">

  <div className="TextAndImgContainer">
    <div className="TextContainer">
        <h4 style={{color:"#2eca7f"}}>Best Online Learning Platform</h4>
        <h1>One Platform & Many <span className="SpanAhead">Courses</span> For You</h1>
        <p className="Paragraph1">From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>

        <div className="ContainerCheck">
        <div>
            <input type="checkbox" id="readyCheck"defaultChecked className="Checkbox"/>
        <label className='Label'> 9/10 Average Satisfaction Rate</label>
        </div>

        <div>
            <input type="checkbox" id="readyCheck"defaultChecked className="Checkbox"/>
        <label className='Label'> 9/10 Average Satisfaction Rate</label>
        </div>


        <div>
            <input type="checkbox" id="readyCheck"defaultChecked className="Checkbox"/>
        <label className='Label'> 9/10 Average Satisfaction Rate</label>
        </div>

  <div className="ContainerExplore">
    <div className="ExplOurCourse">
    <span className="allText">
      <span className="first3">EXP</span>LORE COURSES
    </span>
    <i className="bx bx-right-arrow-alt"></i>
  </div>
</div>


</div>
    </div>
    <div className="ContainerPicture">
        <img className="ImgPlatform" src={ Platform} alt="WomanImage" />
    </div>
    </div>
    </div>
    </div>

  <div className="PriceSection">
  <div className="Contaner">
    <div className="TopCourseTitle">
      <h4  style={{color:"#2eca7f", fontSize:"12px"}}  className="mb-2 fw-semibold d-flex align-items-center gap-2">
        Popular Courses <span className="LineGreen" />
      </h4>
      <h1 className="display-5 fw-bold text-primary-emphasis m-0">
        Choose Our <span className="BestFeatTitle">Top Courses</span>
      </h1>
    </div>

    <div className="PriceContainer">
      {TopCourses.map((plan, idx) => (
        <div key={idx} className="PriceCard">
          <h2 className="CardTitle">{plan.title}</h2>
          <p className="Price">
            {plan.price} 
          </p>
          <p className='Month'>
            {plan.month}
          </p>
          <p className="Year">{plan.year}</p>
          <hr />
          <ul>
            {plan.features.map((feat, i) => (
              <li key={i}>
                <span className="IconsCircl">
                  <i className={feat.icon}></i>
                </span>
                {feat.text}
              </li>
            ))}
          </ul>
          <button onClick={scrollToTop}>Start Now</button>
        </div>
      ))}
    </div>
  </div>
</div>

        <h1 className="UnderPrice">
        Subscripbe to our newsletter, We don't make any spam.
        </h1>

        <p className="ParaSearch">
        It is a long established fact that reader will be distracted readable content of a page when.
        </p>

        <div className="Search">
        <input
            type="text"
            placeholder="Search Your Course Here"
            className="InputSearch"
        />
        <button className="BtnSer">
            <i className='bx bx-send' ></i>
        </button>
        </div>

        <Container fluid  className="ContainerBlogs p-5">
            <div className="QueFeatures mb-4">
      <h4 className="d-flex align-items-center gap-2">
        News <span className="LineGreen"></span>
      </h4>
      <h1 className="fw-bold text-primary-emphasis">
        Our Latest <span className="BestFeatTitle">Blogs</span>
      </h1>
    </div>
      <Row>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Technology} />
            <Card.Body>
                <Card.Title>
                Jun 01, 2024 | <span>Technology</span>
                </Card.Title>
              <Card.Text>
                Professional Mobail Painting and Sculpting
              </Card.Text>
              <div className="ContainerExplore">
                <div className="ExplOurCourse">
                  <span className="allText">
                    <span className="first3">EXP</span>LORE COURSES
                  </span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Programming} />
            <Card.Body>
              <Card.Title>
                May 29, 2024 | <span>Programming</span>
              </Card.Title>
              <Card.Text>
                Professional Ceramic Moulding for Beginner
              </Card.Text>
              <div className="ContainerExplore">
                <div className="ExplOurCourse">
                  <span className="allText">
                    <span className="first3">EXP</span>LORE COURSES
                  </span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column gap-3 mb-4">
          <Card className="w-100" style={{ minHeight: "220px" }}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-start ">
              <Card.Title>
                Jun 01, 2024 | <span>Technology</span>
              </Card.Title>
              <Card.Text>
                Professional Mobail Painting and Sculpting
              </Card.Text>
              <div className="ContainerExplore">
                <div className="ExplOurCourse">
                  <span className="allText">
                    <span className="first3">EXP</span>LORE COURSES
                  </span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="w-100" style={{ minHeight: "220px" }}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-start ">
              <Card.Title>
                May 29, 2024 | <span>Programming</span>
              </Card.Title>
              <Card.Text>
                Professional Ceramic Moulding for Beginner
              </Card.Text>
              <div className="ContainerExplore">
                <div className="ExplOurCourse">
                  <span className="allText">
                    <span className="first3">EXP</span>LORE COURSES
                  </span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

        </>
    )
}
export default Home