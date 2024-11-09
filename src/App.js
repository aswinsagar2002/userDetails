import logo from './logo.svg';
import './App.css';
import Userlist from './Test/Userlist';
import Userdetails from './Test/Userdetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
      <div >
        {/* <Userlist/>  */}
        
        <Router>
          <Routes>
          <Route path='/' element={<Userlist />} />
            <Route path='/details' element={<Userdetails />} />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
