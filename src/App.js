import './App.css';
import Navber from './Pages/Navber';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </div>
  );
}

export default App;
