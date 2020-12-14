export default ({title, value, desc}) => (
    <tr>
        <td width="40%">
            <a id={title.toUpperCase()}></a>
            <a id={title.toLowerCase()}></a>
            <dl>
                <dt>
                    <b>{title}</b>
                </dt>
                <dt>{value}</dt>
            </dl>
        </td>
        <td width="60%">{desc}</td>
    </tr>
)