(this["webpackJsonpfacebamm.github.io"]=this["webpackJsonpfacebamm.github.io"]||[]).push([[0],{253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),c=n.n(r),s=n(17),a=n.n(s),d=(n(29),n.p,n(21)),o=n(2),h=(n(30),function(e){var t=e.children;return Object(i.jsx)("div",{className:"ContentContainer",children:Object(i.jsx)("main",{children:t})})}),l=(n(31),function(e){var t=e.children;return Object(i.jsx)("div",{className:"ContentNav",children:Object(i.jsx)("div",{children:Object(i.jsxs)("nav",{children:[Object(i.jsx)("h3",{children:"In this article"}),Object(i.jsx)("ol",{children:t})]})})})}),j=(n(32),function(e){var t=e.title;return Object(i.jsx)("li",{className:"ContentNavButton",children:Object(i.jsx)("a",{href:"#".concat(t.toLowerCase().replace(" ","-")),children:t})})}),u=(n(33),function(e){var t=e.children,n=e.nav;return Object(i.jsx)("section",{className:"MainContainer",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{children:t}),Object(i.jsx)(l,{children:n.map((function(e){return Object(i.jsx)(j,{title:e})}))})]})})}),b=(n(34),function(e){var t=e.page,n=e.title;return Object(i.jsx)("li",{className:"NavButton",children:Object(i.jsx)("a",{href:t,children:n})})}),p=n(23),w=(n(35),function(e){var t=e.title,n=e.children,c=Object(r.useState)(!0),s=Object(p.a)(c,2),a=s[0],d=s[1];return Object(i.jsxs)("li",{className:"NavExpander ".concat(a?"expanded":""),children:[Object(i.jsxs)("span",{onClick:function(){return d(!a)},children:[Object(i.jsx)("span",{}),t]}),Object(i.jsx)("ul",{children:n})]})}),x=(n(36),function(e){var t=e.children,n=e.id;return Object(i.jsx)("h1",{className:"PageTitle",id:n,children:t})}),O=(n(37),function(e){var t=e.children;return Object(i.jsx)("p",{className:"ParameterDescription",children:t})}),f=(n(38),function(e){var t=e.children;return Object(i.jsx)("p",{className:"ParameterTitle",children:Object(i.jsx)("code",{children:t})})}),m=n(273),v=n(272),y=(n(39),function(e){var t=e.id,n=e.language,r=e.children;return Object(i.jsx)("div",{className:"PreformatterCode",children:Object(i.jsx)(m.a,{id:t||"main-code",style:v.a,language:n||"cpp",children:r})})}),g=(n(253),function(e){var t=e.children;return Object(i.jsx)("div",{className:"RootContainer",children:Object(i.jsx)("div",{children:t})})}),C=(n(254),function(e){var t=e.title,n=e.children;return Object(i.jsxs)("div",{className:"Section",children:[Object(i.jsx)("h2",{id:t.toLowerCase().replace(" ","-"),children:t}),n]})}),S=(n(255),function(e){var t=e.children;return Object(i.jsx)("div",{className:"SideNav",children:Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{children:t})})})}),N=(n(256),function(e){var t=e.children;return Object(i.jsx)("div",{className:"Table",children:Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:t})})})}),B=(n(257),n(258),n(259),function(e){var t=e.title,n=e.desc;return Object(i.jsxs)("tr",{className:"TableReqRow",children:[Object(i.jsxs)("td",{width:"40%",children:[Object(i.jsx)("a",{id:t.toUpperCase()}),Object(i.jsx)("a",{id:t.toLowerCase()}),Object(i.jsx)("dl",{children:Object(i.jsx)("dt",{children:Object(i.jsx)("b",{children:t})})})]}),Object(i.jsx)("td",{width:"60%",children:n})]})}),T=(n(260),function(){return Object(i.jsx)(u,{nav:[],children:Object(i.jsx)(h,{children:Object(i.jsx)("h1",{children:"Linux documentation by Facebamm"})})})}),k=["Syntax","Parameter","Return Value"],X=function(){return Object(i.jsxs)(u,{nav:k,children:[Object(i.jsx)(x,{id:"XCreateWindow-function",children:"XCreateWindow"}),Object(i.jsx)("p",{children:"XCreateWindow - create windows and window attributes structure"}),Object(i.jsx)(C,{title:"Syntax",children:Object(i.jsx)(y,{language:"cpp",children:"Window XCreateWindow(\n    Display *display, \n    Window parent, \n    int x, \n    int y, \n    unsigned int width, \n    unsigned int height, \n    unsigned int border_width, \n    int depth, \n    unsigned int class, \n    Visual *visual, \n    unsigned long valuemask, \n    XSetWindowAttributes *attributes\n);"})}),Object(i.jsxs)(C,{title:"Parameters",children:[Object(i.jsx)(f,{children:"display"}),Object(i.jsx)(O,{children:"Specifies the connection to the X server."}),Object(i.jsx)(f,{children:"parent"}),Object(i.jsx)(O,{children:"Specifies the parent window."}),Object(i.jsx)(f,{children:"x"}),Object(i.jsx)(O,{children:"Specify the x coordinates, which are the top-left outside corner of the window\u2019s borders and are relative to the inside of the parent window\u2019s borders."}),Object(i.jsx)(f,{children:"y"}),Object(i.jsx)(O,{children:"Specify the y coordinates, which are the top-left outside corner of the window\u2019s borders and are relative to the inside of the parent window\u2019s borders."}),Object(i.jsx)(f,{children:"width"}),Object(i.jsx)(O,{children:"Specify the width, which are the created window\u2019s inside dimensions and do not include the created window\u2019s borders."}),Object(i.jsx)(f,{children:"height"}),Object(i.jsx)(O,{children:"Specify the height, which are the created window\u2019s inside dimensions and do not include the created window\u2019s borders."}),Object(i.jsx)(f,{children:"border_width"}),Object(i.jsx)(O,{children:"Specifies the border width in pixel value of the window."}),Object(i.jsx)(f,{children:"depth"}),Object(i.jsx)(O,{children:"Specifies the window\u2019s depth. A depth of CopyFromParent means the depth is taken from the parent."}),Object(i.jsx)(f,{children:"class"}),Object(i.jsx)(O,{children:"Specifies the created window\u2019s class. You can pass InputOutput, InputOnly, or CopyFromParent. A class of CopyFromParent means the class is taken from the parent."}),Object(i.jsx)(f,{children:"visual"}),Object(i.jsx)(O,{children:"Specifies the visual type. A visual of CopyFromParent means the visual type is taken from the parent."}),Object(i.jsx)(f,{children:"valuemask"}),Object(i.jsx)(O,{children:"Specifies which window attributes are defined in the attributes argument. This mask is the bitwise inclusive OR of the valid attribute mask bits. If valuemask is zero, the attributes are ignored and are not referenced."}),Object(i.jsx)(f,{children:"attributes"}),Object(i.jsx)(O,{children:"Specifies the structure from which the values (as specified by the value mask) are to be taken. The value mask should have the appropriate bits set to indicate which attributes have been set in the structure."})]}),Object(i.jsxs)(C,{title:"Remark",children:["The XCreateWindow function creates an unmapped subwindow for a specified parent window, returns the window ID of the created window, and causes the X server to generate a CreateNotify event. The created window is placed on top in the stacking order with respect to siblings.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"The coordinate system has the X axis horizontal and the Y axis vertical with the origin [0, 0] at the upper-left corner. Coordinates are integral, in terms of pixels, and coincide with pixel centers. Each window and pixmap has its own coordinate system. For a window, the origin is inside the border at the inside, upper-left corner.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"The border_width for an InputOnly window must be zero, or a BadMatch error results. For class InputOutput, the visual type and depth must be a combination supported for the screen, or a BadMatch error results. The depth need not be the same as the parent, but the parent must not be a window of class InputOnly, or a BadMatch error results. For an InputOnly window, the depth must be zero, and the visual must be one supported by the screen. If either condition is not met, a BadMatch error results. The parent window, however, may have any depth and class. If you specify any invalid window attribute for a window, a BadMatch error results.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"The created window is not yet displayed (mapped) on the user\u2019s display. To display the window, call XMapWindow. The new window initially uses the same cursor as its parent. A new cursor can be defined for the new window by calling XDefineCursor. The window will not be visible on the screen unless it and all of its ancestors are mapped and it is not obscured by any of its ancestors.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"XCreateWindow can generate BadAlloc BadColor, BadCursor, BadMatch, BadPixmap, BadValue, and BadWindow errors.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"The XCreateSimpleWindow function creates an unmapped InputOutput subwindow for a specified parent window, returns the window ID of the created window, and causes the X server to generate a CreateNotify event. The created window is placed on top in the stacking order with respect to siblings. Any part of the window that extends outside its parent window is clipped. The border_width for an InputOnly window must be zero, or a BadMatch error results. XCreateSimpleWindow inherits its depth, class, and visual from its parent. All other window attributes, except background and border, have their default values.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"XCreateSimpleWindow can generate BadAlloc, BadMatch, BadValue, and BadWindow errors."]}),Object(i.jsx)(C,{title:"Return value"}),Object(i.jsxs)(C,{title:"Requirements",children:[Object(i.jsx)("hr",{}),Object(i.jsx)(N,{children:Object(i.jsx)(B,{title:"Header",desc:"windef.h (include Windows.h)"})})]})]})},I=["Screen"],W=function(){var e=I.sort().map((function(e){return Object(i.jsx)(b,{title:e,page:"/x11/".concat(e.replace("struct ",""))},e)}));return Object(i.jsxs)(S,{children:[Object(i.jsx)(b,{title:"Home",page:"/index.html"}),Object(i.jsx)(w,{title:"X11",children:e})]})};var P=function(){return Object(i.jsx)(d.a,{children:Object(i.jsxs)(g,{children:[Object(i.jsx)(W,{}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/",exact:!0,component:T}),Object(i.jsx)(o.a,{path:"/x11/screen",component:X})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,274)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),F()},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){}},[[269,1,2]]]);
//# sourceMappingURL=main.d17db02e.chunk.js.map