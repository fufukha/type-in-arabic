(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{57:function(e){e.exports=JSON.parse('{"a":["\u0646 \u0646\u062a\u062a \u062a\u062a\u062a\u0646\u062a \u0646\u062a \u062a\u0646 \u062a \u0646 \u0646\u0646\u062a\u062a \u0646\u0646\u062a\u0646 \u062a\u0646 \u062a\u0646\u062a\u0646 \u062a\u0646\u062a \u062a\u0646 \u0646\u062a","\u064a\u0628 \u0628\u064a\u0628 \u0628\u064a\u0628 \u064a\u0628\u064a\u0628 \u064a\u0628 \u064a\u0628 \u0628 \u064a \u0628\u064a\u0628 \u0628\u0628\u064a\u064a\u0628 \u064a\u064a\u0628 \u0628\u064a\u0628 \u0628 \u0628\u064a\u064a","\u064a\u0646\u0628\u064a \u062a\u064a\u0628\u0646 \u0646\u062a \u0628\u0646 \u062a\u064a\u0646 \u0628\u0646\u064a \u0646\u062a \u0628\u0646\u0628\u064a \u062a\u0646\u062a \u0628\u064a\u0646\u0628 \u0628\u062a \u0646\u064a \u0628\u0646","\u064a\u062a\u0646 \u0646\u062a\u064a \u064a\u0628\u0646 \u0646\u0628\u064a\u0628 \u062a\u064a\u0628\u0646 \u062a\u0646\u062a\u0628\u062a","\u0645\u0643\u0643\u0645\u0643 \u0643\u0645\u0643\u0643\u0645 \u0645\u0643\u0645\u0645 \u0643\u0643 \u0643\u0645 \u0645\u0645\u0643\u0645 \u0645\u0643\u0645\u0643\u0643 \u0643\u0645\u0643\u0645\u0645 \u0645\u0643\u0645\u0643 \u0643 \u0643\u0645","\u0645\u0646 \u0643\u0646\u0646 \u064a\u062a\u0645\u0628 \u0628\u064a\u062a\u0643 \u0643\u0628\u0645\u0646 \u064a\u0643\u062a\u0628 \u064a\u062a\u0643\u0643\u0628 \u0643\u0628\u0643\u0628\u0645\u0628 \u0643\u0645\u0628\u0646\u0628 \u064a\u0643\u0628"]}')},80:function(e,t,n){"use strict";n.r(t);var a,r=n(2),i=n(0),o=n(8),c=n(10),s=n(26),l=n(49),d=n.n(l),u=n(50),p=n(25),m={level:null,levelsData:[],startTime:null,errors:0,index:0,lastCharAt:null,char:null},h="STATE_SESSION",f="INPUT_CHAR",b="NEXT_LEVEL",j=function(e,t,n){return e===n[t]},x=function(e,t){return e===t.length},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=e.startTime,r=e.index,i=e.errors,o=e.level,c=e.levelsData,s=e.lastCharAt,l=null!==o?c[o]:void 0;switch(n){case h:var d=t,u=d.payload,g=u.level,y=u.levelsData;return Object(p.a)(Object(p.a)({},m),{},{level:g,levelsData:y});case f:var O=t,v=O.payload,C=v.timestamp,k=v.char,S=j(k,r,l);return Object(p.a)(Object(p.a)({},e),{},{index:S?r+1:r,errors:S||x(r,l)?i:i+1,lastCharAt:S?C:s,startTime:null===a?C:a,char:k});case b:var w=e.level,E=e.levelsData,A=w===E.length-1;return Object(p.a)(Object(p.a)({},m),{},{levelsData:E,level:A?w:w+1});default:return e}},y=Object(s.createStore)(g,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(d.a))),O=n(41),v=n(17),C=n(114);!function(e){e.keyboardError="Please change your keyboard layout to Arabic.",e.deviceError="Please use desktop."}(a||(a={}));var k,S=n(116),w=n(60),E=n(105),A={palette:{primary:{main:"#C70DA9"},secondary:{main:"#7AC70D"},success:{main:"#7AC70D"},warning:{main:"#F9B113"},background:{default:"#7AC70D"},text:{primary:"#fff"}},typography:{h1:{fontFamily:"Amaranth, Roboto, sans serif",whiteSpace:"pre-line"},h2:{fontFamily:"Amaranth, Roboto, sans serif",fontSize:"4.572em","@media (max-width: 960px)":{fontSize:"3em"},"@media (max-width: 600px)":{fontSize:"2em"},whiteSpace:"pre-line"}},overrides:{MuiButton:{root:{borderRadius:"10px",paddingLeft:"30px",paddingRight:"30px"},contained:{boxShadow:"none"},containedPrimary:{width:"100%",maxWidth:"290px",fontSize:"24px","@media (max-width: 600px)":{fontSize:"0.8em"},fontWeight:900}}},props:{MuiTypography:{variantMapping:{h1:"h2",h2:"h3",h3:"h4",h4:"h5",h5:"h6",h6:"h6"}}}},T={palette:{primary:{main:"#E5E7EC"},secondary:{main:"#F9B113"},purple:{main:"#C70DA9"},blue:{main:"#18BAED"},teal:{main:"#0DA6C7"},red:{main:"#E21313"},orange:{main:"#E9770F"},success:{main:"#7AC70D"},warning:{main:"#F9B113"},text:{primary:"#000"},background:{paper:"#fff",default:"#F9B113"}},typography:{h5:{fontSize:"1.5em",textTransform:"uppercase",fontWeight:900,color:"#fff"},h6:{fontFamily:"Markazi Text, serif",fontSize:"3.5em"}},overrides:{MuiContainer:{maxWidthMd:{"@media (min-width: 960px)":{maxWidth:"90%",minWidth:"1039px"},maxWidth:"90%",minWidth:"1039px"}},MuiDialogTitle:{root:{textAlign:"center"}},MuiTypography:{gutterBottom:{marginBottom:"1em"}},MuiButton:{root:{borderRadius:"10px",paddingLeft:"30px",paddingRight:"30px"},contained:{boxShadow:"none"},containedPrimary:{width:"290px",fontSize:"24px",fontWeight:900}}}},D={palette:{primary:{main:"#7AC70D"},secondary:{main:"#F9B113"},success:{main:"#7AC70D"},warning:{main:"#F9B113"},background:{default:"#18BAED"}},typography:{h1:{fontFamily:"Amaranth, Roboto, sans serif"},h2:{fontFamily:"Amaranth, Roboto, sans serif"},h3:{fontFamily:"Amaranth, Roboto, sans serif"},h4:{fontFamily:"Amaranth, Roboto, sans serif"},h5:{fontFamily:"Amaranth, Roboto, sans serif"},h6:{fontFamily:"Amaranth, Roboto, sans serif"},caption:{color:"#fff",textTransform:"uppercase",fontWeight:700},subtitle2:{color:"#fff",textTransform:"uppercase"}},shape:{borderRadius:10},overrides:{MuiContainer:{maxWidthXs:{width:"420px"}},MuiButton:{root:{borderRadius:"10px",paddingLeft:"30px",paddingRight:"30px"},contained:{boxShadow:"none"},containedPrimary:{fontSize:"0.875rem"}}},props:{MuiTypography:{variantMapping:{h1:"h2",h2:"h3",h3:"h4",h4:"h5",h5:"h6",h6:"h6"}}}},L=n(33),z=n(51),R=n(115),M=n(101),B=n(102),F=n(103),W=n(104),N=function(e){var t=e.onClose,n=e.message,a=e.icon,i=Object(z.a)().palette.secondary;return Object(r.jsxs)(R.a,{open:!0,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(r.jsxs)(M.a,{children:[Object(r.jsx)(B.a,{disableTypography:!0,children:a&&Object(r.jsx)(L.a,{icon:a,size:"2x",color:i.main})}),Object(r.jsx)(F.a,{id:"alert-dialog-description",children:n})]}),Object(r.jsx)(W.a,{children:Object(r.jsx)(E.a,{onClick:t,color:"secondary",children:"Continue"})})]})},I=n(106),P=n(107),H=n(108),_=n(58),G=function(e){var t=e.children,n=e.themeOptions,a=e.containerMaxWidth,i=e.containerStyles;return Object(r.jsxs)(I.a,{theme:Object(_.a)(n),children:[Object(r.jsx)(P.a,{}),Object(r.jsx)(H.a,{style:i,maxWidth:a,children:t})]})},V=n(109),J=Object(V.a)((function(){return{root:{minHeight:"800px"},wrapper:{position:"relative",display:"flex",justifyContent:"flex-start",flexDirection:"column","& h1 span":{display:"block"}}}})),X={height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"},K=function(e){var t=e.getStarted,n=e.displayAlert,a=e.onClose,i=e.icon,o=e.alertMessage,c=J();return Object(r.jsxs)(G,{themeOptions:A,containerMaxWidth:"md",containerStyles:X,children:[Object(r.jsxs)(S.a,{className:c.wrapper,children:[Object(r.jsx)(w.a,{component:"h1",variant:"h2",color:"textPrimary",gutterBottom:!0,children:"Learn typing.\nArabic Keyboard."}),Object(r.jsx)(E.a,{variant:"contained",color:"primary",onClick:t,children:"Get started"})]}),n&&Object(r.jsx)(N,{onClose:a,icon:i,message:o})]})},U=n(110),Y=function(e){var t=e.levelsData,n=e.level,a=e.index;return null!==n&&a===t[n].length},Z=function(e){return e.levelsData[e.level]},q=function(e){return e.errors},Q=function(e){var t=e.startTime,n=e.lastCharAt,a=e.index;if(null===n)return 0;if(t===n)return 0;var r=(n-t)/6e4;return Math.floor(a/r)},$=function(e){return e.char},ee=function(e){return e.index},te=function(e){return e.level},ne=function(e){return null!==e.level},ae=n(56),re=n.n(ae),ie=n(85),oe=Object(V.a)((function(e){var t=e.palette,n=e.typography,a=e.shadows,r=e.shape,i=e.transitions;return{key:{display:"flex",margin:"1.5px",padding:"5px 10px",cursor:"default",boxShadow:a[2],borderRadius:r.borderRadius,"&:focus-visible":{boxShadow:a[0],transition:"box-shadow ".concat(i.easing.easeOut," ").concat(i.duration.standard)},'&[lang="ar"]':{fontFamily:n.h6.fontFamily,fontSize:"1.5em"},'&[lang="en"]':{fontSize:"1em"}},".focus":{boxShadow:a[0]},zone1:{background:t.purple.main},zone2:{background:t.teal.main},zone3:{background:t.secondary.main},zone4:{background:t.red.main},zone5:{background:t.blue.main},zone6:{background:t.grey[100]},zone7:{background:t.grey[200]},sm:{gridColumn:"auto / span 4"},med:{gridColumn:"auto / span 6"},lg:{gridColumn:" auto / span 7"},xl:{gridColumn:"auto / span 9"},space:{gridColumn:"auto / span 20"},optLeft:{gridColumn:"auto / span 17"},optRight:{gridColumn:"auto/span 21"},left:{justifyContent:"flex-start",alignItems:"flex-end"},right:{justifyContent:"flex-end",alignItems:"flex-end"},center:{justifyContent:"center",alignItems:"center"}}})),ce=function(e){var t=e.data,n=t.size,a=t.align,o=t.value,s=t.lang,l=t.zone,d=t.keyName,u="opt-left"===o||"opt-right"===o?"":o,p=Object(c.c)($),m=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=setTimeout((function(){null!==m.current&&m.current.blur()}),400);return p===d&&null!==m.current&&m.current.focus(),function(){return clearTimeout(e)}}),[p,d]);var h=oe();return console.log(h),Object(r.jsx)(ie.a,{lang:s,component:"div",className:re()(h.key,h["".concat(n)],h["".concat(a)],h["".concat(l)]),ref:m,centerRipple:!0,focusRipple:!0,focusVisibleClassName:"focus",children:u})},se=["\u0630","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669","\u0660","-","=","Backspace","Tab","\u0636","\u0635","\u062b","\u0642","\u0641","\u063a","\u0639","\u0647","\u062e","\u062d","\u062c","\u062f","\\","CapsLock","\u0634","\u0633","\u064a","\u0628","\u0644","\u0627","\u062a","\u0646","\u0645","\u0643","\u0637","Enter","Shift","\u0626","\u0621","\u0624","\u0631","\u0644\u0627","\u0649","\u0629","\u0648","\u0632","\u0638","Shift","opt-left"," ","opt-right"],le=["\u0630","\u0661","\u0662","\u0636","\u0634","\u0626","\u0660","-","=","\u062d","\u062c","\u062f","\u0643","\u0637","\u0638"],de=["\u0663","\u0635","\u0633","\u0621","\u0669","\u062e","\u0645","\u0632"],ue=["\u0664","\u062b","\u064a","\u0624","\u0668","\u0647","\u0646","\u0648"],pe=["\u0664","\u0642","\u0628","\u0631","\u0666","\u0665","\u0641","\u0644","\u0644\u0627"],me=["\u0666","\u063a","\u0627","\u0649","\u0667","\u0639","\u062a","\u0629"],he=[" "],fe=function(e){return le.includes(e)?"zone1":de.includes(e)?"zone2":ue.includes(e)?"zone3":pe.includes(e)?"zone4":me.includes(e)?"zone5":he.includes(e)?"zone6":"zone7"},be=function(e){return"Backspace"===e?"delete":"CapsLock"===e?"caps lock":"Tab"===e||"Shift"===e||"Enter"===e?e.toLowerCase():e},je=function(e){var t=se[e-1];return"Backspace"===t||"\\"===t||"Enter"===t?"left":"="===t||"\u0637"===t||"\u0638"===t?"right":"center"},xe=function(e){return"Tab"===e||"Backspace"===e?"med":"CapsLock"===e||"Enter"===e?"lg":"Shift"===e?"xl":" "===e?"space":"opt-left"===e?"optLeft":"opt-right"===e?"optRight":"sm"},ge=Object(V.a)((function(){return{keyboard:{background:"#e5e7ec",display:"inline-grid",margin:"0 auto 70px auto",gridTemplateColumns:"repeat(58, 11.25px)",gridTemplateRows:"repeat(5, 54px)",gridColumnGap:"5px",gridRowGap:"5px",padding:"20px 25px",border:"2px #eceef4 outset ",borderRadius:"5px"}}})),ye=function(){var e=function(){var e=new Array(se.length);return se.forEach((function(t,n){e[n]={value:be(t),keyName:t,lang:/^[a-zA-Z]/.test(t)?"en":"ar",zone:fe(t),align:je(n),size:xe(t)}})),e}().map((function(e,t){return Object(r.jsx)(ce,{data:e},t)})),t=ge();return Object(r.jsx)("div",{className:t.keyboard,children:e})},Oe=n(82),ve=n(57),Ce=function(e){return{type:h,payload:{level:e,levelsData:ve.a}}},ke=Object(V.a)((function(){return{field:{display:"flex",width:"100%",minWidth:"991.5px",justifyContent:"center",alignItems:"center",padding:"0 60px",marginBottom:"40px","& span":{color:"lightgrey",borderLeft:"1px black solid",animationName:"cursor",animationDuration:"1.5s",animationIterationCount:"infinite"}},"@keyframes cursor":{"0%,50%":{borderLeftColor:"rgba(0, 0, 0, 1)"},"51%,100%":{borderLeftColor:"rgba(0, 0, 0, 0)"}}}})),Se=function(){var e=Object(i.useState)(!0),t=Object(O.a)(e,2),n=t[0],o=t[1],s=Object(c.b)(),l=Object(c.c)(ee),d=Object(c.c)(Z),u=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:d.substring(0,l)}),d.substring(l)]}),p=function(e){var t,n,a;" "===e.key&&e.preventDefault(),function(e){var t=e.codePointAt(0);return t>=1536&&t<=1791||t>=43&&t<=46||61===t||92===t||33===t||124===t}(e.key)||(a=e.key,["Alt","Backspace","CapsLock","Control","Enter","Meta","Shift","Tab"," "].includes(a))?(s((t=e.key,n=(new Date).getTime(),{type:f,payload:{char:t,timestamp:n}})),o(!0)):o(!1)};Object(i.useEffect)((function(){return document.addEventListener("keydown",p),function(){return document.removeEventListener("keydown",p)}}));var m=ke();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Oe.a,{className:m.field,variant:"outlined",onKeyDown:p,children:Object(r.jsx)(w.a,{variant:"h6",children:u})}),!n&&Object(r.jsx)(N,{onClose:function(){return o(!0)},icon:v.c,message:a.keyboardError})]})},we=Object(V.a)((function(){return{statBar:{width:"50%",marginTop:"100px"}}})),Ee={display:"flex",alignItems:"center",flexDirection:"column",height:"100%",justifyContent:"center"},Ae=function(){var e=Object(c.c)(q),t=Object(c.c)(Q),n=we();return Object(r.jsxs)(G,{themeOptions:T,containerMaxWidth:"md",containerStyles:Ee,children:[Object(r.jsxs)(U.a,{className:n.statBar,container:!0,justify:"space-between",children:[Object(r.jsx)(U.a,{item:!0,xs:3,children:Object(r.jsx)(w.a,{gutterBottom:!0,component:"h1",variant:"h5",children:"Typos ".concat(e)})}),Object(r.jsx)(U.a,{item:!0,xs:3,children:Object(r.jsx)(w.a,{gutterBottom:!0,component:"h1",variant:"h5",children:"CPM ".concat(t)})})]}),Object(r.jsx)(Se,{}),Object(r.jsx)(ye,{})]})},Te=n(24),De=n(111),Le=n(112),ze=n(113);!function(e){e[e.cpm=130]="cpm",e[e.errors=5]="errors",e[e.cpmSuper=200]="cpmSuper",e[e.cpmGreat=150]="cpmGreat"}(k||(k={}));var Re={height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"};Te.b.add(v.a,v.f,v.g);var Me=function(e){var t,n,a=e.errors,i=e.cpm,o=e.redoLevelHandler,c=e.nextLevelHandler,s=i>k.cpm&&a<k.errors,l=function(){return s?{status:"Level Completed!"}:a>=k.errors?{status:"Oops! Too many typos",description:"Must have less than ".concat(k.errors," typos")}:{status:"Oops! Too slow",description:"Must be greater than ".concat(k.cpm," CPM")}},d=s&&(i>k.cpm&&0===a||i>k.cpmGreat),u=(t=s,n=Object(_.a)(D),Object(V.a)((function(){return{card:{width:"100%"},wrapper:{paddingTop:0,paddingRight:0,paddingLeft:0,width:"100%"},statMessage:{padding:16,height:"197px",background:t?n.palette.success.main:n.palette.warning.main,"& svg":{marginBottom:"16px"}},statistics:{margin:"20px 0 20px 0"},badge:{color:n.palette.success.main,"& > svg":{marginTop:"32px"}},buttonWrapper:{padding:"16px",display:"flex",flexDirection:"column",justifyContent:"center","& button:first-child":{marginBottom:"16px"}}}})))();return Object(r.jsx)(G,{themeOptions:D,containerMaxWidth:"xs",containerStyles:Re,children:Object(r.jsxs)(De.a,{className:u.card,children:[Object(r.jsx)(Le.a,{className:u.wrapper,children:Object(r.jsxs)(U.a,{container:!0,children:[Object(r.jsxs)(U.a,{className:u.statMessage,item:!0,container:!0,xs:12,direction:"column",justify:"center",alignItems:"center",children:[Object(r.jsx)(L.a,{icon:s?v.d:v.e,color:"white",size:"7x"}),Object(r.jsx)(w.a,{component:"h1",variant:"h6",children:l().status}),!s&&Object(r.jsx)(w.a,{component:"p",variant:"caption",children:l().description})]}),Object(r.jsxs)(U.a,{item:!0,container:!0,xs:12,direction:"column",justify:"center",alignItems:"center",children:[d&&Object(r.jsx)(U.a,{className:u.badge,item:!0,xs:12,container:!0,justify:"center",children:Object(r.jsx)(L.a,{size:"5x",icon:i>k.cpmSuper&&0===a?"trophy":i>k.cpmGreat?"rocket":(k.cpm,"bullseye")})}),Object(r.jsxs)(U.a,{className:u.statistics,item:!0,xs:12,container:!0,justify:"center",children:[Object(r.jsxs)(U.a,{item:!0,xs:4,container:!0,direction:"column",justify:"center",alignItems:"center",alignContent:"center",children:[Object(r.jsx)(w.a,{align:"center",variant:"h2",children:a}),Object(r.jsx)(w.a,{align:"center",variant:"button",children:1===a?"Typo":"Typos"})]}),Object(r.jsxs)(U.a,{item:!0,xs:4,container:!0,direction:"column",justify:"center",alignItems:"center",alignContent:"center",children:[Object(r.jsx)(w.a,{align:"center",variant:"h2",children:i}),Object(r.jsx)(w.a,{align:"center",variant:"button",children:"CPM"})]})]})]})]})}),Object(r.jsx)(ze.a,{className:u.buttonWrapper,children:Object(r.jsxs)(U.a,{container:!0,xs:7,direction:"column",justify:"center",alignItems:"stretch",children:[Object(r.jsx)(U.a,{item:!0,children:Object(r.jsx)(E.a,{variant:s?"outlined":"contained",fullWidth:!0,onClick:o,color:s?"primary":"secondary",children:"TRY AGAIN"})}),Object(r.jsx)(U.a,{item:!0,children:Object(r.jsx)(E.a,{variant:s?"contained":"outlined",fullWidth:!0,disabled:!s,color:s?"primary":"secondary",onClick:c,children:"NEXT LEVEL"})})]})})]})})},Be=function(){var e,t=Object(i.useState)(!1),n=Object(O.a)(t,2),o=n[0],s=n[1],l=Object(C.a)("(min-width:1000px)"),d=Object(c.b)(),u=Object(c.c)(q),p=Object(c.c)(Q),m=Object(c.c)(Y),h=Object(c.c)(te),f=Object(c.c)(ne);!function(e){e.LAST_LEVEL_REACHED="lastLevelReached"}(e||(e={}));return Object(i.useEffect)((function(){null!==h&&localStorage.setItem(e.LAST_LEVEL_REACHED,h.toString())}),[h,e]),Object(r.jsxs)(r.Fragment,{children:[!f&&!m&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(K,{getStarted:function(t){if(l){t.preventDefault();var n=localStorage.getItem(e.LAST_LEVEL_REACHED),a=null===n?0:parseInt(n);d(Ce(a))}else s(!0)},displayAlert:o,onClose:function(){return s(!1)},icon:v.b,alertMessage:a.deviceError})}),f&&!m&&Object(r.jsx)(Ae,{}),m&&Object(r.jsx)(Me,{errors:u,cpm:p,redoLevelHandler:function(e){e.preventDefault(),d(Ce(h))},nextLevelHandler:function(e){e.preventDefault(),d({type:b})}})]})};Object(o.render)(Object(r.jsx)(i.StrictMode,{children:Object(r.jsx)(c.a,{store:y,children:Object(r.jsx)(Be,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.553d5d67.chunk.js.map