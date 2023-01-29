
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchForm from './SearchForm';

function Homepage() {
    return (
        <Container>
            <Row>
                <Col>
                    <SearchForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Homepage;