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
import { BasicTable } from "./components/BasicTable";



function App() {
  return (
    
    // Just checking 
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CreateMod"  element={<CreateMod />} />
          <Route path="LoginReg"  element={<LoginReg />} />
          <Route path="ShopByParts" element={<BasicTable />}/>
          <Route path="sendpasswordresetemail"  element={<SendPasswordResetEmail />} />
          <Route path="reset"  element={<ResetPassword />} />


        </Route>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />


      </Routes>
      </BrowserRouter>
    </>
    
    
  );
}

export default App;
