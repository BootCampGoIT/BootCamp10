import React from "react";
import PropTypes from "prop-types";

const ModuleListItem = ({ moduleItem }) => {
  const { name, repository } = moduleItem;
  return (
    <li key={name}>
      <h3>{name || "No name"}</h3>
      {/* <iframe
                  width='560'
                  height='315'
                  src={webinar}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe> */}
      <a href={repository}>Reference</a>
    </li>
  );
};

ModuleListItem.propTypes = {
  moduleItem: PropTypes.shape({
    repository: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default ModuleListItem;
