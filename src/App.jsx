import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'; // Adjust the path as necessary
import Create from './pages/Create'; // Adjust the path as necessary
import OrderTracking from './pages/Map'; // Adjust the path as necessary
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/map" element={<OrderTracking />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;