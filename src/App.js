import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

// page
import Company from './components/Company';
import Business from './components/Business';
import Contacts from './components/Contacts';
import Skills from './components/Skills';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/company' element={<Company />} />
          <Route path='/business' element={<Business />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
