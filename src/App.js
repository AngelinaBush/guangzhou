import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Food from "./Food";
import GeneralInfo from "./GeneralInfo";
import Sites from "./Sites";
import Home from "./Home";
import TodoList from "./TodoList";


function App() {

  return (
    <Router>
      <nav>
      <Link to='/' className="link">Home</Link>
        <Link to='/info' className="link">General info</Link>
        <Link to='/sites' className="link">Sites to see</Link>
        <Link to='/food' className="link">Places to eat</Link>
        <Link to='/todolist' className="link">To Do List</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<GeneralInfo/>}/>
        <Route path='/sites' element={<Sites/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/todolist' element={<TodoList/>}/>
      </Routes>
    </Router>
  )
}

export default App;
