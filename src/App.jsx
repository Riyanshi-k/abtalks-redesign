import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Day from "./pages/Day";
import DayOne from "./pages/DayOne";
import MissedDay from "./pages/MissedDay";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/day/12" element={<Day />} />

        <Route path="/day/1" element={<DayOne />} />

        <Route path="/missed" element={<MissedDay />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*"  element={<Navigate to="/" replace />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;