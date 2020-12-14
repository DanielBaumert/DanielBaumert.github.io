import './style.scss';

export default ({children}) => (
    <div className="SideNav">
        <nav>
            <ul>
                {children}
            </ul>
        </nav>
    </div>
);