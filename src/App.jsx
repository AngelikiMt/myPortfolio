import Banner from "./components/Banner";
import NavBar from "./components/Navbar";
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Banner/>
    </BrowserRouter>
  )
}

export default App
