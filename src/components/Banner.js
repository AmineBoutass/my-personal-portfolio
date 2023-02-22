import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [LoopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", " Web Designer", "UI/UX Designer"];
  const [index, setIndex] = useState(1);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = LoopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIsDeleting(period);
    } else if (!isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(LoopNum + 1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Amine`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    and I am a web developer. I specialize in building and
                    maintaining websites using various programming languages and
                    tools. I have experience in the industry and have developed
                    a diverse skillset in front-end and back-end development.
                    Some of my key skills include proficiency in HTML, CSS,
                    JavaScript, and various content management systems (CMS)
                    such as WordPress, Drupal, and Joomla. I also have
                    experience with server-side programming languages such as
                    PHP and Python, as well as frameworks such as Laravel and
                    Django. I am familiar with databases such as MySQL and
                    MongoDB and have experience working with APIs. I am
                    passionate about creating websites that are visually
                    appealing, user-friendly, and optimized for performance. I
                    am always eager to learn new technologies and techniques to
                    stay up-to-date with the latest trends in the industry. In
                    addition to my technical skills, I am a strong communicator
                    and work well in a team environment. Iam always open to
                    feedback and enjoy collaborating with designers, project
                    managers, and other developers to bring projects to life. If
                    you have any questions or would like to discuss a potential
                    project, please feel free to contact me. Thank you for
                    considering me as your web developer.
                  </p>
                  {/*<button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
