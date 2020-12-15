import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

 import './style.scss';


// https://github.com/react-syntax-highlighter/react-syntax-highlighter

export default ({id, language, children}) => (
    <div className="PreformatterCode">
        <SyntaxHighlighter
            id={id || 'main-code'}
            style={vs2015}
            language={language || 'cpp'}
        >
            {children}
        </SyntaxHighlighter>
    </div>
);