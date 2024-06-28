import React from 'react'
import './AccountNotiDropdown.scss'

const AccountNotiDropdown = () => {
  const notifications = [
    { id: 1, text: "Notification 1" },
    { id: 2, text: "Notification 2" },
    { id: 3, text: "Notification 3" },
    // Add more notifications as needed
  ];
  return (
    <div className="dropdown-content">
      <h3>Notifications</h3>
          <ul>
            {/* {notifications.map(notification => (
              <li key={notification.id}>{notification.text}</li>
            ))} */}
          </ul>
        </div>
  )
}

export default AccountNotiDropdown