import React from 'react';

function PropertyList(props) {
  return (
    <div className={props.groupId}>
    <div className='propertyVector'>
      <img src={props.imageSource} />
    </div>
      <div className="details">
      {props.content}
      </div>
    </div>
  )
}

export default PropertyList;
