import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import MailIcon from '@mui/icons-material/Mail';
import './Navbar.css';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Games', 'Live Casino', 'Sport','Promotion','Lucky Coin','Spin Shop','Lucky Loots', 'Tournaments','AboutCrypto','More'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const anchor = 'left'; // Define the anchor here or use a fixed anchor value
  
  return (
    <Box p={2} sx={{ display: 'flex' }}  className="fixed-navbar">
      <div>
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <HiMiniBars3CenterLeft style={{fontSize:'32px'}} color='#fff'  /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      </div>
      <Box className="logo" pt={1}><img src="https://direct.beatus88.com//_/assets/8pgnu89l8cso8sss" alt="" width={86}/></Box>
      <Box className="searchbar" px={5} pt={0.8}><FiSearch color='#cad3e1' size={26} /></Box>
      <Box pt={1} sx={{ display: { xs: 'none', sm: 'none' ,md:'flex'} }}>
  <Box px={2} className='SSA_font18px'>SPORT </Box>
  <Box px={2} className='SSA_font18px'>LIVE BETTING </Box>
  <Box px={2} className='SSA_font18px'>LIVE CASINO </Box>
  <Box px={2} className='SSA_font18px'>GAMES </Box>
  <Box px={2} className='SSA_font18px'>PROMOTION </Box>
  <Box px={2} className='SSA_font18px'>VIP </Box>
</Box>
      <div style={{ marginLeft: 'auto',display: 'flex'}}>
      <Button style={{marginRight:'13px'}} variant="text">Login </Button>
      <Button mx={2} variant="contained">Registration</Button>
         </div>
    </Box>
  );
}
