import LanguageSelector from './LanguageSelector';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './features/dictionary/searchSlice';
import { useState, useEffect } from "react";
import axios from "axios";
import DictionaryResult from './DictionaryResult';

function SearchForm(props) {
    const search = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    const [results, setResults] = useState([]);

    const searchQuery = (e) => {
        //dispatch(setSearch('yow'));
        axios.get("http://127.0.0.1:8000/api/")
            .then(function (response) {
                // handle success
                console.log(response);
                setResults(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

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
                <Form.Control type="text" placeholder="search here.." value={search}
                    onChange={(e) => { dispatch(setSearch(e.target.value)) }} />
                <Button variant="primary" onClick={(e) => { searchQuery(e) }}>
                    <Stack direction="horizontal" gap={2}>
                        Search <i className="bi bi-search"></i>
                    </Stack>
                </Button>
            </Stack>
            <Stack>
                {
                    results.map((item, i) => {
                        return (
                            <DictionaryResult key={i} data={item} />
                        )
                    })
                }
            </Stack>
        </Stack>
    );
}

export default SearchForm;