import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const  [ LoopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Web Developer", " Web Designer", "UI/UX Designer" ];
    const [ text, setText ] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return() => { clearInterval(ticker)};
    }, [text] )

    const tick = () => {
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIsDeleting(period);
        } else if(!isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(LoopNum + 1);
            setDelta(500);
        }
    }

    return(
         <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi i m webdecoded'}<span className="wrap">[text]</span></h1>
                        <p> lorem paragraphe </p>
                        <button onClick={() => console.log('connect') }> let's connect <ArrowRightCircle size ={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>

                </Row>
            </Container>
         </section>

    )
}