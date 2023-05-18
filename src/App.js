import './App.css';
import RegisterTicket from './pages/registerTicket/RegisterTicket';
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import TicketPage from './pages/TicketPage/TicketPage';

function App() {
  return (
    <div className="App">
      <RegisterTicket />
      <Dashboard />
      <TicketPage />
    </div>
  );
}

export default App;
