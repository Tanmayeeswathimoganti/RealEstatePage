import React from 'react';
import Ellipse from '../../assets/Ellipse1.svg';
import DownArrow from '../../assets/arrow-down-s-line.svg';

function Profile() {
  return (
    <div className='group7034'>
    <div className='group7031'>
    <div className='group7030'>
    <div className='profileName'>
    Berkay Erdinc
    </div>
    <div className='profileGmail'>
    hi@berkayerdinc.com
    </div>
    </div>
    <img src={Ellipse} />
    </div>

    <img src={DownArrow} className="downArrow"/>
    </div>
  )
}

export default Profile;
