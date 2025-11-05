import Banner from "./components/Banner";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Banner/>
      <Projects/>
      <Skills/>
      <Contact/>
    </BrowserRouter>
  )
}

export default App
