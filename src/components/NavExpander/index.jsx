import React, { useState }  from 'react';

import './style.scss';


export default ({title, children}) => { 

    const [isExpanded, setExpanded] = useState(true);

    return (
        <li className={`NavExpander ${isExpanded ? "expanded" : "" }`}>
            <span onClick={() => setExpanded(!isExpanded)}>
                <span/>
                {title}
            </span>
            <ul>
                {children}
            </ul>
        </li>
    );
}