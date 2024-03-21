import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

// page
import Company from './components/Company';
import Business from './components/Business';
import Contacts from './components/Contacts';
import Skills from './components/Skills';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/company' element={<Company />} />
          <Route path='/business' element={<Business />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
