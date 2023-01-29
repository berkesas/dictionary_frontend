import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
// import { fetchAPI, submitAPI } from './api';
// import { useReducer, useEffect } from "react";

function App() {
  // const navigate = useNavigate();

  // const initializeTimes = () => {
  //   // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  //   return fetchAPI(new Date())
  // }

  // useEffect(() => {
  //   initializeTimes()
  // });

  // const updateTimes = (state, action) => {
  //   // return ['17:00', '18:00', '19:00'];
  //   // console.log(state);
  //   return fetchAPI(new Date(action.date))
  // }

  // const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // const submitForm = (formData) => {
  //   if (submitAPI(formData)) {
  //     navigate('/confirmedbooking');
  //   }
  // }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
