import { 
    SideNav, 
    NavButton,
    NavExpander
} from './../../components';

const X11Nav  = ["XCreateWindow"];

export default () => { 
    const subNav = X11Nav.sort()
                         .map(x => <NavButton key={x} title={x} page={`/#/x11/${x.replace("struct ", "")}`}/>);
    return (
        <SideNav>
            <NavButton title="Home" page="/index.html"/>
            <NavExpander title="X11">
                {subNav}
            </NavExpander>
        </SideNav>
    );
}