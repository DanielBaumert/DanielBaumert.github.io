export default ({title}) => (
    <li>
        <a href={`#${title.toLowerCase().replace(" ", "-")}`}>{title}</a>
    </li>
);