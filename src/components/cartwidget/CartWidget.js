import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `1px solid #f44f5a`,
    padding: '0 4px',
    backgroundColor: "#c4c4c8",
    color: "#f44f5a"
  },
}));

const CustomizedBadges =() => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} >
        <ShoppingCartIcon/>
      </StyledBadge>
    </IconButton>
  );
}

export default CustomizedBadges;