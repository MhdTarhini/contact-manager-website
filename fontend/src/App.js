import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing_page";
import ContactForm from "./component/FormContact/ContactForm";
import Navbar from "./component/Navbar/navbar";
import ContactMap from "./component/ContactsMap";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add/:id" element={<ContactForm />} />
        <Route path="/map" element={<ContactMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
