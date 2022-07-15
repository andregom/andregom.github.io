import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './app.routes';

import { useTheme } from '../utils/hooks/themes';
import { ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';


const ContentRoutes: React.FC = () => {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    )
}

export default ContentRoutes;