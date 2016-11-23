import React from 'react';
import { Link } from 'react-router'

export default ({ to, onClick, children, ...others }) => (
    <Link 
        onClick={onClick}
        to={`${__BASE_URL__}${to?to:''}`} 
        {...others}
    >
        {children}
    </Link>
);
