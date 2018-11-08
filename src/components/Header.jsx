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
        },
        {
          'linkName': 'TurboTax',
          'link': 'https://turbotax.intuit.com/?cid=seq_intuit_tt_click_nav'
        },
        {
          'linkName': 'Turbo',
          'link': 'https://turbo.intuit.com/?cid=seq_intuit_turbo_click_nav'
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
        {
          'linkName': 'Checks and Supplies',
          'link': 'http://www.intuitmarket.com/IMCOMSUBNAV16'
        },
        {
          'linkName': 'Payroll',
          'link': 'http://payroll.intuit.com/?sc=seq_intuit_proll_click_nav'
        },
        {
          'linkName': 'Payments',
          'link': 'https://payments.intuit.com/payment-processing/?sc=seq_intuit_pay_click_nav'
        },
      ]
    },
    {
      title: 'Accountants',
      links: [
        {
          'linkName': 'ProConnect Tax Online',
          'link': 'https://proconnect.intuit.com/tax-online/?s_cid=Intuit.com_Products-nav_TaxOnline'
        },
        {
          'linkName': 'ProSeries',
          'link': 'https://proconnect.intuit.com/proseries/?s_cid=Intuit.com_Products-nav_ProSeries'
        },
        {
          'linkName': 'Lacerte',
          'link': 'https://proconnect.intuit.com/lacerte/?s_cid=Intuit.com_Products-nav_Lacerte'
        },
        {
          'linkName': 'QuickBooks Accountants',
          'link': 'http://quickbooks.intuit.com/accountants/?sc=intuitcom_homepage_topnav_qbaccts'
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
        {
          'linkName': 'QuickBooks Support',
          'link': 'https://support.quickbooks.intuit.com/support/'
        },
        {
          'linkName': 'ProConnect Support',
          'link': 'https://accountants-community.intuit.com/products/proconnect-help-en-us/?s_cid=INTUIT.COM_Homepage_Productsupport'
        },
        {
          'linkName': 'Mint Community',
          'link': 'https://mint.lc.intuit.com/mint'
        }
      ]
    },
    {
      title: 'Blogs',
      links: [
        {
          'linkName': 'Intuit',
          'link': 'http://www.intuitblog.com/'
        },
        {
          'linkName': 'TurboTax',
          'link': 'http://blog.turbotax.intuit.com/'
        },
        {
          'linkName': 'QuickBooks',
          'link': 'http://quickbooks.intuit.com/blog/'
        },
        {
          'linkName': 'Tax Pro Center for Accountants',
          'link': 'https://taxprocenter.proconnect.intuit.com/?s_cid=intuit.com_Homepage_taxprocenter'
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
        {
          'linkName': 'Careers',
          'link': 'https://www.intuit.com/company'
        },
        {
          'linkName': 'Investor Relations',
          'link': 'https://investors.intuit.com/'
        },
        {
          'linkName': 'Contact Us',
          'link': 'https://www.intuit.com/company/contact'
        }
      ]
    }
  ]
};

function Header() {

  const HeaderStyles = {

    logoStyle: {
      height: '33px',
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
    },
    headerSubBottom: {
      display: 'flex',
      marginTop: '17px',
      width: '750px',
      height: '100%',
      marginLeft: '-10px'
    }
  };

  return(
    <div className="header">
      <style jsx>{`
          .headerTop{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #d4d7dc;
          }
          .header {
            font-family: 'Lato', sans-serif;
          }
          .headerBottom {
            border-bottom: 1px solid #d4d7dc;
            height: 55px;
            overflow: visible;
            display: inline-block;
            width: 100%;
            font-size: 16px;
          }
          .listHeaders {
            display: flex;
            justify-content: space-between;
            width: 450px;
            marginLeft: 100px;
          }
          `}</style>
      <div className="headerTop">
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
        <div style={HeaderStyles.headerSubBottom}>
          <a style={Object.assign({}, HeaderStyles.intuitLogo, HeaderStyles.logoStyle)} href='#'>
          </a>
          <div className="listHeaders">
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
      </div>
    </div>
  );
}

export default Header;
