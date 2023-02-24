import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgetpassword";
import MainLayout from "./components/MainLayout/MainLayout.js";
import Viewproduct from "./pages/Product/Viewproduct";
import Viewordermanagement from "./pages/Ordermanagement/Viewordermanagement";
import Viewcategory from "./pages/Category/Viewcategory";
import Viewnotificationmanagement from "./pages/Notificationmanagement/Viewnotificationmanagement";
import Viewusermanagement from "./pages/Usermanagement/Viewusermanagement";
import AddProduct from "./pages/Product/AddProduct";
import AddCategory from "./pages/Category/AddCategory";
import AddUsermanagement from "./pages/Usermanagement/AddUsermanagement";
import AddNotificationmanagement from "./pages/Notificationmanagement/AddNotificationmanagement";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
       
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="view-product" element={<Viewproduct/>}/>
        <Route path="add-product" element={<AddProduct/>}/>
        <Route path="view-ordermanagement" element={<Viewordermanagement/>}/>
        <Route path="view-category" element={<Viewcategory/>}/>
        <Route path="add-category" element={<AddCategory/>}/>
        <Route path="view-notificationmanagement" element={<Viewnotificationmanagement/>}/>
        <Route path="add-notificationmanagement" element={<AddNotificationmanagement/>}/>
        <Route path="view-usermanagement" element={<Viewusermanagement/>}/>
        <Route path="add-usermanagement" element={<AddUsermanagement/>}/>
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;