import React from "react";
import FilterLink from '../containers/filterLink'
import {VisibilityFilters} from '../actions'

const Footer = () => (

    <p>
        show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>

        {','}

        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>

        {','}

        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>

    </p>
)

export default footer