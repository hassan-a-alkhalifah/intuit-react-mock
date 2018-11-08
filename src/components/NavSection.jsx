import React from 'react';
import PropTypes from 'prop-types';

function NavSection(props) {
  const navSectionStyles = {
    width: '230px',
    borderBottom: '1px solid #d4d7dc'
  };
  const navSectionHeaderStyles = {
    fontWeight: '900',
    padding: '10px 0',
    fontSize: '16px',
    color: '#8d9096'
  };
  const navSectionLinkStyles = {
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    padding: '10px 0'
  };
  return(
    <div style={navSectionStyles}>
      <h5 style={navSectionHeaderStyles}>{props.section.title}</h5>
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
