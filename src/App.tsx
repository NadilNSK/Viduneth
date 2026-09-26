import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import MyClasses from './pages/MyClasses';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import StudentProfile from './pages/StudentProfile';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-classes" element={<MyClasses />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
