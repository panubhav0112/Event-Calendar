import React from 'react';
import 'primeflex/primeflex.css';

function Footer() {
  return (
    <footer className='p-d-flex p-jc-center p-ai-center'>
      <p>
        <span className='p-mr-2'>Contribute on</span>
        <a
          href={'https://github.com/EddieHubCommunity/EventCalendar'}
          className='p-mr-2'
          aria-label='EddieHubCommunity EventCalendar repository on GitHub'
        >
          <i className='pi pi-github' aria-hidden='true'></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
