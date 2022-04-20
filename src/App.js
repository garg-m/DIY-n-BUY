import Layout from "./components/pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import CreateMod from "./components/pages/CreateMod";
import LoginReg from "./components/pages/Auth/LoginReg";
import ShopByParts from "./components/pages/MenuPages/ShopByParts";
import ShopByModel from "./components/pages/MenuPages/ShopByModel";
import SendPasswordResetEmail from "./components/pages/Auth/sendPasswordResetEmail";
import ResetPassword from "./components/pages/Auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
import {SimpleDropdownMenu} from "./components/partComponents/SimpleDropdownMenu"
import Cart from "./components/pages/MenuPages/Cart";
import AdminLogin from "./components/Inventory/AdminLogin";
import AdminLoginReg from "./components/Inventory/AdminLoginReg";
import HomeAdmin from "./components/Inventory/HomeAdmin";
import LayoutAdmin from "./components/Inventory/LayoutAdmin";
import Inventory from "./components/Inventory/Inventory";
import AdminCaseForm from "./components/Inventory/Inventory Forms/AdminCaseForm";


function App() {
  return (
    
    // Just checking // again
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CreateMod"  element={<CreateMod />} />
          <Route path="LoginReg"  element={<LoginReg />} />
          <Route path="ShopByParts" element={<ShopByParts />}/>
          <Route path="ShopByModel" element={<ShopByModel />}/>
          <Route path="Cart" element={<Cart />}/>

          <Route path="sendpasswordresetemail"  element={<SendPasswordResetEmail />} />
          <Route path="reset"  element={<ResetPassword />} />
          <Route path="/dashboard"  element={<Dashboard />} />


        </Route>
        
        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        
        
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          
          <Route path="/admin/adminloginreg"  element={<AdminLoginReg />} />
         
          
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/inventory/tablecaseinv" element={<AdminCaseForm />}/>

          


        </Route>


      </Routes>
      </BrowserRouter>
    </>
    
    
  );
}

export default App;
