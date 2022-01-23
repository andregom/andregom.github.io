import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Dashboard from './pages/Dashboard';
import List from './pages/List';

ReactDOM.render(
  
  <ThemeProvider theme={dark}>
    <React.StrictMode>
    <GlobalStyles />
    <Layout>
      <List />
    </Layout>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
