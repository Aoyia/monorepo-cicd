import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'primary' | 'default' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick,
  type = 'primary' 
}) => {
  // 根据按钮类型设置颜色
  const getBackgroundColor = () => {
    switch(type) {
      case 'primary': return '#4CAF50';
      case 'danger': return '#f44336';
      default: return '#e7e7e7';
    }
  };
  
  const getTextColor = () => {
    return type === 'default' ? '#000000' : '#ffffff';
  };

  return (
    <button 
      style={{ 
        padding: '10px 15px', 
        backgroundColor: getBackgroundColor(), 
        color: getTextColor(),
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease'
      }} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};