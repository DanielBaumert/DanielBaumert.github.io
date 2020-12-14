import { 
    SideNav, 
    NavButton,
    NavExpander
} from './../../components';

const X11Nav  = ["Screen"];

export default () => (
    <SideNav>
        <NavButton title="Home" page="/index.html"/>
        <NavExpander title="X11">
            {X11Nav.sort().map(x => (<NavButton key={x} title={x} page={`/x11/${x.replace("struct ", "")}`}/>))}
        </NavExpander>
    </SideNav>
);