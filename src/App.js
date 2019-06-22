import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import 'normalize.css';

import AppWrapper from './components/AppWrapper';
import Column from './components/Column';
import Caption from './components/Caption';
import Form from './components/Form';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';
import ResultsLegend from './components/ResultsLegend';
import Result from './components/Result';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Column>
        <Caption as='h2' size='l'>Data</Caption>
        <Form>
          <Label htmlFor='spotPrice'>Spot price</Label>
          <Input id='spotPrice' type='number' name='spotPrice' placeholder='Spot price of the underlying asset' />

          <Label htmlFor='strikePrice'>Strike price</Label>
          <Input id='strikePrice' type='number' name='strikePrice' placeholder='Strike price of the option' />

          <Label htmlFor='timeToMaturity'>Time to maturity</Label>
          <Input id='timeToMaturity' type='number' name='timeToMaturity' />

          <Label htmlFor='riskFreeInterestRate'>Risk-free interest rate %</Label>
          <Input id='riskFreeInterestRate' type='number' name='riskFreeInterestRate' />

          <Label htmlFor='volatility'>Volatility %</Label>
          <Input id='volatility' type='number' name='volatility' />

          <Button type='submit'>Submit</Button>
        </Form>
      </Column>
      <Column>
        <Caption as='h2' size='l'>Results</Caption>
        <table>
          <tbody>
            <ResultsLegend />
            <Result name='price' call={0.001021} put={4.755456} />
            <Result name='Δ (delta)' call={0.001021} put={4.755456} />
            <Result name='Γ (gamma)' call={0.001021} put={4.755456} />
            <Result name='ρ (rho)' call={0.001021} put={4.755456} />
            <Result name='Θ (theta)' call={0.001021} put={4.755456} />
            <Result name='d1' call={0.001021} put={4.755456} />
            <Result name='d2' call={0.001021} put={4.755456} />
          </tbody>
        </table>
      </Column>
    </AppWrapper>
  </ThemeProvider>
);

export default App;
