import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './app.routes';

import { useTheme } from '../utils/hooks/themes';
import { ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';


const ContentRoutes: React.FC = () => {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default ContentRoutes;