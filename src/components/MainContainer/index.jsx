
import { 
    ContentNav, 
    ContentNavButton,
    ContentContainer
} from "components";

import './style.scss';

export default ({children, nav}) => (
    <section className="MainContainer">
        <div>
            <ContentContainer>
                {children}
            </ContentContainer>
            <ContentNav>
                {nav.map(x => <ContentNavButton title={x}></ContentNavButton>)}
            </ContentNav>
        </div>
    </section>
);