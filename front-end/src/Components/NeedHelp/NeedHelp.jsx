import React from 'react';
import messageQuestion from '../../assets/message-question.svg';

function NeedHelp() {
  return (
    <div className="NeedHelp">
    <div className="needHelpContent">
    Need Help?
    </div>

    <div className="helpDesk">
    <div className='helpDeskContent'>
    Help Desk
    </div>

    <img src={messageQuestion} />
    </div>
    </div>
  )
}

export default NeedHelp;
