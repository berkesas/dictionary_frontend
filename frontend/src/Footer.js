import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>Logo</Col>
                    <Col>Contact</Col>
                    <Col>Find us on</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;