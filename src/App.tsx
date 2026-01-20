import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProfessorDashboard from "./Pages/ProfessorDashboard";
import AlunoDashboard from "./Pages/AlunoDashboard";
import DashboardDireção from "./Pages/DashboardDireção";
import DashboardSecretaria from "./Pages/DashboardSecretaria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/professor-dashboard" element={<ProfessorDashboard />} />
          <Route path="/aluno-dashboard" element={<AlunoDashboard />} />
          <Route path="/direcao-dashboard" element={<DashboardDireção />} />
          <Route
            path="/secretaria-dashboard"
            element={<DashboardSecretaria />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
