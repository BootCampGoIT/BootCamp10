import React from "react";
import ModuleListItem from "./moduleListItem/ModuleListItem";
import PropTypes from "prop-types";

const ModuleList = ({ modules }) => {
  return (
    <>
      {modules.length ? (
        <ul className='modulesList' style={{ display: "flex" }}>
          {modules.map((moduleItem) => (
            <ModuleListItem moduleItem={moduleItem} key={moduleItem.name} />
          ))}
        </ul>
      ) : (
        <p>No modules</p>
      )}
    </>
  );
};

ModuleList.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ModuleList;

