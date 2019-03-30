import React from 'react';
import FilterLink from '../containers/FilterLinks';
import { FilterStatus } from '../actions';

const Filter = () => (
  <div>

    <FilterLink filter={FilterStatus.SHOW_ALL}>List</FilterLink>
    <FilterLink filter={FilterStatus.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={FilterStatus.SHOW_COMPLETED}>Complted</FilterLink>

  </div>

)


export default Filter;
