import { Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
