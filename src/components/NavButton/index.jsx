
import './style.scss';

export default ({page, title}) => (
    <li className="NavButton">
        <a href={page}>
            {title}
        </a>
    </li>
);