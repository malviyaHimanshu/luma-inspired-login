import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import Broke from './pages/Broke';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/onboarding" element={ <Onboarding /> } />
          <Route path="/remainbrokie" element={ <Broke /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/" element={ <Login /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
