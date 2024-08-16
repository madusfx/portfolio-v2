import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import App from './App';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
