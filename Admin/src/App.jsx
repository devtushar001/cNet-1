import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { TShakyaContext } from './Context/TShakyContext';
import ImageUploader from './Components/ImageUploader/ImageUploader';

function App() {
  const { imageSelector, single } = useContext(TShakyaContext);

  return (
    <>
      <Navbar />
      <Sidebar />
      <ToastContainer />
      {imageSelector || single ? <ImageUploader /> : ""}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App
