import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ 
    children,
  }) => { 
  return (
    <button 
      style={{
         height: "auto",
         width: "auto",
         padding: "2px 6px",
         backgroundColor:"#fdba74",
         color: "#000000",
         border: "outset",
         borderColor: "#fed7aa",
      }}
    >
    {children}
    </button>
  );
}

export default Button;