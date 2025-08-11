import { Container, Row, Col } from "react-bootstrap";
import '../components/Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col>
                        <h2>Contact</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;