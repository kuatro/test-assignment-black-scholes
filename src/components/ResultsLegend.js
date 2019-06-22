import React from 'react';
import styled from '@emotion/styled';
import Caption from './Caption';

const LegendCaption = styled(Caption)`
  text-align: center;
`;

const ResultsLegend = () => (
  <tr>
    <td></td>
    <td><LegendCaption size='s'>Call</LegendCaption></td>
    <td><LegendCaption size='s'>Put</LegendCaption></td>
  </tr>
)

export default ResultsLegend;
