import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './app.routes';

const ContentRoutes: React.FC = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

export default ContentRoutes;