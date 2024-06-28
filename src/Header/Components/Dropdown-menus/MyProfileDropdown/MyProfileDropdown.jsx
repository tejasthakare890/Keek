import React from 'react'
import '../MyProfileDropdown/MyProfileDropdown.scss'
import MyProfile from '../../MyProfile'
import HelpLogo from '../../HelpLogo'
import MyAccountLogo from '../../MyAccountLogo'
import GearLogo from '../../GearLogo'



const MyProfileDropdown =  React.forwardRef((props, ref)=> {
  return (
      <div ref={ref} className="dropdown-menu">
           <ul>
              <li><MyProfile /> <h4>User</h4></li>
              <hr/>
              <li><MyAccountLogo /> <h4>My Profile</h4></li>
              
              <li><GearLogo /><h4>Settings</h4> </li>
              <hr/>
              <li><HelpLogo /> <h4>Help</h4></li>
          </ul>
      </div>
  );
});


export default MyProfileDropdown;