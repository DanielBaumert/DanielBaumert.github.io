export default ({title}) => (
    <li className="ContentNavButton">
        <a href={`#${title.toLowerCase().replace(" ", "-")}`}>{title}</a>
    </li>
);