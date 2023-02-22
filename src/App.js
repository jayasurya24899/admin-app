
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login  from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import MainLayout from './components/MainLayout/MainLayout.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<MainLayout/>}/>
          <Route path="/forgetpassword" element={<Forgetpassword/>}/>
          <Route path="/resetpassword" element={<Resetpassword/>}/>
          <Route index element={<Dashboard/>}/>
        </Routes>
        </Router>
  
    </div>
  );
}

export default App;
