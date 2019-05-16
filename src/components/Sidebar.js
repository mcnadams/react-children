import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';

function Sidebar({ links }) {
  console.log(links);
  return (
    <nav className={styles.sidebar}> 
      {links}
    </nav>
  );
}

Sidebar.propTypes = {
  links: PropTypes.node
};

export default Sidebar;
