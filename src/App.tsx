import React from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import themes from './styles/themes';


function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
