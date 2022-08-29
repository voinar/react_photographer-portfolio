import { Routes, Route, Link } from "react-router-dom";
import "./styles/style.css";

import Navbar from "./components/Navbar";
import SectionWelcome from "./components/SectionWelcome";
import SectionContent from "./components/SectionContent";

// {localStorage.setItem('user', 'name')}
// {sessionStorage.setItem('status', 'unread')}
// {document.cookie='user=new'}
// {document.cookie="myCookie=init; expires=" + new Date(2022, 7, 28, 11, 52, 30)}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SectionWelcome />} />
        <Route path="/witaj" element={<SectionWelcome />} />
        <Route path="/:category" element={<SectionContent />} />
      </Routes>

    </div>
  );
}

export default App;
