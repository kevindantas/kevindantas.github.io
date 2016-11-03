import React, { PropTypes } from 'react';
import './Button.scss'

const Button = (props) => {

  let content = props.children ? props.children : props.label;


  if(props.href) {
    return (
      <a { ...props } className="Button" href={props.href}>{ content }</a>
    );
  }



  return (
    <button { ...props } className="Button">{ content }</button>
  )

};


// Component validations
Button.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};

export default Button;