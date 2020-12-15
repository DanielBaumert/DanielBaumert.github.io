import ReactDOM from 'react-dom';
import './style.scss';

export default ({title}) => { 
    const hash = title.toLowerCase().replace(" ", "-");

    function onClickHandle(e) { 
        let node = document.getElementById(hash);
        if(node) { 
            node.scrollIntoView();            
        }
    }
    return (    
        <li className="ContentNavButton" >
        <a onClick={onClickHandle}>{title}</a>
        </li>
    );  
} 