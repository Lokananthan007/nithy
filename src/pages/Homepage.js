import '../css/Homepage.css';
import { Container, Row, Col } from 'react-bootstrap';

function Homepage() {
    return (
        <div id="home">
            <Container fluid>
                <Row className="row mb-auto mt-5">
                    <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center text-center">
                        <h3>full-stack developer</h3>
                        <h1>lokananthan</h1>
                        <p>I am a full-stack web and software developer, currently working as an intern in India.</p>                        </Col>
                    <Col xs={12} md={6} >

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;
