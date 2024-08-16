import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import App from './App';
import Technologies from './pages/technologies';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
