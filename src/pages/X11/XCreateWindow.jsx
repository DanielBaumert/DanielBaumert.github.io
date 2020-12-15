import { 
    ParameterDescription,
    ParameterTitle,
    PageTitle,
    MainContainer, 
    Section,
    Table,
    PreformattedCode,
    TableReqRow
} from "components";

const constentNav =["Syntax", "Parameters", "Return Value"];

export default () => (
    <MainContainer nav={constentNav}>
        <PageTitle id="XCreateWindow-function">XCreateWindow</PageTitle>
        <p>XCreateWindow - create windows and window attributes structure</p>
        <Section title="Syntax">
            <PreformattedCode language="cpp">
{`Window XCreateWindow(
    Display *display, 
    Window parent, 
    int x, 
    int y, 
    unsigned int width, 
    unsigned int height, 
    unsigned int border_width, 
    int depth, 
    unsigned int class, 
    Visual *visual, 
    unsigned long valuemask, 
    XSetWindowAttributes *attributes
);`}
            </PreformattedCode>
        </Section>
        <Section title="Parameters">
            <ParameterTitle>display</ParameterTitle>
            <ParameterDescription>
                Specifies the connection to the X server.
            </ParameterDescription>
            <ParameterTitle>parent</ParameterTitle>
            <ParameterDescription>
                Specifies the parent window.
            </ParameterDescription>
            <ParameterTitle>x</ParameterTitle>
            <ParameterDescription>
                Specify the x coordinates, which are the top-left outside corner of the window’s borders and are relative to the inside of the parent window’s borders.
            </ParameterDescription>
            <ParameterTitle>y</ParameterTitle>
            <ParameterDescription>
                Specify the y coordinates, which are the top-left outside corner of the window’s borders and are relative to the inside of the parent window’s borders.
            </ParameterDescription>
            <ParameterTitle>width</ParameterTitle>
            <ParameterDescription>
                Specify the width, which are the created window’s inside dimensions and do not include the created window’s borders.
            </ParameterDescription>
            <ParameterTitle>height</ParameterTitle>
            <ParameterDescription>
                Specify the height, which are the created window’s inside dimensions and do not include the created window’s borders.
            </ParameterDescription>
            <ParameterTitle>border_width</ParameterTitle>
            <ParameterDescription>
                Specifies the border width in pixel value of the window.
            </ParameterDescription>
            <ParameterTitle>depth</ParameterTitle>
            <ParameterDescription>
                Specifies the window’s depth. A depth of CopyFromParent means the depth is taken from the parent.
            </ParameterDescription>
            <ParameterTitle>class</ParameterTitle>
            <ParameterDescription>
                Specifies the created window’s class. 
                You can pass InputOutput, InputOnly, or CopyFromParent. 
                A class of CopyFromParent means the class is taken from the parent.
            </ParameterDescription>
            <ParameterTitle>visual</ParameterTitle>
            <ParameterDescription>
                Specifies the visual type. A visual of CopyFromParent means the visual type is taken from the parent.
            </ParameterDescription>
            <ParameterTitle>valuemask</ParameterTitle>
            <ParameterDescription>
                Specifies which window attributes are defined in the attributes argument. 
                This mask is the bitwise inclusive OR of the valid attribute mask bits. 
                If valuemask is zero, the attributes are ignored and are not referenced.
            </ParameterDescription>
            <ParameterTitle>attributes</ParameterTitle>
            <ParameterDescription>
                Specifies the structure from which the values (as specified by the value mask) are to be taken. 
                The value mask should have the appropriate bits set to indicate which attributes have been set in the structure.
            </ParameterDescription>
        </Section>
        <Section title="Remark">
            The XCreateWindow function creates an unmapped subwindow for a specified parent window, returns the window ID of the created window, and causes the X server to generate a CreateNotify event. 
            The created window is placed on top in the stacking order with respect to siblings.
            <br/>
            <br/>
            The coordinate system has the X axis horizontal and the Y axis vertical with the origin [0, 0] at the upper-left corner. 
            Coordinates are integral, in terms of pixels, and coincide with pixel centers. 
            Each window and pixmap has its own coordinate system. 
            For a window, the origin is inside the border at the inside, upper-left corner.
            <br/>
            <br/>
            The border_width for an InputOnly window must be zero, or a BadMatch error results. 
            For class InputOutput, the visual type and depth must be a combination supported for the screen, or a BadMatch error results. 
            The depth need not be the same as the parent, but the parent must not be a window of class InputOnly, or a BadMatch error results. 
            For an InputOnly window, the depth must be zero, and the visual must be one supported by the screen. 
            If either condition is not met, a BadMatch error results. The parent window, however, may have any depth and class. 
            If you specify any invalid window attribute for a window, a BadMatch error results.
            <br/>
            <br/>
            The created window is not yet displayed (mapped) on the user’s display. 
            To display the window, call XMapWindow. The new window initially uses the same cursor as its parent. 
            A new cursor can be defined for the new window by calling XDefineCursor. 
            The window will not be visible on the screen unless it and all of its ancestors are mapped and it is not obscured by any of its ancestors.
            <br/>
            <br/>
            XCreateWindow can generate BadAlloc BadColor, BadCursor, BadMatch, BadPixmap, BadValue, and BadWindow errors.
            <br/>
            <br/>
            The XCreateSimpleWindow function creates an unmapped InputOutput subwindow for a specified parent window, 
            returns the window ID of the created window, and causes the X server to generate a CreateNotify event. 
            The created window is placed on top in the stacking order with respect to siblings. Any part of the window that extends outside its parent window is clipped. 
            The border_width for an InputOnly window must be zero, or a BadMatch error results. 
            XCreateSimpleWindow inherits its depth, class, and visual from its parent. All other window attributes, except background and border, have their default values.
            <br/>
            <br/>
            XCreateSimpleWindow can generate BadAlloc, BadMatch, BadValue, and BadWindow errors.
        </Section>
        <Section title="Return value">
        </Section>
        <Section title="Requirements">
            <hr/>
            <Table>
                <TableReqRow title="Header" desc="windef.h (include Windows.h)"/>
            </Table>
        </Section>
    </MainContainer>
);