import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import ContentRoutes from './routes';
import dark from './styles/themes/dark';
import light from './styles/themes/light';


ReactDOM.render(
  
  <ThemeProvider theme={dark}>
    <React.StrictMode>
      <GlobalStyles />
      <Outlet />
      <ContentRoutes />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
