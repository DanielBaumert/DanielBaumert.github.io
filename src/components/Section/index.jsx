import './style.scss';

export default ({title, children}) => ( 
    <div className="Section">
        <h2 id={title.toLowerCase().replace(" ", "-")}>{title}</h2>
        {children}
    </div>
);