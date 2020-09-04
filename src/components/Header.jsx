import React from 'react'
import '../css/Header.css'
import { Link } from '@reach/router';

  function Header() {
    return (
      <div className="header">
        <Link to='/'>
        <h1>NC News</h1>
        </Link>
      </div>
    );
  }

export default Header
