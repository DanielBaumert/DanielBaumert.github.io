
import './style.scss';

export default ({children}) => (
    <div className=".content-nav" 
         data-bi-name="pageactions" 
         role="complementary" 
         aria-label="Page Actions">
        <div>
            <nav data-bi-name="intopic toc" 
                 role="navigation" 
                 aria-label="Article Outline">
                <h3>In this article</h3>
                <ol>
                    {children}
                </ol>
            </nav>
        </div>
    </div>
);