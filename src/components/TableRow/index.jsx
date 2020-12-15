import './style.scss';

export default ({cols}) => (
    <tr className="TableRow"> {cols.map(x => <td>{x}</td>)}</tr>
)