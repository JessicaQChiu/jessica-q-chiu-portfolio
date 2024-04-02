import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    children,
    onClick
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         height: "auto",
         width: "auto",
         padding: "2px 6px",
         backgroundColor:"#fdba74",
         border: "outset",
         borderColor: "#fed7aa",
      }}
    >
    {children}
    </button>
  );
}

export default Button;