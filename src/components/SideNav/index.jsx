export default ({children}) => (
    <div id="left-container" 
         className="left-container is-hidden-mobile column">
        <nav id="affixed-left-container" 
             className="is-fixed is-flex is-flex-column" 
             role="navigation" 
             aria-label="Primary" 
             data-bi-name="left toc">
            <ul className="tree is-vertically-scrollable has-flex-grow has-flex-shrink" 
                role="tree" 
                aria-label="Table of contents" 
                data-bi-name="tree" 
                data-is-collapsible="true">
                {children}
            </ul>
        </nav>
    </div>
);