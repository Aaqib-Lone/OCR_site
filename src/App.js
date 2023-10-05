import logo from './logo.svg';
import './App.css';
import File from './components/File';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './components/Data';

function App() {
  return (
    <>
    {/* <File/> */}
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<File/>}></Route>
    <Route path='/data' element={<Data/>}></Route>
    </Routes>
    </BrowserRouter>
      
    
    </>
  );
}

export default App;
