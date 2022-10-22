import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Adminlogin from"./pages/adminlogin"
import Home from './pages/Home'
import Footer from "./components/footer"
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
function App() {
  return (
    <div>
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
      </Routes>      
  </Router>
  </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
