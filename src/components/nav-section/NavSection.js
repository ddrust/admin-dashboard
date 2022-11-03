/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText, Toolbar } from '@mui/material';
import {Home} from '@mui/icons-material';
import Iconify from '../iconify';
import Logo from '../logo';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], isDesktop, ...other }) {
  return (
    <Box {...other}>
      {!isDesktop ? 
        <List direction="row" disablePadding sx={{ p: 1 }}>
            {data.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
        </List> : (
        <Toolbar>
          {data.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </Toolbar>
        )
      }
      
     </Box>
     
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
          // borderColor: "red",
          // borderWidth: 2
        },
      }}
    >
      {/* <Home color="secondary" fontSize="medium" /> */}
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      {/* <Iconify icon={icon} color="primary" sx={{ width: 15, height: 15, mr: 0.5 }} /> */}
      
      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
