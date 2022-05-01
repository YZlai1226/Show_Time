import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import Login from './../Pages/Login/Login.js'
// import Register from './../Pages/Register/Register.js'
// import Wishlist from './../Pages/Wishlist/Wishlist.js'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
// import LogoDevIcon from '@mui/icons-material/LogoDev';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logoWhite from './../../images/LogoWhite.png'
import AuthContext from "../../context/AuthProvider";
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const token = localStorage.getItem('token')

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { auth, setAuth } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);

  }

  const debug = () => {
    console.log(auth);
    if (auth) {
      console.log('I am logged in !!!!!!!!!!!!!')
    }
    else {
      console.log('nooooooooooooo')
    }
  }
  debug()
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={() => { handleMenuClose(); navigate("/wishlist"); }} >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p> Wishlist </p>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      
      <MenuItem onClick={() => { handleMenuClose(); navigate("/register"); }} >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <AppRegistrationIcon />
        </IconButton>
        <p> Register </p>
      </MenuItem>

      <MenuItem onClick={() => { handleMenuClose(); navigate("/login"); }} >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <LoginIcon />
        </IconButton>
        <p> Log In </p>
      </MenuItem>

      <MenuItem onClick={() => { handleMenuClose(); navigate("/"); }}>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <LogoutIcon />
      </IconButton>
      <p>Log Out</p>
    </MenuItem>


      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={logoWhite} alt='Logo' width="50" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MyShowTime
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            {
              !token ? ( 
              <>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => { handleMenuClose(); navigate("/Register"); }} >
              <AppRegistrationIcon />
              <p style={{fontSize: 15, marginBottom: 0}}> Register </p>
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => { handleMenuClose(); navigate("/Login"); }} >
              <LoginIcon />
              <p style={{fontSize: 15, marginBottom: 0}}>Login</p>
            </IconButton>

            
            </>
            ) : ( 
              <>
              <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => { handleMenuClose(); navigate("/wishlist"); }} >
            <Badge badgeContent={4} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton
              onClick={() => handleLogout()}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <LogoutIcon 
              />
              <p style={{fontSize: 15, marginBottom: 0}}>Logout</p>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </>
          )
            
            } 

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}