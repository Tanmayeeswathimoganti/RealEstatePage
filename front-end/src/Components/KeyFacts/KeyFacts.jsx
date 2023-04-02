import React from 'react';
import RowComponent from './RowComponent';

function KeyFacts() {
  return (
    <React.Fragment>
    <div className='keyFactsMain'>
    Key Facts
    </div>
    <RowComponent groupId="group7359" leftContent="Tax" rightContent="$1,340 / 2022" />
    <RowComponent groupId="group7360" leftContent="Type" rightContent="Single-Family" />
    <RowComponent groupId="group7361" leftContent="Building Age" rightContent="5 Year" />
    <RowComponent groupId="group7362" leftContent="Size" rightContent="1500 - 2000 feet2" />
    <RowComponent groupId="group7363" leftContent="Parking" rightContent="Detached 2 Garage, 6 Parking" />
    <RowComponent groupId="group7364" leftContent="Basement" rightContent="Unfinished" />
    <RowComponent groupId="group7365" leftContent="MLS#" rightContent="E5579076" />
    <RowComponent groupId="group7366" leftContent="Possesion" rightContent="5 Day" />
    </React.Fragment>
  )
}

export default KeyFacts;
