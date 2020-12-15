import './style.scss';

export default ({children, id}) => (
    <h1 className="PageTitle" id={id}>{children}</h1>
)