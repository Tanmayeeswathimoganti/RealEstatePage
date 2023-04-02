import React from 'react';

function RowComponent(props) {
  return (
    <div className={props.groupId}>
    <div className="rectangle">
    
    </div>
    <div className='columnLeft'>
    {props.rightContent}
    </div>
    <div className="columnRight">
    {props.leftContent}
    </div>
    </div>
  )
}

export default RowComponent;