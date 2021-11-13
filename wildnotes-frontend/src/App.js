import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />      
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='notes/*' element={<Notes />} /> */}
        <Route path='notes' element={<NotesList />} />
        <Route path='note/:noteid' element={<NoteDetail />} />
      </Routes>

    </div>
  );
}

export default App;
