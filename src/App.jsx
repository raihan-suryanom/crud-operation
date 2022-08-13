import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './common/components';
import { useDispatch } from 'react-redux';
import { getPosts } from './features/post/postSlicer';
import { AddDataPage, DetailDataPage, EditDataPage, HomePage } from './pages';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddDataPage />} />
        <Route path="/detail/:id" element={<DetailDataPage />} />
        <Route path="/edit" element={<EditDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
