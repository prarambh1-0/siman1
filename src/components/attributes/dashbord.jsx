import React, { useState } from 'react';
import { Button, Drawer, Row, Col, Select,} from 'antd';
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
      <Row className='mx-10'>
      <Col span={8} >
      <Button type="primary" onClick={showDrawer}>
        <DashboardIcon style={{width: 200, color:'white'}}/>
      </Button>
      <Drawer title="Dashbord" style={{fontSize:20, color: 'black'}} placement="left" onClose={onClose} open={open}>
      <Select style={{width:300,margin:10}} value="Entry points">
            <Select.Option  ><a href="/studentdb"> Create Student</a><br/></Select.Option>
            <Select.Option><a href="/markattendance">Mark Attendance</a><br/></Select.Option>
            <Select.Option ><a href="/groupcreation">Create a Group</a><br/></Select.Option>
            <Select.Option ><a href="/studentupdation">Student Updation</a><br/></Select.Option>
            <Select.Option ><a href="/workshopdetail">Workshop Details</a><br/></Select.Option>
            <Select.Option><a href="/megasheet1">Megasheet</a><br/></Select.Option>
          </Select>
       <Select style={{width:300,margin:10}} value="Outcome">
        <Select.Option><a href="/workshopreport">Workshop report</a><br/></Select.Option>
        </Select>
      </Drawer> 
      </Col>
      <Col span={12} style={{textAlign:'center', height:'600px'}}>
        
          <h1>Upcoming Events</h1>
    
        </Col>
      </Row>
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
