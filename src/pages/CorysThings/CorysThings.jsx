import React from 'react';
import CoryThing from '../../components/CoryThing/CoryThing'

const CorysThings = (props) => {
  return ( 
    <>
      <h1>Corys's Things</h1>
      {props.CorysThings.map((thing, idx) => 
        <CoryThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default CorysThings;