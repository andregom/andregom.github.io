import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './app.routes';
import Auth from './auth.routes';

import { useTheme } from '../utils/hooks/themes';
import { ThemeProvider } from 'styled-components';
import { useAuth } from '../utils/hooks/auth';

const ContentRoutes: React.FC = () => {
    const { logged } = useAuth();

    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                {logged ? <App/> : <Auth />}
            </HashRouter>
        </ThemeProvider>
    )
}

export default ContentRoutes;