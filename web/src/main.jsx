import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeContextProvider from './hooks/useTheme.jsx';
import '../i18n/i18n.js';
import './index.css';
import AppRoutes from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  </StrictMode>,
);
