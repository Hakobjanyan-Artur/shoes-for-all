import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Reg from './components/reg/Reg';
import HomeWrapper from './pages/HomeWrapper';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='reg' element={<Reg />} />
        <Route path='main' element={<HomeWrapper />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

