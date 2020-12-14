export default ({cols}) => (
    <tr> {cols.map(x => <td>{x}</td>)}</tr>
)