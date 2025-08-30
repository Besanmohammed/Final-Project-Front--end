import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course1 from "../Images/Course1.jpg";
import Course2 from "../Images/Course2.jpg";
import Course3 from "../Images/Course3.jpg";
import Course4 from "../Images/Course4.jpg";
import Course5 from "../Images/Course5.jpg";
import Course6 from "../Images/Course6.jpg";
import Course7 from "../Images/Course7.jpg";
import Course8 from "../Images/Course8.jpg";
import Course9 from "../Images/Course9.jpg";


const courses = [
  { id: 1, 
    image: Course1, 
    title: "Financial Security Thinking And Principles Theory", 
    date: "2025-05-01", 
    lessons: 16, 
    duration: "4 hours", 
    rating: 4.5, 
    level: "All Levels", 
    price: "$265", 
    basetitle: "Business" 
  },
  { id: 2, 
    image: Course2, 
    title: "Professional Ceramic Moulding For Beginners", 
    date: "2025-06-15", 
    lessons: 15, 
    duration: "4 hours", 
    rating: 5.0, 
    level: "All Levels", 
    price: "$250", 
    basetitle: "Finance" 
  },
  { id: 3, 
    image: Course3, 
    title: "Basic Fundamentals Of Interior & Graphics Design", 
    date: "2025-04-01", 
    lessons: 16, 
    duration: "22 hours 30 minutes", 
    rating: 5.0, 
    level: "Intermediate", 
    price: "Free", 
    basetitle: "UI/UX Design" 
  },
  { id: 4, 
    image: Course4, 
    title: "WordPress For Beginners - Master WordPress", 
    date: "2025-04-10", 
    lessons: 10, 
    duration: "7 hours 30 minutes", 
    rating: 4.4, 
    level: "Beginner", 
    price: "Free", 
    basetitle: "Digital Program" 
  },
  { id: 5, 
    image: Course5, 
    title: "The Complete Python Course For Beginner 2023", 
    date: "2025-03-20", 
    lessons: 14, 
    duration: "18 hours 20 minutes",
    rating: 4.6, 
    level: "Intermediate", 
    price: "$300", 
    basetitle: "Data Science" 
  },
  { id: 6, 
    image: Course6, 
    title: "Ultimate Photoshop Training: From Beginner", 
    date: "2025-02-10", 
    lessons: 14, 
    duration: "13 hours 20 minutes", 
    rating: 3.33, 
    level: "All Levels", 
    price: "Free", 
    basetitle: "UI/UX Design" 
  },
  { id: 7, 
    image: Course7, 
    title: "User Experience Design Essentials Adobe Xd UI UX Design", 
    date: "2025-01-05", 
    lessons: 15, 
    duration: "10 hours 40 minutes", 
    rating: 4.5, 
    level: "Beginner", 
    price: "Free", 
    basetitle: "Modern Physics" 
  },
  { id: 8, 
    image: Course8, 
    title: "Basic Fundamentals Of Interior & Graphics Design", 
    date: "2025-01-25", 
    lessons: 16, 
    duration: "15 hours 20 minutes", 
    rating: 5.0, 
    level: "Beginner", 
    price: "$180", 
    basetitle: "Modern Physics" 
  },
  { id: 9, 
    image: Course9, 
    title: "Sales Training: Practical Sales Techniques", 
    date: "2025-06-01", 
    lessons: 14, 
    duration: "2 hours 20 minutes", 
    rating: 4.0, 
    level: "Expert", 
    price: "Free", 
    basetitle: "Finance", 
    extraButtons: ["Modern Physics"] 
  }
];

const options = [
  { label: "Release Date (newest first)", 
    value: "newest" 
  },
  { label: "Release Date (oldest first)", 
    value: "oldest" 
  },
  { label: "Course Title (a-z)", 
    value: "a-z" 
  },
  { label: "Course Title (z-a)",
    value: "z-a" 
  }
];

export default function Courses() {
  const scroToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [CoursesSorte, setCourseSorted] = useState(courses);
  const [OptionSelect, setOptionSelect] = useState(options[0]);

  const safeDate = (d) => (d ? Date.parse(d) : 0);

  const handleSort = (option) => {
    const sortedValu = [...courses].sort((a, b) => {
      switch (option.value) {
        case "newest":
          return safeDate(b.date) - safeDate(a.date);
        case "oldest":
          return safeDate(a.date) - safeDate(b.date);
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    }
  );
    setOptionSelect(option);
    setCourseSorted(sortedValu);
  };
  return (
    <>
      <div className="ContactContainer">
        <h2>Courses</h2>
      <div className="PageAct">
        <Link className="LinkHomeContact" to="/">Home</Link> / Courses
      </div>

      <div className="Circle"></div>
      <div className="Lines"></div>
      </div>

      <Container className="my-4">
        <div className="d-flex justify-content-end mb-4">
          <Dropdown>
            <Dropdown.Toggle style={{ backgroundColor: "white", color: "black", border:"1px solid #c7c3c3ff"}}>
              {OptionSelect.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {options.map((opt) => (
                <Dropdown.Item key={opt.value} onClick={() => handleSort(opt)}>
                  {opt.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row>
          {CoursesSorte.map((course) => (
            <Col key={course.id} lg={4} md={6} sm={12} className="mb-4 d-flex">
              <Card className="Card flex-fill">
                <img src={course.image} alt={course.title} className="ImagContainer" />
                <div className="DivPrice">{course.price}</div>

                <Card.Body className="CardBody">
                  <div>
                    <Button className="CoursBtn">{course.basetitle}</Button>
                    {Array.isArray(course.extraButtons) &&
                      course.extraButtons.map((b, i) => (
                        <Button key={i} className="CoursBtn ms-2">{b}</Button>
                      ))}
                  </div>

                  <h5 className="TitleHead">
                    <Link onClick={scroToTop} className="LinkTitl">
                      {course.title}
                    </Link>
                  </h5>

                <div className="CoursInfo">
                  <div className="InfoRow">
                    <span className="InfoItem"><i className='bx bx-file'></i> {course.lessons} Lessons</span>
                    <span className="InfoItem"><i className='bx bx-time-five'></i> {course.duration}</span>
                  </div>

                  <div className="InfoRow">
                    <span className="InfoItem"><i className='bx bxs-star'></i> {course.rating}</span>
                    <span className="InfoItem"><i className='bx bx-signal-4'></i><strong>{course.level}</strong></span>
                  </div>
                </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}