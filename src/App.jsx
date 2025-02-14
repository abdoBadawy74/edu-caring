import LandingPage from "./components/Website/LandingPage/LandingPage.jsx";
import Login from "./components/Website/Login";
import Home from "./components/Website/home/Home.jsx";
import Reg_Attendace from "./components/Website/register-attendance/Reg_Attendace";
import Reg_speaker from "./components/Website/register-speaker/Reg_speaker.jsx";
import Verfication from "./components/Website/verfiy-number/Verfication.jsx";
import SideBar from "./components/Website/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Community from "./components/Website/community/Community.jsx";
import Profile from "./components/Website/Profile/Profile.jsx";
import MyEvents from "./components/Website/myEvents/MyEvents";
import NotFoundPage from "./components/Website/Notfound/NotFoundPage.jsx";
import TopBar from "./components/Website/topBar/TopBar";
import Role from "./components/Website/Popups/Role.jsx";
import Event from "./components/Website/Event/Event.jsx";
import Payment from "./components/Website/payment/Payment.jsx";
import Ticket from "./components/Website/ticket/Ticket.jsx";
import SpeakerProfile from "./components/Website/speakerProfile/SpeakerProfile.jsx";
function App() {
  return (
    <>
      {/* <LandingPage></LandingPage> */}
      {/* <Login></Login> */}
      {/* <Role></Role> */}
      {/* <Reg_Attendace></Reg_Attendace> */}
      {/* <Reg_speaker></Reg_speaker> */}
      {/* <Verfication></Verfication> */}

      <div className="d-flex min-vh-100">
        <div className="col-2">
          <SideBar></SideBar>
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <TopBar></TopBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/event/:eventId" element={<Event></Event>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="community" element={<Community></Community>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="myevents" element={<MyEvents></MyEvents>}></Route>
            <Route path="payment" element={<Payment></Payment>}></Route>
            <Route path="ticket" element={<Ticket></Ticket>}></Route>
            <Route path="speakerProfile" element={<SpeakerProfile></SpeakerProfile>}></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
