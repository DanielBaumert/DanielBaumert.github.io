
import './style.scss';

export default ({page, title}) => (
    <li role="none">
        <a aria-setsize="41" 
           aria-level="2" 
           aria-posinset="1" 
           role="treeitem" 
           tabIndex="-1" 
           className="tree-item is-leaf"
           data-bi-name="tree-leaf" 
           href={page}>
            {title}
        </a>
    </li>
);