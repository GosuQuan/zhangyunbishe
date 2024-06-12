
import './App.css';
import { Route, Routes, Navigate } from 'react-router';
import Home from "./page/Home/index"
import Login from "./page/Login"
import People from './page/people';
import Violation from "./page/violation"
import Firm from "./page/Firm"
import Analysis from "./page/Analysis"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigate to="/login" />} path='/'></Route>

        <Route element={<Home />} path='/home'>
          <Route element={<Navigate to="violation" />} path=''></Route>
          <Route element={<People />} path='people'></Route>
          <Route element={<Violation />} path='violation'></Route>
          <Route element={<Firm />} path='firm'></Route>
          <Route element={<Analysis></Analysis>} path='analysis'></Route>
          </Route>
-
          <Route element={<Login />} path='/login'></Route>
      </Routes>
    </div>
  );
}


export default App;
