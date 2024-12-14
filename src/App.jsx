import './App.css';
import Index from './Intro/Index';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Sports from './Sports/Sports';
import Cultural from './Cultural/Cultural';
import Events from './Cultural/Events';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/sports" exact element={<Sports />} />
      <Route path="/cultural" exact element={<Cultural />} />
      <Route path="/events" exact element={<Events />} />
    </Routes>
    </Router>
  )
}

export default App
