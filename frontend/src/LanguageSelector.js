import Form from 'react-bootstrap/Form';

function LanguageSelector(props) {
  return (
    <Form.Select aria-label="Language selector">
      <option value="1">English</option>
      <option value="2">Russian</option>
      <option value="3">Turkmen</option>
    </Form.Select>
  );
}

export default LanguageSelector;