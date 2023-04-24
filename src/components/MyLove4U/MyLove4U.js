import React from 'react';
import myData from './myData.json';

function MyLove4U() {
  return (
    <div>
      {myData.myArray.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default MyLove4U;