
import React from 'react';
import styled from 'styled-components';



const menuColor = (color) => {
  switch(color) {
    case 'happy':
      return 'red';
    case 'unhappy':
      return 'blue';
    default:
      return 'violet';
  }
}

export default styled.div`
  color: ${props => menuColor(props.mColor)} !important;
  background-color: #427cac;
  padding: 14px 16px;
  text-align: center;
  display: block;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
  `