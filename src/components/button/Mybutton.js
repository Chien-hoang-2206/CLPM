import React from 'react';
import './style.css'
export function Button({ onClick, children }) {
  return (
     <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
