import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import 'normalize.css';
import { Formik } from 'formik';
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

const initialState = {
  spot: 25.00,
  strike: 30.00,
  time: 60.00,
  rf: 5.00,
  sigma: 15.00
};

const validate = fields => {
  let errors = {};

  for (const field in fields) {
    if (typeof fields[field] !== 'number' || fields[field] < 0) {
      errors[field] = 'Positive numbers only';
    }
  }

  if (Object.keys(errors).length) {
    return errors;
  }
};

const App = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Column id='input'>
          <Caption as='h2' size='l'>Data</Caption>
          <Formik
            initialValues={initialState}
            validate={fields => validate(fields)}
            onSubmit={(values, { setSubmitting }) => {
              window.location.hash = '';
              setResults(calculate(values));
              setSubmitting(false);
              window.location.hash = '#output';
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form onSubmit={handleSubmit}>
                <Label htmlFor='spotPrice'>Spot price</Label>
                <Input
                  id='spot'
                  type='number'
                  name='spot'
                  error={errors.spot}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.spot}
                />

                <Label htmlFor='strikePrice'>Strike price</Label>
                <Input
                  id='strike'
                  type='number'
                  name='strike'
                  error={errors.strike}
                  onChange={handleChange}
                  value={values.strike}
                />

                <Label htmlFor='time'>Time to maturity</Label>
                <Input
                  id='time'
                  type='number'
                  name='time'
                  error={errors.time}
                  onChange={handleChange}
                  value={values.time}
                />

                <Label htmlFor='rf'>Risk-free interest rate %</Label>
                <Input
                  id='rf'
                  type='number'
                  name='rf'
                  error={errors.rf}
                  onChange={handleChange}
                  value={values.rf}
                />

                <Label htmlFor='sigma'>Volatility %</Label>
                <Input id='sigma' type='number' name='sigma' onChange={handleChange} value={values.sigma} />

                <Button type='submit' disabled={isSubmitting}>Submit</Button>
              </Form>
            )}
          </Formik>
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
