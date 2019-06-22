import React, { useState, useEffect } from 'react';
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

import calculate from './calculate';

const onSubmit = (e, fields, setResults) => {
  e.preventDefault();
  setResults(calculate(fields));
};

const App = () => {
  const [fields, setFields] = useState({
    spot: 0,
    strike: 0,
    time: 0,
    rf: 0,
    sigma: 0
  });

  const [results, setResults] = useState({
    priceC: 0,
    priceP: 0,
    deltaC: 0,
    deltaP: 0,
    gamma: 0,
    vega: 0,
    rhoC: 0,
    rhoP: 0,
    thetaC: 0,
    thetaP: 0,
    d1: 0,
    d2: 0
  });

  useEffect(() => {
    console.log(fields)
  });

  const onChange = e => {
    setFields({ ...fields, [e.target.name]: parseFloat(e.target.value) });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Column id='input'>
          <Caption as='h2' size='l'>Data</Caption>
          <Form onSubmit={e => onSubmit(e, fields, setResults)}>
            <Label htmlFor='spotPrice'>Spot price</Label>
            <Input id='spot' type='number' name='spot' onChange={onChange} />

            <Label htmlFor='strikePrice'>Strike price</Label>
            <Input id='strike' type='number' name='strike' onChange={onChange} />

            <Label htmlFor='time'>Time to maturity</Label>
            <Input id='time' type='number' name='time' onChange={onChange} />

            <Label htmlFor='rf'>Risk-free interest rate %</Label>
            <Input id='rf' type='number' name='rf' onChange={onChange} />

            <Label htmlFor='sigma'>Volatility %</Label>
            <Input id='sigma' type='number' name='sigma' onChange={onChange} />

            <Button type='submit'>Submit</Button>
          </Form>
        </Column>
        <Column id='output'>
          <Caption as='h2' size='l'>Results</Caption>
          <table>
            <thead>
              <ResultsLegend />
            </thead>
            <tbody>
              <Result name='price' call={results.priceC} put={results.priceP} />
              <Result name='Δ (delta)' call={results.deltaC} put={results.deltaP} />
              <Result name='Γ (gamma)' put={results.gamma} />
              <Result name='ν (vega)' put={results.vega} />
              <Result name='ρ (rho)' call={results.rhoC} put={results.rhoP} />
              <Result name='Θ (theta)' call={results.thetaC} put={results.thetaP} />
              <Result name='d1' put={results.d1} />
              <Result name='d2' put={results.d2} />
            </tbody>
          </table>
        </Column>
      </AppWrapper>
    </ThemeProvider>
  )
};

export default App;
