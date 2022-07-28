import React, { useEffect, useLayoutEffect, useRef } from 'react';

import './useLayoutEffect.css';

const UseLayoutEffect = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // will run after everything is rendered.
    inputRef.current.value = 'Nilay';
  });

  useLayoutEffect(() => {
    // will run before everything is rendered.
    console.log(inputRef.current.value);
  });

  return (
    <div className="container">
      <input placeholder="" value="Vaghela" ref={inputRef} />
    </div>
  );
};

export default UseLayoutEffect;
