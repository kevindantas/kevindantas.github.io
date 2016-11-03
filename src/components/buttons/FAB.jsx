import React, { PropTypes } from 'react';

import './FAB.scss'

const FAB = (props) => {

  let content = props.children ? props.children : props.label;

  return (
    <button className="FAB" {...props}>{ content }</button>
  );
};


// Component validations
FAB.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};

export default FAB;