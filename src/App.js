import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
  </ThemeProvider>
);

export default App;
