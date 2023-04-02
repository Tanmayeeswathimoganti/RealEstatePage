import React from 'react';
import fatRows from '../../assets/fatrows.svg';
import ShortCutList from './ShortCutList';
import ShortCutList2 from './ShortCutList2';
import key from "../../assets/key.svg";
import historyLine from '../../assets/history-line.svg';
import donut from "../../assets/donut-chart-line.svg";
import locationTick from "../../assets/location-tick.svg";

function Shortcuts() {
  return (
    <div className='rectangle2448'>
    <div className='shortcuts'>
    Shortcuts
    </div>
    <div className='frame6448'>
    <div className='fatrows-vector1'>
    <div className='fatrows-vector2'>
    <img src={fatRows} className="fatRowsImage"/>
    </div>
    </div>
    </div>
    <ShortCutList />
    <ShortCutList2 outer='group7322' inner='rectangle2452'  imageSource={historyLine} textParent="parentContent" textContent="Property History"/>
    <ShortCutList2 outer='group7323' inner='rectangle2453' imageSource={key} textParent="keyFacts" textContent="Key Facts"/>
    <ShortCutList2 outer='group7324' inner='rectangle2452' imageSource={donut} textParent="parentContent" textContent="Demographics"/>
    <ShortCutList2 outer='group7325' inner='rectangle2452' imageSource={locationTick} textParent="parentContent" textContent="Points of interest"/>
    </div>
  )
}
export default Shortcuts;