import React from 'react';

function Header() {
  const HeaderStyles = {
    logoStyle: {
      height: '26px',
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      backgroundImage: 'url(https://www.intuit.com/etc/designs/phoenix/img/icom-global-sprite.svg)'
    },
    turbotaxLogo: {
      width: '80px',
      backgroundPosition: '-668px -36px',
    },
    proconnectLogo: {
      width: '99px',
      backgroundPosition: '-668px -115px',
    },
    mintLogo: {
      width: '54px',
      backgroundPosition: '-668px -156px',
    },
    quickbooksLogo: {
      width: '96px',
      backgroundPosition: '-670px -75px',
    }
  }

  return(
    <div className="container">
      <style jsx>{`
          .container {
            display: flex;
          }
      `}</style>
      <div>
        <a style={Object.assign({}, HeaderStyles.turbotaxLogo, HeaderStyles.logoStyle)} href='#'>
        </a>
        <a style={Object.assign({}, HeaderStyles.proconnectLogo, HeaderStyles.logoStyle)} href='#'>
        </a>
        <a style={Object.assign({}, HeaderStyles.quickbooksLogo, HeaderStyles.logoStyle)} href='#'>
        </a>
        <a style={Object.assign({}, HeaderStyles.mintLogo, HeaderStyles.logoStyle)} href='#'>
        </a>
      </div>
      <p>English(US)</p>
    </div>
  );
}

export default Header;
