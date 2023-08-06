import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing_page";
import ContactForm from "./component/FormContact/ContactForm";
import ContactsMap from "./component/ContactsMap";
import Navbar from "./component/Navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/map" element={<ContactsMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
