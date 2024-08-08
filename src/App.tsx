import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Line from './pages/line.tsx';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Line />} />
      <Route path={'/line'} element={<Line />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
