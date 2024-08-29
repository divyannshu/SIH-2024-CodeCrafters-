import { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup/SignupPage";
import JobPage from "./components/JobPage/JobPage";
import UpdateProfile from "./components/Profile/UpdateProfile";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import JobList from "./components/JobList/JobList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userhome' element={<Home />} />
          <Route path='/orghome' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/job' element={<JobPage />} />
          <Route path='/UpdateProfile' element={<UpdateProfile />} />
          <Route path='/jobList' element={<JobList />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/currentjobs' element={<JobPage />} />
          <Route path='/job/:id' element={<JobPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/UpdateUserProfile' element={<UpdateProfile />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
