import React, { useState , Component} from 'react';
import { Button, Drawer } from 'antd';
import DashboardIcon from '@mui/icons-material/Dashboard';
function dashbord(){
  
    const [open, setOpen] = useState(false);
  const showDrawer = (event) => {
    setOpen(true);
  };
  const onClose = (event) => {
    setOpen(false);
  };
    return (
      <div>
      <Button type="primary" onClick={showDrawer}>
        <DashboardIcon style={{width: 200, color:'white'}}/>
      </Button>
      <Drawer title="Dashbord" style={{fontSize:20, color: 'black'}} placement="left" onClose={onClose} open={open}>
        <a href="/studentdb"> Create Student</a><br/>
        <a href="/markattendance">Mark Attendance</a><br/>
        <a href="/groupcreation">Create a Group</a><br/>
        <a href="/studentupdation">Student Updation</a><br/>
        <a href="/workshopdetail">Workshop Details</a><br/>
        <a href="/megasheet1">Megasheet one</a><br/>
        <a href="/megasheet2">MegaSheet two</a><br/>
        <a href="/workshopreport">Workshop report</a><br/>
      </Drawer> 
        <div style={{textAlign:'center', height:'600px'}}>
          <h1>Containts</h1>
        </div>
      </div>
    );
  }


export default  dashbord;

// import React, { Component } from 'react';
// export class dashbord extends Component {
//   render() {
//     return (
//       <div>
    
//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     Products
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                      Categories
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                      Customers
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                      Inventory
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                      Reports
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     Setting
//                 </a>
//             </li>
//         </ul>
//         </div>
//     )
//   }
// }

// export default dashbord

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

      
// export class dashbord {
//   render() {
    
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//     return (
//       <div>
//        {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>

//     )
//   }
// }

// export default dashbord
