(function(){"use strict";var t={199:function(t,e,o){var a=o(751),n=o(641);function r(t,e,o,a,r,s){const i=(0,n.g2)("Header"),l=(0,n.g2)("Home"),c=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i),(0,n.bF)(l),(0,n.bF)(c)],64)}const s={"data-bs-theme":"dark"};function i(t,e,o,a,r,i){return(0,n.uX)(),(0,n.CE)("header",s,e[0]||(e[0]=[(0,n.Fv)('<div class="collapse text-bg-dark" id="navbarHeader"><div class="container"><div class="row"><div class="col-sm-8 col-md-7 py-4"><h4>About</h4><p class="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p></div><div class="col-sm-4 offset-md-1 py-4"><h4>Contact</h4><ul class="list-unstyled"><li><a href="#" class="text-white">Follow on Twitter</a></li><li><a href="#" class="text-white">Like on Facebook</a></li><li><a href="#" class="text-white">Email me</a></li></ul></div></div></div></div><div class="navbar navbar-dark bg-dark shadow-sm"><div class="container"><a href="#" class="navbar-brand d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg><strong>Album</strong></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></div></div>',2)]))}var l={name:"HeaderComponent"},c=o(262);const d=(0,c.A)(l,[["render",i]]);var u=d,b=o(33);const m={class:"Home"},p={class:"album py-5 bg-body-tertiary"},v={class:"container"},f={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"};function h(t,e,o,a,r,s){const i=(0,n.g2)("Card");return(0,n.uX)(),(0,n.CE)("div",m,[e[0]||(e[0]=(0,n.Fv)('<section class="py-5 text-center container"><div class="row py-lg-5"><div class="col-lg-6 col-md-8 mx-auto"><h1 class="fw-light">Album example</h1><p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p><p><a href="#" class="btn btn-primary my-2">Main call to action</a><a href="#" class="btn btn-secondary my-2">Secondary action</a></p></div></div></section>',1)),(0,n.Lk)("div",p,[(0,n.Lk)("div",v,[(0,n.Lk)("div",f,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.state.items,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{class:"col",key:e},[(0,n.eW)((0,b.v_)(t)+" ",1),(0,n.bF)(i,{item:t},null,8,["item"])])))),128))])])])])}var g=o(335);const y={class:"card shadow-sm"},w={class:"card-body"},k={class:"card-text"};function x(t,e,o,a,r,s){return(0,n.uX)(),(0,n.CE)("div",y,[e[1]||(e[1]=(0,n.Lk)("svg",{class:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[(0,n.Lk)("title",null,"Placeholder"),(0,n.Lk)("rect",{width:"100%",height:"100%",fill:"#55595c"}),(0,n.Lk)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"},"Thumbnail")],-1)),(0,n.Lk)("div",w,[(0,n.Lk)("p",k,(0,b.v_)(o.item)+"이 들어있어요",1),e[0]||(e[0]=(0,n.Fv)('<div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary">View</button><button type="button" class="btn btn-sm btn-outline-secondary">Edit</button></div><small class="text-body-secondary">9 mins</small></div>',1))])])}var C={name:"CardComponent",props:{item:Object}};const F=(0,c.A)(C,[["render",x]]);var A=F,O=o(953),j={name:"HomeComponent",components:{Card:A},setup(){const t=(0,O.Kh)({items:[]});return console.log('axios.get("/api/items"):'+g.A.get("/api/items")),g.A.get("/api/items").then((e=>{console.log("/api/items에서 가져온 배열:"+e.data+",  배열크기:"+e.data.length),t.items=e.data})),{state:t}}};const E=(0,c.A)(j,[["render",h]]);var H=E;const L={class:"text-body-secondary py-5"};function M(t,e,o,a,r,s){return(0,n.uX)(),(0,n.CE)("footer",L,e[0]||(e[0]=[(0,n.Fv)('<div class="container"><p class="float-end mb-1"><a href="#">Back to top</a></p><p class="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p><p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p></div>',1)]))}var T={name:"FooterComponent"};const S=(0,c.A)(T,[["render",M]]);var X=S,P={name:"App",components:{Header:u,Home:H,Footer:X}};const _=(0,c.A)(P,[["render",r]]);var V=_;(0,a.Ef)(V).mount("#app")}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,r){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],r=t[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(i=!1,r<s&&(s=r));if(i){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,n,r]}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var d=l(o)}for(e&&e(a);c<s.length;c++)r=s[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},a=self["webpackChunkVue3_GalleryMall"]=self["webpackChunkVue3_GalleryMall"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(199)}));a=o.O(a)})();
//# sourceMappingURL=app.04cc16f9.js.map