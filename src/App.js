import logo from "./logo.svg";
import { Signup } from "./components/Signup";
import Mapview from "./components/Mapview";
import "./App.css";
import { auth } from "./firebase";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Login } from "./components/Login";
import Dummy from "./components/Dummy";
import Maps from "./components/Maps";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/map" element={<Mapview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map1" element={<Maps />} />
      </Routes>
    </div>
  );
}

export default App;
