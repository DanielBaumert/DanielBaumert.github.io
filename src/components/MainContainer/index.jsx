
import { 
    ContentNav, 
    ContentNavButton 
} from "components";

import './style.scss';

export default ({children, nav}) => (
    <section className="MainContainer">
        <div>
            {children}
            <ContentNav>
                {nav.map(x => <ContentNavButton title={x}></ContentNavButton>)}
            </ContentNav>
        </div>
    </section>
);