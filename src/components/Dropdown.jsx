import React from 'react';
import PropTypes from 'prop-types';
import NavSection from './NavSection';

function Dropdown(category) {

  return(
    <div className="category">
      <style jsx>{`
        .category  {
          width: 100px;
          display: inline-block;
        }
        .category:nth-child(1)  {
          z-index: 5;
        }
        .category:nth-child(2)  {
          z-index: 10;
          margin-left: 5px;
        }
        .category:nth-child(3)  {
          z-index: 15;
          margin-left: 115px;
        }
        .category:hover .dropdownMenu{
          display: inline-block;
        }
        .dropdownMenu {
          display: none;
          background-color: #FFF;
          border-left: 1px solid #d4d7dc;
          border-right: 1px solid #d4d7dc;
          border-bottom: 1px solid #d4d7dc;
          margin-top: 19px;
        }
      `}</style>
      <p>{category.category[0]}</p>
      <div className="dropdownMenu">
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

    </div>

  );
}

Dropdown.propTypes = {
  category: PropTypes.array
};

export default Dropdown;
