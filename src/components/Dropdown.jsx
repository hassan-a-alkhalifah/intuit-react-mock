import React from 'react';
import PropTypes from 'prop-types';
import NavSection from './NavSection';

function Dropdown(category) {

  return(
    <div className="category">
      <style global jsx>{`
        .category  {
          width: 100px;
          display: inline-block;
        }
        .category:nth-child(1)  {
          z-index: 555;
        }
        .category:nth-child(2)  {
          z-index: 510;
          margin-left: 5px;
        }
        .category:nth-child(3)  {
          z-index: 515;
          margin-left: 115px;
        }
        .category:nth-child(3) .dropdownMenu div h5 {
          display: none;
        }
        .category .dropdownMenu div:last-child {
          border-bottom: none!important;
        }
        .category:hover .dropdownMenu{
          display: inline-block;
          border-top: solid 4px #0077c5;
        }
        .category:hover p{
          font-weight: 900;
        }
        .dropdownMenu {
          display: none;
          background-color: #FFF;
          border-left: 1px solid #d4d7dc;
          border-right: 1px solid #d4d7dc;
          border-bottom: 1px solid #d4d7dc;
          margin-top: 15px;
          box-shadow: 0px 1px 6px -1px rgba(0,0,0,0.3);
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
