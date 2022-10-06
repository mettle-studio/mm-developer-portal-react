"use strict";(self.webpackChunkmm_developer_portal_react=self.webpackChunkmm_developer_portal_react||[]).push([[218],{2544:function(t,a,r){r.d(a,{Z:function(){return S}});var e=r(4942),n=r(3366),o=r(7462),i=r(7294),u=r(2585),p=r(2698),s=r(8362),d=r(565),c=r(9285),l=(0,r(1421).ZP)(),m=r(1037),h=r(5893),g=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,m.Z)(),f=l("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,a){var r=t.ownerState;return[a.root,a["maxWidth".concat((0,p.Z)(String(r.maxWidth)))],r.fixed&&a.fixed,r.disableGutters&&a.disableGutters]}}),x=function(t){return(0,c.Z)({props:t,name:"MuiContainer",defaultTheme:v})},Z=function(t,a){var r=t.classes,e=t.fixed,n=t.disableGutters,o=t.maxWidth,i={root:["root",o&&"maxWidth".concat((0,p.Z)(String(o))),e&&"fixed",n&&"disableGutters"]};return(0,d.Z)(i,(function(t){return(0,s.Z)(a,t)}),r)};var b=r(1672),y=r(7544),W=r(5309),w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.createStyledComponent,r=void 0===a?f:a,p=t.useThemeProps,s=void 0===p?x:p,d=t.componentName,c=void 0===d?"MuiContainer":d,l=r((function(t){var a=t.theme,r=t.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,e.Z)({paddingLeft:a.spacing(2),paddingRight:a.spacing(2)},a.breakpoints.up("sm"),{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}))}),(function(t){var a=t.theme;return t.ownerState.fixed&&Object.keys(a.breakpoints.values).reduce((function(t,r){var e=r,n=a.breakpoints.values[e];return 0!==n&&(t[a.breakpoints.up(e)]={maxWidth:"".concat(n).concat(a.breakpoints.unit)}),t}),{})}),(function(t){var a=t.theme,r=t.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,e.Z)({},a.breakpoints.up("xs"),{maxWidth:Math.max(a.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,e.Z)({},a.breakpoints.up(r.maxWidth),{maxWidth:"".concat(a.breakpoints.values[r.maxWidth]).concat(a.breakpoints.unit)}))})),m=i.forwardRef((function(t,a){var r=s(t),e=r.className,i=r.component,p=void 0===i?"div":i,d=r.disableGutters,m=void 0!==d&&d,v=r.fixed,f=void 0!==v&&v,x=r.maxWidth,b=void 0===x?"lg":x,y=(0,n.Z)(r,g),W=(0,o.Z)({},r,{component:p,disableGutters:m,fixed:f,maxWidth:b}),w=Z(W,c);return(0,h.jsx)(l,(0,o.Z)({as:p,ownerState:W,className:(0,u.Z)(w.root,e),ref:a},y))}));return m}({createStyledComponent:(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,a){var r=t.ownerState;return[a.root,a["maxWidth".concat((0,b.Z)(String(r.maxWidth)))],r.fixed&&a.fixed,r.disableGutters&&a.disableGutters]}}),useThemeProps:function(t){return(0,W.Z)({props:t,name:"MuiContainer"})}}),S=w},4090:function(t,a,r){r.d(a,{Z:function(){return Z}});var e=r(3366),n=r(7462),o=r(7294),i=r(2585),u=r(3259),p=r(565),s=r(7544),d=r(5309),c=r(1672),l=r(8362);function m(t){return(0,l.Z)("MuiTypography",t)}(0,r(7893).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=r(5893),g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,a){var r=t.ownerState;return[a.root,r.variant&&a[r.variant],"inherit"!==r.align&&a["align".concat((0,c.Z)(r.align))],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})((function(t){var a=t.theme,r=t.ownerState;return(0,n.Z)({margin:0},r.variant&&a.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=o.forwardRef((function(t,a){var r=(0,d.Z)({props:t,name:"MuiTypography"}),o=function(t){return x[t]||t}(r.color),s=(0,u.Z)((0,n.Z)({},r,{color:o})),l=s.align,Z=void 0===l?"inherit":l,b=s.className,y=s.component,W=s.gutterBottom,w=void 0!==W&&W,S=s.noWrap,k=void 0!==S&&S,M=s.paragraph,R=void 0!==M&&M,B=s.variant,C=void 0===B?"body1":B,G=s.variantMapping,N=void 0===G?f:G,P=(0,e.Z)(s,g),T=(0,n.Z)({},s,{align:Z,color:o,className:b,component:y,gutterBottom:w,noWrap:k,paragraph:R,variant:C,variantMapping:N}),_=y||(R?"p":N[C]||f[C])||"span",E=function(t){var a=t.align,r=t.gutterBottom,e=t.noWrap,n=t.paragraph,o=t.variant,i=t.classes,u={root:["root",o,"inherit"!==t.align&&"align".concat((0,c.Z)(a)),r&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return(0,p.Z)(u,m,i)}(T);return(0,h.jsx)(v,(0,n.Z)({as:_,ref:a,ownerState:T,className:(0,i.Z)(E.root,b)},P))}))},2513:function(t,a,r){r.r(a),r.d(a,{Head:function(){return u}});var e=r(2544),n=r(4090),o=r(7294),i=r(9848);a.default=function(){return o.createElement(i.Z,null,o.createElement(e.Z,{maxWidth:"xl"},o.createElement(n.Z,{variant:"h3",paragraph:!0},"Page not found")))};var u=function(){return o.createElement("title",null,"Not found")}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-0866390f8139a5c454e8.js.map