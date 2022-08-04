import './App.css';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Commits from './Pages/Commits';
import Menu from '../src/components/Menu';
import { useState } from 'react';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import UserDetails from "./components/userDetails";


function App() {

  const[clicked,isClicked] = useState(false)
  return (

    <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="commits" element={<Commits />}/>
      <Route exact path="sign-in" element={<Login />}/>
      <Route exact path="sign-up" element={<SignUp />}/>
      <Route exact path="user-details" element={<UserDetails />}/>

    </Routes>
    </Router>

  );
}

export default App;