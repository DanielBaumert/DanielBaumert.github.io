import { useState } from 'react';

import './style.scss';

export default ({title, children}) => { 

    const [isExpanded, setExpanded] = useState(false);

    return (
        <li className={isExpanded ? "tree-item is-expanded" : "tree-item"} 
            aria-setsize="4" 
            aria-level="1" 
            aria-posinset="2" 
            role="treeitem" 
            tabIndex="0" 
            id="title-2-1" 
            aria-expanded="false"
            >
            <span data-bi-name="tree-expander" 
                  className="tree-expander">
                <span className="tree-expander-indicator docon docon-chevron-right-light" 
                      aria-hidden="true"
                      onClick={() => setExpanded(!isExpanded)}
                      >
                </span>
                {title}
            </span>
            <ul className="tree-group" 
                role="group">
                {children}
            </ul>
        </li>
    );
}