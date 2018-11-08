import React from 'react';
import PropTypes from 'prop-types';

function NavSection(props) {
  console.log(props.section);
  return(
    <div>
      <h5>{props.section.title}</h5>
      {props.section.links.map((link, index)=> {
        return(
          <a href={link.link} key={index}>{link.linkName}</a>
        );
      })}
    </div>
  );
}

NavSection.propTypes = {
  section: PropTypes.object
};

export default NavSection;
