// src/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: (event: any) => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  const OnButtonClick=(event: any)=>{
    if(disabled){
      //do nothing since the button is disabled
    }
    else{
      onClick(event);
    }
  }
  return (
    <button onClick={OnButtonClick} className={`${!disabled? 'can-click': ''}`}>
      {label}
    </button>
  );
};

export default Button;
