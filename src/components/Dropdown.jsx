import React from 'react';
import PropTypes from 'prop-types';
import NavSection from './NavSection';

function Dropdown(category) {

  return(
    <div>
      <p>{category.category[0]}</p>

      {Object.entries(category.category[1]).map((section, index) => {
        return(
          <NavSection
            section={category.category[1][index]}
            pos={index}
            key={index}
          />
        );
      })}

    </div>

  );
}

Dropdown.propTypes = {
  category: PropTypes.array
};

export default Dropdown;
