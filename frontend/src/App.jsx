import { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup/SignupPage";
import JobPage from "./components/JobPage/JobPage";
import ProfileSection from "./components/ViewProfile/Profile";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import OrgProfile from "./components/OrgProfile/OrgProfile";
import UpdateOrgProfile from "./components/UpdateOrgProfile/UpdateOrgProfile";
import JobList from "./components/JobList/JobList";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import AddJob from "./components/AddJob/AddJob";
import CreateProfile from "./components/UserProfile/createProfile";
import OrgPageListing from "./components/OrgPageList/OrgPageListing";
import JobandUser from "./components/JobandUser/JobandUser";
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
          <Route path='/updateOrgProfile' element={<UpdateOrgProfile />} />
          <Route path='/jobList' element={<JobList />} />
          <Route path='/orgJobList' element={<OrgPageListing />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/createProfile' element={<CreateProfile/>} />
          <Route path='/updateProfile' element={<UpdateProfile/>} />
          <Route path='/userProfile' element={<ProfileSection />} />
          <Route path='/orgProfile' element={<OrgProfile />} />
          <Route path='/currentjobs' element={<JobPage />} />
          <Route path='/job/:id' element={<JobPage />} />
          <Route path='/addjob' element={<AddJob/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
