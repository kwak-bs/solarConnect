import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import mixin from 'styles/mixin';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background: #eeeeee;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
