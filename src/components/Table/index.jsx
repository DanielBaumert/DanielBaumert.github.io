import './style.scss';

export default ({children}) => ( 
    <div className="table-scroll-wrapper">
        <table className="table">
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
);