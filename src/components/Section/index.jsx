export default ({title}) => ( 
    <div>
        <h2 id={props.title.toLowerCase().replace(" ", "-")}>{props.title}</h2>
        {props.children}
    </div>
);