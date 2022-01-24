import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Routes from './routes/app.routes';
import dark from './styles/themes/dark';
import light from './styles/themes/light';


ReactDOM.render(
  
  <ThemeProvider theme={dark}>
    <React.StrictMode>
      <GlobalStyles />
      <Routes />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
