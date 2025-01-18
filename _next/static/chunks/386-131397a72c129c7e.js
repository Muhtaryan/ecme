"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[386],{2535:function(e,t,r){var a=r(7437),n=r(2265),l=r(4655);let i=(0,n.forwardRef)((e,t)=>{let{className:r,children:n,asElement:i="div",...o}=e;return(0,a.jsx)(i,{ref:t,className:(0,l.cn)("max-w-7xl mx-auto px-4",r),...o,children:n})});i.displayName="Container",t.Z=i},2209:function(e,t,r){var a=r(7437),n=r(2265),l=r(3289),i=r(5856),o=r(160),s=r(4655);t.Z=e=>{let{words:t,className:r,wordClassName:c,filter:d=!0,duration:u=.5,wordsCallbackClass:m}=e,[x,p]=(0,l.H)(),h=t.split(" ");return(0,n.useEffect)(()=>{p("span",{opacity:1,filter:d?"blur(0px)":"none"},{duration:u||1,delay:(0,i.E)(.075)})},[x.current]),(0,a.jsx)("div",{className:(0,s.cn)("font-bold",r),children:(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:" dark:text-white text-black text-2xl leading-snug",children:(0,a.jsx)(o.E.div,{className:c,ref:x,children:h.map((e,t)=>(0,a.jsxs)(o.E.span,{className:(0,s.cn)("opacity-0",m&&m({word:e})),style:{filter:d?"blur(10px)":"none"},children:[e," "]},e+t))})})})})}},4703:function(e,t,r){r.d(t,{Z:function(){return y}});var a,n,l=r(7437),i=r(2265),o=r(6800),s=r.n(o),c=r(6164);function d(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.m6)(s()(t))}(a=n||(n={})).XS="xs",a.SM="sm",a.MD="md",a.LG="lg";let u={xs:{h:"h-8",w:"w-8",minH:"min-h-8",minW:"min-w-8"},sm:{h:"h-10",w:"w-10",minH:"min-h-10",minW:"min-w-10"},md:{h:"h-12",w:"w-12",minH:"min-h-12",minW:"min-w-12"},lg:{h:"h-14",w:"w-14",minH:"min-h-14",minW:"min-w-14"}},m={direction:"ltr",mode:"light",locale:"en",controlSize:n.MD},x=(0,i.createContext)(m);x.Provider,x.Consumer;let p=(0,i.createContext)(null);p.Provider,p.Consumer;let h=(0,i.createContext)(null);h.Provider,h.Consumer;let b=(0,i.createContext)(null);b.Provider,b.Consumer;var f=r(731);let g=(0,i.forwardRef)((e,t)=>{let{className:r,customColorClass:a,enableTheme:n=!0,indicator:i=f.frZ,isSpining:o=!0,size:c=20,style:d,...u}=e,m={height:c,width:c,...d},x=s()(o&&"animate-spin",a||n&&"text-primary",r);return(0,l.jsx)(i,{ref:t,style:m,className:x,...u})});g.displayName="Spinner";let v={round:"rounded-xl",circle:"rounded-full",none:"rounded-none"},w=(0,i.forwardRef)((e,t)=>{var r,a,o;let{asElement:s="button",active:c=!1,block:m=!1,children:h,className:f,clickFeedback:w=!0,customColorClass:y,disabled:A,icon:j,loading:C=!1,shape:k="round",size:N,variant:_="default",iconAlignment:S="start",...E}=e,{controlSize:Q,ui:z}=(0,i.useContext)(x),R=null===(r=(0,i.useContext)(p))||void 0===r?void 0:r.size,U=null===(a=(0,i.useContext)(b))||void 0===a?void 0:a.size,M="inline-flex items-center justify-center",H=N||U||R||Q,B=!(null==z?void 0:null===(o=z.button)||void 0===o?void 0:o.disableClickFeedback)||w,D=A||C,L=()=>W({bgColor:c?"bg-primary-deep":"bg-primary",textColor:"text-neutral",hoverColor:c?"":"hover:bg-primary-mild",activeColor:""}),O=()=>W({bgColor:c?"bg-primary-200 dark:bg-primary-50":"bg-primary-50 dark:primary-mild dark:bg-opacity-20",textColor:"",hoverColor:c?"":"hover:text-primary-mild",activeColor:"active:bg-primary-200 dark:active:primary-mild dark:active:bg-opacity-40"}),V=()=>W({bgColor:c?"bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500":"bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",textColor:"text-gray-600 dark:text-gray-100",hoverColor:c?"":"ring-primary dark:ring-white hover:border-primary dark:hover:border-white hover:ring-1 hover:text-primary dark:hover:text-white dark:hover:bg-transparent",activeColor:""}),W=e=>{let{bgColor:t,hoverColor:r,activeColor:a,textColor:n}=e;return"".concat(t," ").concat(D?"opacity-50 cursor-not-allowed":r+" "+a," ").concat(n)},Z=d("button",(()=>{switch(_){case"solid":return L();case"plain":return O();default:return V()}})(),(()=>{let e="";switch(H){case n.LG:e=d(u.lg.h,v[k],j&&!h?"".concat(u.lg.w," ").concat(M," text-2xl"):"px-8 py-2 text-base");break;case n.SM:e=d(u.sm.h,"round"===k?"rounded-xl":v[k],j&&!h?"".concat(u.sm.w," ").concat(M," text-lg"):"px-3 py-2 text-sm");break;case n.XS:e=d(u.xs.h,"round"===k?"rounded-lg":v[k],j&&!h?"".concat(u.xs.w," ").concat(M," text-base"):"px-3 py-1 text-xs");break;default:e=d(u.md.h,v[k],j&&!h?"".concat(u.md.w," ").concat(M," text-xl"):"px-5 py-2")}return e})(),f,m?"w-full":"",B&&!D&&"button-press-feedback",null==y?void 0:y({active:c,unclickable:D}));return(0,l.jsx)(s,{ref:t,className:Z,...E,onClick:t=>{let{onClick:r}=e;if(D){t.preventDefault();return}null==r||r(t)},children:C&&h?(0,l.jsxs)("span",{className:"flex items-center justify-center",children:[(0,l.jsx)(g,{enableTheme:!1,className:"mr-1"}),h]}):j&&!h&&C?(0,l.jsx)(g,{enableTheme:!1}):!j||h||C?j&&h&&!C?(0,l.jsxs)("span",{className:"flex gap-1 items-center justify-center",children:["start"===S&&(0,l.jsx)("span",{className:"text-lg",children:j}),(0,l.jsx)("span",{children:h}),"end"===S&&(0,l.jsx)("span",{className:"text-lg",children:j})]}):(0,l.jsx)(l.Fragment,{children:h}):(0,l.jsx)(l.Fragment,{children:j})})});w.displayName="Button";var y=w},4770:function(e,t,r){r.d(t,{Z:function(){return A}});var a=r(7437),n=r(2265),l=r(160),i=r(3293),o=r(4655),s=e=>{let{tabs:t,tabClassName:r,onTabClick:s,mode:c="horizontal"}=e,[d,u]=(0,n.useState)(t[0]),[m,x]=(0,n.useState)(!1),p=(e,r)=>{x(!0);let a=[...t],n=a.splice(e,1);a.unshift(n[0]),u(a[0]),null==s||s()};return(0,a.jsx)(a.Fragment,{children:t.map((e,t)=>(0,a.jsxs)("button",{onClick:()=>{p(t)},onMouseEnter:()=>p(t),onMouseLeave:()=>x(!1),className:(0,o.cn)("relative px-5 py-2 rounded-xl",r),children:[d.value===e.value&&(0,a.jsx)(l.E.div,{layoutId:"clickedbutton",transition:{type:"spring",bounce:.3,duration:.6},className:(0,o.cn)("absolute inset-0 rounded-xl",m&&"bg-gray-100 dark:bg-gray-700")}),e.to?(0,a.jsx)(i.rU,{to:e.to,className:"relative block heading-text z-10",smooth:!0,duration:500,children:e.title}):(0,a.jsx)("a",{href:e.href,className:"relative block heading-text z-10",children:e.title})]},e.title))})},c=r(6800),d=r.n(c),u=r(7583),m=r.n(u),x=r(4008);let p=(0,n.forwardRef)((e,t)=>{let{absolute:r,className:n,resetDefaultClass:l,...i}=e,o=d()(!l&&"close-button button-press-feedback",r&&"absolute z-10",n);return(0,a.jsx)("button",{ref:t,className:o,type:"button",...i,children:(0,a.jsx)(x.apv,{})})});p.displayName="CloseButton";let h=e=>{let{bodyOpenClassName:t,bodyClass:r,children:n,className:i,closable:o=!0,closeTimeoutMS:s=300,footer:c,footerClass:u,headerClass:x,height:h=400,isOpen:b,lockScroll:f=!0,onClose:g,overlayClassName:v,placement:w="right",portalClassName:y,showBackdrop:A=!0,title:j,width:C=400,...k}=e,N=(0,a.jsx)(p,{onClick:e=>{null==g||g(e)}}),{dimensionClass:_,contentStyle:S,motionStyle:E}="left"===w||"right"===w?{dimensionClass:"vertical",contentStyle:{width:C},motionStyle:{[w]:"-".concat(C).concat("number"==typeof C&&"px")}}:"top"===w||"bottom"===w?{dimensionClass:"horizontal",contentStyle:{height:h},motionStyle:{[w]:"-".concat(h).concat("number"==typeof h&&"px")}}:{motionStyle:{}};return(0,a.jsx)(m(),{className:{base:d()("drawer",i),afterOpen:"drawer-after-open",beforeClose:"drawer-before-close"},overlayClassName:{base:d()("drawer-overlay",v,!A&&"bg-transparent"),afterOpen:"drawer-overlay-after-open",beforeClose:"drawer-overlay-before-close"},portalClassName:d()("drawer-portal",y),bodyOpenClassName:d()("drawer-open",f&&"drawer-lock-scroll",t),ariaHideApp:!1,isOpen:b,closeTimeoutMS:s,...k,children:(0,a.jsxs)(l.E.div,{className:d()("drawer-content",_),style:S,initial:E,animate:{[w]:b?0:E[w]},children:[j||o?(0,a.jsxs)("div",{className:d()("drawer-header",x),children:["string"==typeof j?(0,a.jsx)("h4",{children:j}):(0,a.jsx)("span",{children:j}),o&&N]}):null,(0,a.jsx)("div",{className:d()("drawer-body",r),children:n}),c&&(0,a.jsx)("div",{className:d()("drawer-footer",u),children:c})]})})};h.displayName="Drawer";var b=function(){let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),{isSticky:e}},f=r(6648),g=r(588),v=r(2655),w=r(7138);let y=[{title:"Платформы",value:"features",to:"features"},{title:"Решения",value:"demos",to:"demos"},{title:"Поддержка",value:"components",to:"components"},{title:"Вход на платформу",value:"documentations",href:"https://ecme-react.themenate.net/guide/documentation/introduction"}];var A=()=>{let{isSticky:e}=b(),[t,r]=(0,n.useState)(!1),l=()=>{r(!1)};return(0,a.jsx)("div",{style:{transition:"all 0.2s ease-in-out"},className:(0,o.cn)("w-full fixed inset-x-0 z-[50]",e?"top-4":"top-0"),children:(0,a.jsxs)("div",{className:(0,o.cn)("flex flex-row self-start items-center justify-between py-3 max-w-7xl mx-auto px-4 rounded-xl relative z-[60] w-full transition duration-200",e?"bg-white dark:bg-gray-800 shadow-[rgba(34,42,53,0.06)_0px_0px_24px,rgba(0,0,0,0.05)_0px_1px_1px,rgba(34,42,53,0.04)_0px_0px_0px_1px,rgba(34,42,53,0.08)_0px_0px_4px,rgba(47,48,55,0.05)_0px_16px_68px,rgba(255,255,255,0.1)_0px_1px_0px_inset]":"bg-transparent dark:bg-transparent"),children:[(0,a.jsx)("button",{onClick:()=>{r(!0)},className:"flex lg:hidden items-center gap-4",children:(0,a.jsx)(v.QFQ,{size:24})}),(0,a.jsx)(h,{title:"Navigation",isOpen:t,onClose:l,onRequestClose:l,width:250,placement:"left",children:(0,a.jsx)("div",{className:"flex flex-col gap-4",children:(0,a.jsx)(s,{onTabClick:l,tabs:y})})}),(0,a.jsx)(w.default,{href:"/",className:"relative z-[100]",children:(0,a.jsx)(f.default,{src:g.Z,width:200,height:60,alt:"logo",className:"cursor-pointer"})}),(0,a.jsx)("div",{className:"lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200 [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar",children:(0,a.jsx)(s,{tabs:y})}),(0,a.jsx)("div",{className:"flex items-center gap-4 hidden lg:flex",children:"Тел: +998 71 200 63 63"})]})})}},4655:function(e,t,r){r.d(t,{cn:function(){return l}});var a=r(4839),n=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},7524:function(e,t){t.Z={src:"/ecme//_next/static/media/hero.6ae80a75.webp",height:1070,width:1920,blurDataURL:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vqQAAA=",blurWidth:8,blurHeight:4}},588:function(e,t){t.Z={src:"/ecme//_next/static/media/hippo-logo.a7c152c3.png",height:228,width:940,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKUlEQVR42gXAIQ4AEBQA0MdpXMFmk4SfdVkWnP+PpruOLRQYpuV7QiUBQUMDuHUBbbYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}}}]);