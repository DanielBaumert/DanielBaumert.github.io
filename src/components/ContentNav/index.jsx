
import './style.scss';

export default ({children}) => (
    <div className="ContentNav">
        <div>
            <nav>
                <h3>In this article</h3>
                <ol>
                    {children}
                </ol>
            </nav>
        </div>
    </div>
);