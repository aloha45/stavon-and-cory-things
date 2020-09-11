import React from 'react';
import StavonThing from '../../components/StavonThing/StavonThing'

const StavonsThings = (props) => {
  return ( 
    <>
      <h1>Stavon's Things</h1>
      {props.stavonsThings.map((thing, idx) => 
        <StavonThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default StavonsThings;