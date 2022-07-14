import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './utils/hooks/themes';
import ContentRoutes from './routes';
import dark from './styles/themes/dark';
import light from './styles/themes/light';


// import { ThemeProvider } from './utils/hooks/themes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider key={null} type={""} props={undefined}>
      <GlobalStyles />
      <ContentRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
