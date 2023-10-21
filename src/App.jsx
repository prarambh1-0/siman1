import Navbar from './components/attributes/Navbar';
import Footer from './components/attributes/Footer';
import WorkshopReport from './components/WorkshopReport/WorkshopReport';
import MegaSheetOne from './components/MegaSheet/MegaSheetOne';
import MegaSheetTwo from './components/MegaSheet/MegaSheetTwo';
import MarkAttendance from './components/MarkAttandance/MarkAttendance';
import GroupCreation from './components/GroupCreation/GroupCreation';
import Login from './components/attributes/login';
import Dashbord from './components/attributes/dashbord';
import StudentUpdate from './components/StudentDbCreation/studentupdation'
import WorkshopDetail from './components/WorkShopDetail/WorkshopDetail';
import StudentDBCreation from './components/StudentDbCreation/StudentDBCreation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/studentdb" element={<StudentDBCreation />} />
        <Route path="/markattendance" element={<MarkAttendance />} />
        <Route path="/groupcreation" element={<GroupCreation />} />
        <Route path="/studentupdation" element={<StudentUpdate />} />
        <Route path="/workshopdetail" element={<WorkshopDetail/>} />
        <Route path="/megasheet1" element={<MegaSheetOne/>} />
        <Route path="/megasheet2" element={<MegaSheetTwo/>} />
        <Route path="/workshopreport" element={<WorkshopReport/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
