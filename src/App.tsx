import React from 'react';
import lightTheme  from './styles/themes';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { ZippiaRoutes } from './routes';
import GLobalStyle from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme ={lightTheme}>
      <GLobalStyle />
      <BrowserRouter>
        <ZippiaRoutes/>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
