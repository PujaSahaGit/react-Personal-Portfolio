import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import c from "../assets/img/c.png";
import cpp from "../assets/img/c++.png";
import python from "../assets/img/python.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import bootstrap from "../assets/img/bootstrap.png";
import javascript from "../assets/img/javascript.png";
import reactjs from "../assets/img/react-js.png";
import php from "../assets/img/php.png";
import nodejs from "../assets/img/node-js.png";
import django from "../assets/img/django.png";
import sql from "../assets/img/sql.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Programming Languages</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5><img src={c} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5><img src={cpp} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5><img src={python} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5><img src={html} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5><img src={css} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5><img src={bootstrap} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5><img src={javascript} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5><img src={reactjs} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5><img src={php} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5><img src={nodejs} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5><img src={django} alt="Image"/></h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5><img src={sql} alt="Image"/></h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
