import React from 'react';
import SideBarList from './SideBarList';
import Speedometer from '../../assets/speedometer.svg';
import SearchStatus from '../../assets/search-status.svg';
import calendar from '../../assets/calendar.svg';
import profile2 from '../../assets/profile-2user.svg';
import notification from '../../assets/notification.svg';

const SideBar = () => {
  return (
    <div className='sideBar'>
    <SideBarList groupId="sideBar1" imageSource={Speedometer} content="Dashboard"/>
    <SideBarList groupId="sideBar2" imageSource={SearchStatus} content="Search Property"/>
    <SideBarList groupId="sideBar3" imageSource={calendar} content="Calendar"/>
    <SideBarList groupId="sideBar4" imageSource={profile2} content="MyClients"/>
    <SideBarList groupId="sideBar5" imageSource='' content="MLS Lists"/>
    <SideBarList groupId="sideBar6" imageSource={notification} content="Notifications"/>

    </div>

  )
}

export default SideBar;
