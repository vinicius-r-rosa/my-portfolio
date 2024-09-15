import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
