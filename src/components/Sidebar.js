import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';

function Sidebar({ children }) {
  console.log(children);
  return (
    <nav className={styles.sidebar}> 
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
