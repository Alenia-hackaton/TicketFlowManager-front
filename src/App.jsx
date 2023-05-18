import './App.css';
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import TicketPage from './pages/TicketPage/TicketPage';
import { Routes, Route } from "react-router-dom";
import registerTicket from "./pages/registerTicket/registerTicket";
import Navbar from "./components/Navbar/Navbar.jsx"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ="/" element={<registerTicket />} />
        <Route path="/tickets" element={<Dashboard/>} />
        <Route path="/tickets/:id" element={<TicketPage/>} />
      </Routes>
    </div>
  );
}

export default App;
