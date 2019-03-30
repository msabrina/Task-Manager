import React from 'react';
import PropTypes from 'prop-types';


const FilterBar = ({ active, children, onClick }) => (
  <div>

    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
      className="button"
      >

        {children}
      </button>

  </div>
)

FilterBar.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

export default FilterBar;
