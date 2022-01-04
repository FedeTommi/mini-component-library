import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  var iconSize;
  var fontSize;
  var gap;
  var borderBottom;
  switch (size) {
    case 'small':
      iconSize = 12;
      fontSize = '14px';
      gap = 8;
      borderBottom = `1px solid ${COLORS.black}`;
      break;
    case 'large':
      iconSize = 18;
      fontSize = '18px';
      gap = 13;
      borderBottom = `2px solid ${COLORS.black}`;
      break;
    default:
      throw new Error(`Unknown or no size passed to IconInput: ${size}`)
  }

  return (
    <FocusWrapper>
      <InputWrapper style={{ width, borderBottom, gap }}>
        <IconWrapper>
          <Icon id={icon} size={iconSize} />
          <VisuallyHidden>{label}</VisuallyHidden>
        </IconWrapper>
        <NativeInput type='search' placeholder={placeholder} style={{ fontSize }} />
      </InputWrapper>
    </FocusWrapper>
  );
};

const FocusWrapper = styled.div`
  width: max-content;

  &:focus-within {
    border-radius: 2px;
    outline: 2px solid ${COLORS.bluet};
    outline-offset: 2px;
    color: ${COLORS.gray700};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  width: ${props => props.width + 'px'};
  font-family: 'Roboto', sans-serif;  
  font-weight: 400;
  color: ${COLORS.gray500};
  // Comment out overflow: hidden to see how (in Firefox)
  // NativeInput grows outside the container's boundaries
  // (for this to happen the input should have no explicit width)  
  // overflow: hidden;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  pointer-events: none;
`;

const NativeInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
  font-size: iherit;
  color: ${COLORS.gray700};
  font-weight: 700;
  // set an explicit width on the input box to prevent it 
  // from overflowing the flex container
  width: 100%;

  &::placeholder {
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
