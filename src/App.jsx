import Banner from "./components/Banner";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Banner/>
      <Projects/>
      <Skills/>
    </BrowserRouter>
  )
}

export default App
