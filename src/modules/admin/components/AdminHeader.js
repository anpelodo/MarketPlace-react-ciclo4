import React from 'react';

import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <header>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <h1>Marketplace Admin product</h1>
        <Link style={{ paddingLeft: '5px' }} to="/">
          Store
        </Link>
      </nav>
    </header>
  );
}
