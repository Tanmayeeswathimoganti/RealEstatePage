import React from 'react';
import SideListChild from './SideListChild';
import map from "../../assets/direction-line.svg";
import direction from "../../assets/map.svg";
import share from "../../assets/share-line.svg";
import note from "../../assets/note-favorite.svg";
import Turkey from "../../assets/Turkey.svg";
import sms from "../../assets/sms.svg";

function SideAddList() {
  return (
    <div className='rectangle2449'>
      <div className='rectangle8'>
      <div className='forSale'>
      For Sale
      </div>
      </div>

      <div className='frame6450'>
      <div className='addList'>
      Add List
      </div>
      </div>

      <div className='mlsE5'>
      MLS#: E5579076
      </div>

      <div className='priceListed'>
      Listed for: <span className='priceBlue'>$1,549,586</span> 
      </div>

      <div className='address'>
      2118 Thornridge Cir. Syracuse, Connecticut 35624
      </div>


      <SideListChild outer='group7326' imageSource={map} textContent="View on Map"/>
      <SideListChild outer='group7327' imageSource={direction} textContent="Get Directions"/>
      <SideListChild outer='group7328' imageSource={share} textContent="Share"/>
      <SideListChild outer='group7329' imageSource={note} textContent="My Notes"/>

      <div class="group7437">
      <div className='group7339'>
      <div className='group6806'>
      Listing Agent
      </div>
      <div className='group6712'>
      <div className='group6227'>
      <img src={Turkey} />
      <div className="turkey">
      +90 552 489 8277
      </div> 
      </div>
      <div className='courtney'>
      Courtney Henry
      </div>
      </div>
      </div>

      <div className='sms-vector1'>
      <div className='sms-vector2'>
      <img src={sms} />
      </div>
      </div>
      </div>
    </div>
  )
}

export default SideAddList;
