import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { ApolloProvider } from '@apollo/client';
import apoloClient from './graphql/client';

import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';

import CountryList from './components/CountryList';
import Main from './styled/Main';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes}>
      <Provider store={store}>
        <ApolloProvider client={apoloClient}>

          <Main>
            <CountryList />
          </Main>

          <GlobalStyle />
          
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
