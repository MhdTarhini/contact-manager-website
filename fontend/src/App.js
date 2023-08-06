import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing_page";
import ContactForm from "./component/ContactForm";
import ContactsMap from "./component/ContactsMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/map" element={<ContactsMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
