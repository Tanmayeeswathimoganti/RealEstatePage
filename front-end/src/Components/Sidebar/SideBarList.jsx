import React from 'react'

function SideBarList(props) {
  return (
    <div className={props.groupId}>
    <div className='group7019'>
    <div className='icon'>
    <img src={props.imageSource} />
    </div>
    <div className='content'>
    {props.content}
    </div>
    </div>
    </div>
  )
}

export default SideBarList;
