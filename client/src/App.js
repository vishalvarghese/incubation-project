import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Adminlogin from"./pages/adminlogin"
import Home from './pages/Home'
import Footer from "./components/footer"
import Userdashboard from "./pages/userdashboard"
import Admindashboard from "./pages/Admindashboard"
import Rejectlist  from "./pages/rejectlist"
import Approvelist from './pages/Approvedlist'
import Progressbar from './pages/progressbarpage'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import  User from './store/usercontext'
import SlotPage from "./pages/slotPage"
function App() {
  return (
    <div>
      <User>

      <div>

      <Header/>
      </div>
  <div>
   <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admin" element={<Adminlogin/>}/>
      <Route path="/userdashboard" element={<Userdashboard/>}/>
      <Route path="/admindashboard" element={<Admindashboard/>}/>
      <Route path="/rejectlist" element={<Rejectlist/>}/>
      <Route path="/approvelist" element={<Approvelist/>}/>
      <Route path="/progressbar" element={<Progressbar/>}/>
      <Route path="/slotbooking" element={<SlotPage/>}/>
      </Routes>      
  </Router>
  </div>
    <div>
    <Footer/>
    </div>
    </User>
    </div>
  );
}

export default App;
