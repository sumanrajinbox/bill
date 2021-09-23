import React from 'react'


 const arr = [2, 4, 5, 6,];
  const   result = arr.reduce((acc, curr) => {
      return acc+curr ;
      
  },[1,2]);
console.log(result);

function Demo() {
         
    return (
        <h1>this is reduce function test    </h1>
    );
}

export default Demo
