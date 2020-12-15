import './style.scss';

export default ({children}) => (
    <tr className="TableRowHeader"> {children.map(x => <th>{x}</th>)}</tr>
);