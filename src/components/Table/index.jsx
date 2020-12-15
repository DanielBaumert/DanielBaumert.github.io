import './style.scss';

export default ({children}) => ( 
    <div className="Table">
        <table>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
);