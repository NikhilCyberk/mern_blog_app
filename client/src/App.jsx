import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projects" element={<Projects/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
