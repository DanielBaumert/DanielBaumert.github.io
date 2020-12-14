export default ({cols}) => (
    <tr> {cols.map(x => <th>{x}</th>)}</tr>
);