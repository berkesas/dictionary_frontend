import Card from 'react-bootstrap/Card';

function DictionaryResult(props) {
    return (
        <Card>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Body>
                <Card.Title>{props.data.word}</Card.Title>
                {props.data.translations.map((item, i) => {
                    return (
                        <Card.Text key={i}>
                            {item}
                        </Card.Text>
                    );
                })}
            </Card.Body>
        </Card>
    );
}

export default DictionaryResult;