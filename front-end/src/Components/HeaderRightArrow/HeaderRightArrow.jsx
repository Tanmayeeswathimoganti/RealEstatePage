import React from 'react';  
import leftArrow from "../../assets/Group7236.svg";
import Thornridge from "../../assets/ThornridgeCirE5579076.svg";

function HeaderRightArrow() {
  return (
    <div className="HeaderRightArrow">
      <div className="Group7236">
      <img src={leftArrow} className="thorEdgeLeftArrow"/>
      <img src={Thornridge} className="thornEdge"/>
      </div>
    </div>
  )
}

export default HeaderRightArrow;
