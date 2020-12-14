export default ({title, children}) => ( 
    <div>
        <h2 id={title.toLowerCase().replace(" ", "-")}>{title}</h2>
        {children}
    </div>
);