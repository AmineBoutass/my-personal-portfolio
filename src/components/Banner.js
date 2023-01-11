import { Container, Row, col } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons";
export const Banner = () => {
    return(
         <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi i m webdecoded'}<span className="wrap">web developper</span></h1>
                        <p> lorem paragraphe </p>
                        <button onClick={() => console.log('connect') }>let's cpnnect</button>
                    </col>

                </Row>
            </Container>
         </section>

    )
}