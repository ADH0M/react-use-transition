import React from "react";

interface Props {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  isPending?: boolean;
}

const Tab: React.FC<Props> = ({ children, isActive, onClick, isPending }) => {
  return (
    <button 
      className={`tab-btn ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;