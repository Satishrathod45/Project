import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Registration from "./Components/Registration";
import JobForm  from './Components/JobPortal';
import CreateInterview from './Components/CreateInterview';

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} /> 
        <Route path="/CreateInterview" element={<CreateInterview />} /> 
        <Route path="/jobPortal" element={<JobForm />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
