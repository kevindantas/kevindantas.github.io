import React, { PropTypes } from 'react';

const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <figure>
        <img src={props.image} alt={props.name}/>
        <figcaption>
          {props.name}
        </figcaption>
      </figure>
    </div>
  )
};

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProjectItem;