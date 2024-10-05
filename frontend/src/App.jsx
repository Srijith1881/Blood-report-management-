import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Weblayout from "./layouts/Weblayout"
import Employeelogin from "./components/Employeelogin";
import Patientlogin from "./components/Patientlogin";
import Patientdashboard from"./pages/Patientdashboard";
import Employeedashboard from"./pages/Employeedashboard";

const App=() => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Weblayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/employeelogin" element={<Employeelogin />} />
          <Route path="/patientlogin" element={<Patientlogin />} />
          <Route path="/patientdashboard" element={<Patientdashboard />} />
          <Route path="/employeedashboard" element={<Employeedashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
