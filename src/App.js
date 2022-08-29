import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';

import Mainfooter from './components/Mainfooter';
import Pages from './pages/Pages';

function App() {
  return (
    <div className='bg-blue-50'>
      <BrowserRouter>
          <Navbar />
         
          <Pages />
          <Mainfooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
