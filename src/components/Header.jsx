import React from 'react';
import Dropdown from './Dropdown';

const dropDownLinksByCategory = {
  'Products': [
    {
      title: 'Individuals',
      links: [
        {
          'linkName': 'QuickBooks Self-Employed',
          'link': 'http://quickbooks.intuit.com/self-employed/?sc=seq_intuit_qbse_click_nav'
        },
        {
          'linkName': 'Mint',
          'link': 'https://mint.intuit.com/login.event?task=S&utm_medium=intuit_home&utm_source=nav_products'
        }
      ]
    },
    {
      title: 'For Small Businesses',
      links: [
        {
          'linkName': 'QuickBooks',
          'link': 'https://quickbooks.intuit.com/?sc=seq_intuit_qb_click_nav'
        },
      ]
    }

  ],
  'Support_and_Communities': [
    {
      title: 'Product Support',
      links: [
        {
          'linkName': 'Turbotax Support',
          'link': 'http://quickbooks.intuit.com/self-employed/?sc=seq_intuit_qbse_click_nav'
        },
      ]
    },
    {
      title: 'Blogs',
      links: [
        {
          'linkName': 'Intuit',
          'link': 'http://www.intuitblog.com/'
        },
      ]
    }
  ],
  'Company': [
    {
      links: [
        {
          'linkName': 'About Intuit',
          'link': 'http://quickbooks.intuit.com/self-employed/?sc=seq_intuit_qbse_click_nav'
        },
      ]
    }
  ]
};

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
    },
    intuitLogo: {
      width: '113px',
      backgroundPosition: '-318px -1px'
    }
  };

  return(
    <div>
      <div className="headerTop">
        <style jsx>{`
            .headerTop{
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid grey;
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
      <div className="headerBottom">
        <a style={Object.assign({}, HeaderStyles.intuitLogo, HeaderStyles.logoStyle)} href='#'>
        </a>
        {Object.entries(dropDownLinksByCategory).map((category, index) => {
          return(
            <Dropdown
              category={category}
              key={index}
            />
          );
        })}

      </div>
    </div>
  );
}

export default Header;
