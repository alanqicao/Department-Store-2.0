import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";
import styled from 'styled-components';
import ItemStyle from './Menu'
import Dog from './Menu'




const Navbar = () => (
  <Menu  >
    <Link to="/">
      <Dog mColor="happy">
        Home
      </Dog >
    </Link>
    <Link to="/about">
      <ItemStyle mColor="unhappy">
        About
      </ItemStyle>
    </Link>
    <Link to="/departments">
      <ItemStyle>
        Departments
      </ItemStyle>
    </Link>
  </Menu >
)


export default Navbar;