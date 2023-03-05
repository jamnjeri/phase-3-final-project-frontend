import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/Signin'
import Signup from './views/Signup'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='sign-in' element={ <Signin/> } />
        <Route path='sign-up' element={ <Signup/> } />
      </Routes>
    </div>
  );
}

export default App;
