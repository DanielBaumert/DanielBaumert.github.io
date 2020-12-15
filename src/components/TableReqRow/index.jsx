import './style.scss';

export default ({title, desc}) => (
    <tr className="TableReqRow"> 
        <td width="40%">
            <a id={title.toUpperCase()}></a>
            <a id={title.toLowerCase()}></a>
            <dl>
                <dt>
                    <b>{title}</b>
                </dt>
            </dl>
        </td>
        <td width="60%">{desc}</td>
    </tr>
);