import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} mode={mode} />}
              />
              <Route
                exact
                path="/about"
                element={<About mode={mode} />}
              />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} mode={mode} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} mode={mode} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
