import PropTypes from 'prop-types';
import {useState} from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import Nav from '../nav';
import Logo from '../../../components/logo'
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

// const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  // [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  // },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('md')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { md: 'none', xs:'block' },
          }}
        >
          <Iconify icon="mdi-light:menu" />
        </IconButton>
        <Box sx={{display: {md: 'block', xs:'none'}}}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display:'flex', }} >
          <Logo sx={{display: {md:'none', xs:'block'}}} />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          // spacing={{
          //   xs: 0.5,
          //   sm: 1,
          // }}
        >
          {/* <Searchbar />
          <LanguagePopover />
          <NotificationsPopover /> */}
          <Nav openNav={open} onCloseNav={() => setOpen(false)} />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
