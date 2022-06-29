import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Nav />
      
      <Routes>
        <Route path="/" element={
          <Home/>}
        />
      </Routes>
    </>
  );
}

export default App;
