import React from 'react';
import PropTypes from 'prop-types';

function NavSection(props) {
  const navSectionStyles = {
    width: '230px'
  };
  const navSectionLinkStyles = {
    display: 'block'
  };
  return(
    <div style={navSectionStyles}>
      <h5>{props.section.title}</h5>
      {props.section.links.map((link, index)=> {
        return(
          <a style={navSectionLinkStyles} href={link.link} key={index}>{link.linkName}</a>
        );
      })}
    </div>
  );
}

NavSection.propTypes = {
  section: PropTypes.object
};

export default NavSection;
