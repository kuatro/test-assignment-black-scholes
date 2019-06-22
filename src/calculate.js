// I found this implementation at https://www.math.ucla.edu/~tom/distributions/normal.html?
const normalcdf = strike => {
  const time = 1 / (1 + .2316419 * Math.abs(strike));
  const d = .3989423 * Math.exp(-strike * strike / 2);
  const prob = d * time *(.3193815 + time * (-.3565638 + time * (1.781478 + time * (-1.821256 + time * 1.330274))));

  if (strike > 0) {
    return 1 - prob;
  }

  return prob;
};

const roundTo6 = number => Math.round(number * 1000000) / 1000000;

// Superficially edited https://www.calkoo.com/en/black-scholes-option-pricing-model
const calculate = ({ spot, strike, ...args }) => {
  const time = args.time / 365;
  const rf = args.rf / 100;
  const sigma = args.sigma / 100;

  const d1 = roundTo6((Math.log (spot / strike) + (rf + Math.pow(sigma, 2) / 2 ) * time) / (sigma * Math.sqrt(time)));
  const d2 = roundTo6(d1 - (sigma * Math.sqrt(time)));
  const priceC = roundTo6(spot * normalcdf(d1) - strike * Math.exp( -(rf * time)) * normalcdf(d2));
  const priceP = roundTo6(strike * Math.exp( - (rf * time) ) * normalcdf(-d2) - spot * normalcdf(-d1));
  const deltaC = roundTo6(normalcdf(d1));
  const deltaP = roundTo6(normalcdf(d1) - 1);
  const gamma = roundTo6((Math.exp( -(Math.pow(d1, 2))/2 ) / Math.sqrt( 2 * Math.PI )) / ( spot * sigma * Math.sqrt(time) ));
  const vega = roundTo6(spot * Math.sqrt(time) * (Math.exp( -(Math.pow(d1, 2))/2 ) / Math.sqrt( 2 * Math.PI )) / 100);
  const thetaC = roundTo6((-( spot * (Math.exp( -(Math.pow(d1, 2))/2 ) / Math.sqrt( 2 * Math.PI )) * sigma)/(2 * Math.sqrt(time)) - rf * strike * Math.exp( -(rf * time)) * normalcdf(d2)) / 365);
  const thetaP = roundTo6((-( spot * (Math.exp( -(Math.pow(d1, 2))/2 ) / Math.sqrt( 2 * Math.PI )) * sigma)/(2 * Math.sqrt(time)) + rf * strike * Math.exp( -(rf * time)) * normalcdf(-d2)) / 365);
  const rhoC = roundTo6(strike * time * Math.exp( - (rf * time) ) * normalcdf(d2) / 100);
  const rhoP = roundTo6(-strike * time * Math.exp( - (rf * time) ) * normalcdf(-d2) / 100);

  return {
    d1, d2, priceC, priceP, deltaC, deltaP, gamma, vega, thetaC, thetaP, rhoC, rhoP
  };
};

export default calculate;
