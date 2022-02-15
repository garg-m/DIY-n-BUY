import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import ShopByParts from '../pages/MenuPages/ShopByParts';
import ShopByModel from '../pages/MenuPages/ShopByModel';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="ShopByParts">
        Shop by Parts
      </a>
      <a href="ShopByModel">
        Shop by Model
      </a>
      <a href="/NewProducts">
        New Products
      </a>
      <a href="/LimitedEdition">
        Limited Edition
        </a>
      <a href="/Merchandise">
        Merchandise
        </a>
        <a href="/">
        Configuration
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;