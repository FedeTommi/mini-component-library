/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// Everything that is commented out was added after watching the solution video

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--radius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--radius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--radius': 8 + 'px',
    '--padding': 4 + 'px',
  }
}

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  display: flex;
  align-items: center;
  padding: var(--padding);
  /* Trim off corner when progress bar is near full */
  // overflow: hidden;
`;

// const Trimmer = styled.div`
//   border-radius: 4px;
//   overflow: hidden;
//   height: 100%;
//   width: 100%;
// `;

const Bar = styled.div`
  width: ${props => props.value + '%'};
  border-radius: ${props => props.value === 100 ? '4px' : '4px 0px 0px 4px'};
  background-color: ${COLORS.primary};
  height: 100%;
  box-sizing: border-box;
`;

const ProgressBar = ({ value, size, label }) => {
  const styles = SIZES[size];

  // if (!styles) {
  //   throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  // }

  return (
    <Wrapper style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" aria-describedby={label} aria-busy={value <= 100}>
      {/* <Trimmer> */}
      <Bar value={value}></Bar>
      {/* </Trimmer> */}
      {/* <VisuallyHidden>{value}</VisuallyHidden> */}
    </Wrapper>
  );
};

export default ProgressBar;
