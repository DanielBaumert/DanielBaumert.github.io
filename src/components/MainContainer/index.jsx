
import { default as ContentNav } from "../ContentNav";
import { default as ContentNavButton } from "../ContentNavButton";

export default ({children, nav}) => (
    <section className="primary-holder column is-three-quarters-desktop">
        <div className="columns is-gapless-mobile has-large-gaps ">
            <div id="main-column" className="column  is-full is-four-fifths-desktop ">
                {children}
            </div>
            <ContentNav>
                {nav.map(x => <ContentNavButton title={x}></ContentNavButton>)}
            </ContentNav>
        </div>
    </section>
);