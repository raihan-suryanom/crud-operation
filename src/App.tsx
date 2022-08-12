import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './common/components';
import { AddDataPage, DetailDataPage, EditDataPage, HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddDataPage />} />
        <Route path="/detail" element={<DetailDataPage />} />
        <Route path="/edit" element={<EditDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
