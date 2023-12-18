import {Routes, Route} from "react-router-dom";
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Error from './components/Error';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  

  return (
    
      <>
        
        
        <Navbar />
        <Routes>
          <Route path="/" element={<All/>}/>
          <Route path="/fullStack" element={<FullStack />}/>
          <Route path="/dataScience" element={<DataScience />}/>
          <Route path="/cyberSecurity" element={<CyberSecurity />}/>
          <Route path="/career" element={<Career />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        
      </>
        
      
  )
}

export default App
