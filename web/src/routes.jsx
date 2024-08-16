import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import App from './App';
import Technologies from './pages/technologies';
import ProjectsPage from './pages/projects';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
