import React from 'react';
import PropertyList from './PropertyList';
import Apartment from '../../assets/apartment.svg';
import Bedroom from "../../assets/bedroom.svg";
import Bathroom from '../../assets/bathroom.svg';
import Car from "../../assets/car.svg";
import Home from "../../assets/home-2.svg";
import Square from "../../assets/format-square.svg";


function PropertyDetails() {
  return (
    <div className='propertyDetails'>
      <div className='propertyDetailsText'>
      Property Details
      </div>
      <PropertyList groupId="group7351" imageSource={Apartment} content="Apartment" />
      <PropertyList groupId="group7352" imageSource={Bedroom} content="3 Bedrooms" />
      <PropertyList groupId="group7353" imageSource={Bathroom} content="2 Bathrooms" />
      <PropertyList groupId="group7354" imageSource={Car} content="2 Garage" />
      <PropertyList groupId="group7355" imageSource={Home} content="1,963 sq. ft." />
      <PropertyList groupId="group7356" imageSource={Square} content="1,176 sq. ft." />

    </div>
  )
}

export default PropertyDetails;
