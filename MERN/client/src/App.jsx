import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Services } from "./pages/Services";
import { Error } from "./pages/Error";
import { Footer } from "./components/footer/Footer";
import "./App.css";
import { AdminLayout } from "./components/layouts/Admin_layout";
import { AdminContacts } from "./pages/Admin_contacts";
import { AdminUsers } from "./pages/Admin_users";
import { Edit } from "./pages/Admin_adit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/update/:id" element={<Edit />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
