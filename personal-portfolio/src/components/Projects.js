import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg14 from "../assets/img/projImg14.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";
import projImg7 from "../assets/img/projImg7.png";
import projImg8 from "../assets/img/projImg8.png";
import projImg9 from "../assets/img/projImg9.png";
import projImg10 from "../assets/img/projImg10.png";
import projImg11 from "../assets/img/projImg11.png";
import projImg12 from "../assets/img/projImg12.png";
import projImg13 from "../assets/img/projImg13.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Github } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Promila Cards",
      description: "Full-Stack Django E-commerce site with payment integration",
      imgUrl: projImg1,
      
    },
    {
      title: "iChat App",
      description: "Design & Develop a Chat App with Node.js & Socket.IO.",
      imgUrl: projImg2,
    },
    {
      title: "OTP Verification",
      description: "Designing & Developing OTP Verification with Bootstrap.",
      imgUrl: projImg5,
    },
    {
      title: "Full-Stack Personal Portfolio",
      description: "Full-Stack PHP Personal Portfolio",
      imgUrl: projImg14,
    },
    {
      title: "Image Uploader Website",
      description: "Django Image Uploader Website",
      imgUrl: projImg4,
    },
    {
      title: "Music Recommendation System",
      description: "AI & ML Music-Rec-System",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Blog",
      description: "React & Bootstrap Blog",
      imgUrl: projImg6,
    },
    {
      title: "GLSports",
      description: "Design & Develop a Sports Page.",
      imgUrl: projImg10,
    },
    {
      title: "Multiband Microstrip Patch Antenna",
      description: "Wireless Antenna",
      imgUrl: projImg8,
    },
    {
      title: "Security System",
      description: "C++ Security System",
      imgUrl: projImg9,
    },
    {
      title: "P's Calculator",
      description: "Python GUI Calculator",
      imgUrl: projImg7,
    },
    {
      title: "Notepad",
      description: "Python GUI Notepad",
      imgUrl: projImg11,
    },
  ];

  const projects3 = [
    {
      title: "Parking-lot System",
      description: "System Design for Parking Lot System",
      imgUrl: projImg12,
    },
    {
      title: "Blog",
      description: "Full-Stack Blog",
      imgUrl: projImg13,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                          
                        }
                        <Col lg={12} md={6} xl={5}><button class="btn btn-light text-dark" > <a  href="https://github.com/PujaSahaGit">Github</a></button></Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <Col lg={12} md={6} xl={5}><button class="btn btn-light text-dark" > <a  href="https://github.com/PujaSahaGit">Github</a></button></Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <Col lg={12} md={6} xl={5}><button class="btn btn-light text-dark" > <a  href="https://github.com/PujaSahaGit">Github</a></button></Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
