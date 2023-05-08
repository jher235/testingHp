import {useState, useEffect } from "react";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Home from "./routes/Home"
//basename={process.env.PUBLIC_URL}
function App() {
<<<<<<< HEAD
  return(<Router basename={process.env.PUBLIC_URL} >
=======
  return(<Router basename={process.env.PUBLIC_URL}> 
>>>>>>> c8e235d7ba0bc9482245857f7b41dfc3bd844a51
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/movie/:num"} element={<Detail />} />
      <Route path={"/hi"} element ={<h1>hi</h1>} />
    </Routes>
  </Router>);
}

export default App;

