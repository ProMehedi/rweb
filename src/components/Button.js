import React from 'react';
import '../assets/css/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];

const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor}) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkBtnColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkBtnStyle} ${checkBtnColor} ${checkBtnSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button