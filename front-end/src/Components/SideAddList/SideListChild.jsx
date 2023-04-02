import React from 'react';

function SideListChild(props) {
  return (
    <div className={props.outer}>
    <div className='rectangle2452'>
    <div className='innerGroup'>
    <div className='vector'>
    <div className='vector'>
    <img src={props.imageSource} />
    </div>
    </div>

    <div className='parentContent'>
    {props.textContent}
    </div>
    </div>
    </div>
    </div>
  )
}

export default SideListChild;
