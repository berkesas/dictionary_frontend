import LanguageSelector from './LanguageSelector';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm(props) {
    return (
        <Stack gap={2}>
            <Stack direction="horizontal" gap={3}>
                <LanguageSelector />
                <Button variant="primary" onClick={(e) => { alert(e); }}>
                    <i className="bi bi-arrow-left-right"></i>
                </Button>{' '}
                <LanguageSelector />
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <Form.Control type="text" placeholder="search here.." />
                <Button variant="primary">
                    <Stack direction="horizontal" gap={2}>
                    Search <i className="bi bi-search"></i>
                    </Stack>
                </Button>
            </Stack>
        </Stack>
    );
}

export default SearchForm;