import React from 'react';

function ShortCutList2(props) {
  return (
    <div className={props.outer}>
    <div className={props.inner}>
    <div className='innerGroup'>
    <div className='vector'>
    <div className='vector'>
    <img src={props.imageSource} />
    </div>
    </div>

    <div className={props.textParent}>
    {props.textContent}
    </div>
    </div>
    </div>
    </div>
  )
}

export default ShortCutList2;
