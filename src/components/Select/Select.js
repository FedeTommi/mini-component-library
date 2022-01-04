import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

// I abandoned creating this component alone quite quickly.
// I first tried to tweak the styles of the select to make it work,
// finally I adjusted to the solution proposed in the course.

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
`;

const VisibleSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-weight: 400;
  font: 'Roboto', sans-serif;
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  border-radius: 8px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  
  ${InvisibleSelect}:focus + & {
    outline: 2px solid ${COLORS.bluet};
  }

  ${InvisibleSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const iconSize = 24;

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange} id={label}>
        {children}
      </InvisibleSelect>
      <VisibleSelect>{displayedValue}
        <IconWrapper size={iconSize}>
          <Icon id='chevron-down' size={iconSize} />
        </IconWrapper>
      </VisibleSelect>
    </Wrapper>
  );
};

export default Select;
