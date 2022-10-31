import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, Toolbar, ListItemText } from '@mui/material';
import Iconify from '../iconify';
import Logo from '../logo';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
        <Toolbar >
          <Logo />
          {data.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </Toolbar>
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
        },
      }}
    >
      {/* <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> */}
      <Iconify icon={icon} sx={{ width: 35, height: 35, mr: 0.5 }} />

      <ListItemText disableTypography primary={title} />

      {/* {info && info} */}
    </StyledNavItem>
  );
}
