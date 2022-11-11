import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfoud from "./component/pages/Notfoud";
import AddUser from "./component/pages/users/AddUser";
import EditUser from "./component/pages/users/EditUser";
import User from "./component/pages/users/User";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/users/edit/:id" element={<EditUser />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route exact element={<Notfoud />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
