import Layout from "./components/pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import CreateMod from "./components/pages/CreateMod";
import LoginReg from "./components/pages/Auth/LoginReg";
import ShopByParts from "./components/pages/MenuPages/ShopByParts";
import ShopByModel from "./components/pages/MenuPages/ShopByModel";




function App() {
  return (
    
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CreateMod"  element={<CreateMod />} />
          <Route path="LoginReg"  element={<LoginReg />} />
          <Route path="ShopByParts" element={<ShopByParts />}/>
          
        </Route>
        
      </Routes>
      </BrowserRouter>
    </>
    
    
  );
}

export default App;
