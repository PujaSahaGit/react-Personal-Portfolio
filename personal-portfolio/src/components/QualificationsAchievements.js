// import React from "react";
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// import "animate.css";
// import TrackVisibility from "react-on-screen";

// import BasicTelevision from "../assets/img/BASIC TELEVISION.jpeg";
// import VLSI from "../assets/img/VLSI.jpeg";
// import Ai from "../assets/img/AI with ML,DL certificate.jpg";
// import EHC from "../assets/img/ETHICAL HACKING AND CLOUD COMPUTING.jpeg";
// import Arduino from "../assets/img/Arduino.jpeg";


// export const QualificationsAchievements = () => {
//   const education = [
//     <ul key="1">
//       <div>
//         <p style={{ fontSize: "1.5rem" }}>
//           <span>
//             B.Tech, ECE -<strong>81%</strong>
//           </span>
//           <br /> Institute of Engineering and Management,
//           <br /> Kolkata <br />
//           <span>2020 - 2023</span>{" "}
//         </p>
//       </div>
//       <div>
//         <p style={{ fontSize: "1.5rem" }}>
//           <span>
//             Diploma,ETCE -<strong>74.9%</strong>
//           </span>{" "}
//           <br />
//           Birla Institute of Technology, Kolkata
//           <br />
//           <span> 2017 - 2020</span>
//         </p>
//         </div>
//         <div>
//         <p style={{ fontSize: "1.5rem" }}>
//           <span>
//             10th (Secondary) -<strong>66.3%</strong>
//           </span>{" "}
//           <br /> Sodepur Sushil Krishna Shikshayatan For Girls,
//           <br /> Kolkata
//           <br />
//           <span> 2015</span>
//         </p>
//         </div>
//     </ul>,
//   ];

//   return (
//     <section className="education" id="education">
//       <Container>
//         <Row>
//           <Col xs={12}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Qualifications & Achievements</h2>
//                   <Tab.Container id="education-tabs" defaultActiveKey="first">
//                     <Nav
//                       variant="pills"
//                       className="nav-pills mb-5 justify-content-center align-items-center"
//                       id="pills-tab"
//                     >
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Education</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Trainings</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Certificates</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content
//                       id="slideInUp"
//                       className={
//                         isVisible ? "animate__animated animate__slideInUp" : ""
//                       }
//                     >
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {education.map((educationContent, index) => (
//                             <Col key={index}>{educationContent}</Col>
//                           ))}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="second">
                        
//                           <div>
//                           <img src={BasicTelevision} alt="Image"/><span><strong>Doordarshan Kendra (PRASAR BHARATI) </strong>
//                           <br />Training on Basic Television Engineering
//                           <br />Duration: 5days</span> </div>
                          
//                           <div><img src={VLSI} alt="Image"/><span><strong>Jadavpur University </strong>
//                           <br />VLSI Design and Microelectronics Technology
//                           <br />Duration: 1month </span> </div>
                          
                          
                      
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="third">
//                       <div><img src={Ai} alt="Image"/><span><strong>AI with ML,DL certificate</strong></span></div>
//                       <div><img src={EHC} alt="Image"/><span><strong>Ethical Hacking and Cloud Computing </strong></span></div>
//                       <div><img src={Arduino} alt="Image"/><span><strong> Arduino Workshop </strong></span></div>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>

//     </section>
//   );
// };

// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css"; // Make sure to include the animate.css stylesheet
import TrackVisibility from "react-on-screen";
import BasicTelevision from "../assets/img/BASIC TELEVISION.jpeg";
import VLSI from "../assets/img/VLSI.jpeg";
import Ai from "../assets/img/AI with ML,DL certificate.jpg";
import EHC from "../assets/img/ETHICAL HACKING AND CLOUD COMPUTING.jpeg";
import Arduino from "../assets/img/Arduino.jpeg";

export const QualificationsAchievements = () => {
  const education = [
    <ul key="1">
      <div>
        <p style={{ fontSize: "1.5rem" }}>
          <span>
            B.Tech, ECE -<strong>81%</strong>
          </span>
          <br /> Institute of Engineering and Management,
          <br /> Kolkata <br />
          <span>2020 - 2023</span>{" "}
        </p>
      </div>
      <div>
        <p style={{ fontSize: "1.5rem" }}>
          <span>
            Diploma,ETCE -<strong>74.9%</strong>
          </span>{" "}
          <br />
          Birla Institute of Technology, Kolkata
          <br />
          <span> 2017 - 2020</span>
        </p>
        </div>
        <div>
        <p style={{ fontSize: "1.5rem" }}>
          <span>
            10th (Secondary) -<strong>66.3%</strong>
          </span>{" "}
          <br /> Sodepur Sushil Krishna Shikshayatan For Girls,
          <br /> Kolkata
          <br />
          <span> 2015</span>
        </p>
        </div>
    </ul>,
  ];

  const Trainings = [
    {
      title: "Doordarshan Kendra (PRASAR BHARATI) ",
      description: "Training on Basic Television Engineering Duration: 5days",
      imgUrl: BasicTelevision,
    },
    {
      title: "Jadavpur University ",
      description: "VLSI Design and Microelectronics Technology Duration: 1month",
      imgUrl: VLSI,
    },
  ];

  const Certificates = [
    {
      title: "AI with ML,DL certificate",
      description: "Udemy",
      imgUrl: Ai,
    },
    {
      title: "Ethical Hacking and Cloud Computing",
      description: "Jetking",
      imgUrl: EHC,
    },
    {
      title: "Arduino Workshop",
      description: "IEEE SPS Kolkata",
      imgUrl: Arduino,
    },
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Qualifications & Achievements</h2>
                  <Tab.Container id="education-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >

                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Trainings</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                          education.map((educationContent, index) => (
                            <Col key={index}>{educationContent}</Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="second">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          Trainings.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        {/* <Col lg={12} md={6} xl={5}><button class="btn btn-light text-dark" > <a  href="https://github.com/PujaSahaGit">Github</a></button></Col> */}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          Certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        {/* <Col lg={12} md={6} xl={5}><button class="btn btn-light text-dark" > <a  href="https://github.com/PujaSahaGit">Github</a></button></Col> */}
                      </Row>
                    </Tab.Pane>


                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
