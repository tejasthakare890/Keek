import LockIcon from '@mui/icons-material/Lock';
import HistoryIcon from '@mui/icons-material/History';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './settings.scss'
import React, { useState } from "react";
const Setss = () =>{


  

  

return (


<div className='MainDiv'>

    <div className='divv'>
<div className='subclass'>

    Settings </div>
    <p style={{color:'#263245' ,marginLeft:'20px' , marginTop:'5px' , fontSize:'14px'}}>
Your settings will appear here. You can change your settings by clicking the gear icon on the top right of the page.</p>

<div className='subclass2'>
<p >SECURITY</p>
  

</div>
<div >
<li>  <a href="#">
 <LockIcon className='icon1' variant="h2"> </LockIcon>
 <p style={{marginLeft :'10px', display:"inline"}} to ={<Setss></Setss>}>Change Password</p></a></li>

<li> <a href="#">
 <HistoryIcon className='icon1' variant="h2"> </HistoryIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Login History</p> </a></li>

 </div>

 <div className='subclass2'>
<p >GENERAL</p>
  

</div>
<div >
<li> <a href="#">
 <EditOutlinedIcon className='icon1' variant="h2"> </EditOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Edit Profile</p></a></li>


<li> <a href="#">
 <FoundationOutlinedIcon className='icon1' variant="h2"> </FoundationOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Edit Organization</p> </a></li>
 <li> <a href="#">
 <PersonAddOutlinedIcon className='icon1' variant="h2"> </PersonAddOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Subscription Details
 </p></a></li>

<li> <a href="#">
 <HeadsetMicOutlinedIcon className='icon1' variant="h2"> </HeadsetMicOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Contact US</p> </a></li>
 <li> <a href="#">
 <ShareOutlinedIcon className='icon1' variant="h2"> </ShareOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Share With Friends</p></a></li>

<li> <a href="#">
 <DarkModeOutlinedIcon className='icon1' variant="h2"> </DarkModeOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Dark Mode</p></a></li>


 </div>
 <div className='subclass2'>
<p >PRODUCT</p>
  

</div>
<div >
<li> <a href="#">
 <AutoAwesomeOutlinedIcon className='icon1' variant="h2"> </AutoAwesomeOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Request a Feature</p></a></li>

<li> <a href="#">
 <FeedbackOutlinedIcon className='icon1' variant="h2"> </FeedbackOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Feedback</p> </a></li>
 <li> <a href="#">
 <PestControlOutlinedIcon className='icon1' variant="h2"> </PestControlOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Report a Bug
 </p></a></li>

<li> <a href="#">
 <NotificationsNoneOutlinedIcon className='icon1' variant="h2"> </NotificationsNoneOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Updates</p> </a></li>
 <li> <a href="#">
 <HeadsetMicOutlinedIcon  className='icon1' variant="h2"> </HeadsetMicOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>support</p> </a></li>
</div>

<div className='subclass2'>
<p >LEGAL POLICIES</p>
  

</div>
<div >
<li> <a href="#">
 <TaskOutlinedIcon className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Terms and conditions</p></a></li>

<li> <a href="#">
 <TaskOutlinedIcon  className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Privacy Policies</p> </a></li>
 <li> <a href="#">
 <TaskOutlinedIcon  className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Cookie Policy
 </p></a></li>


<li> <a href="#">
 <TaskOutlinedIcon  className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Disclaimer</p>  </a></li>
</div>
<div className='subclass3'>
<p >OTHER SETTINGS</p>
  

</div>
<div >
<li> <a href="#">
 <DeleteOutlinedIcon className='icon1' variant="h2"> </DeleteOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Delete Account</p></a></li>

<li> <a href="#">
 <EditOutlinedIcon className='icon1' variant="h2"> </EditOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Logout</p> </a></li>
 


 </div>
 </div>
 

</div>
)



}

export default Setss;