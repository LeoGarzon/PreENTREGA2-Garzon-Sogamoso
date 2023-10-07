import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import "./App.css"


function App() {
  return (
    
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Menu" element={<Menu/>}/>
          <Route path="Nosotros" element={<Nosotros/>}/>
          <Route path="Contacto" element={<Contacto/>}/>
          <Route path="*" element={<Error/>}/>           
        </Route>               
      </Routes>       
    </BrowserRouter>
  );
}

export default App;