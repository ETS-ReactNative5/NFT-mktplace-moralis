(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{95455:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/1inch",function(){return t(42392)}])},42392:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var o=t(85893),r=t(67294),i=t(83078);var s=function(e){var n=e.open,t=e.onClose,r=e.setToken,i=e.tokenList;return n?(0,o.jsx)("div",{style:{overflow:"auto",height:"500px"},children:i?Object.keys(i).map((function(e,n){return(0,o.jsxs)("div",{style:{padding:"5px 20px",display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){r(i[e]),t()},children:[(0,o.jsx)("img",{style:{height:"32px",width:"32px",marginRight:"20px"},src:i[e].logoURI,alt:"noLogo"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:i[e].name}),(0,o.jsx)("span",{style:{fontWeight:"600",fontSize:"15px",lineHeight:"14px"},children:i[e].symbol})]})]},n)})):null}):null},l=t(34051),a=t.n(l);function d(e,n,t,o,r,i,s){try{var l=e[i](s),a=l.value}catch(d){return void t(d)}l.done?n(a):Promise.resolve(a).then(o,r)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var i=e.apply(n,t);function s(e){d(i,o,r,s,l,"next",e)}function l(e){d(i,o,r,s,l,"throw",e)}s(void 0)}))}}var u=function(e){var n=(0,i.Nr)(),t=n.Moralis,o=n.account,s=(0,r.useState)(),l=s[0],d=s[1];(0,r.useEffect)((function(){var n;if(!(null===t||void 0===t||null===(n=t.Plugins)||void 0===n?void 0:n.oneInch))return null;t.Plugins.oneInch.getSupportedTokens({chain:e}).then((function(e){return d(e.tokens)}))}),[t.Plugins,e]);var u=function(){var e=c(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.Plugins.oneInch.quote({chain:n.chain,fromTokenAddress:n.fromToken.address,toTokenAddress:n.toToken.address,amount:t.Units.Token(n.fromAmount,n.fromToken.decimals).toString()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function p(){return p=c(a().mark((function e(n){var r,i,s,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.fromToken,i=n.fromAmount,s=n.chain,l=t.Units.Token(i,r.decimals).toString(),"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"===r.address){e.next=5;break}return e.next=5,t.Plugins.oneInch.hasAllowance({chain:s,fromTokenAddress:r.address,fromAddress:o,amount:l}).then(function(){var e=c(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),n){e.next=4;break}return e.next=4,t.Plugins.oneInch.approve({chain:s,tokenAddress:r.address,fromAddress:o});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return alert(e.message)}));case 5:return e.next=7,f(n).then((function(e){400!==e.statusCode&&alert("Swap Complete"),console.log(e)})).catch((function(e){return alert(e.message)}));case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.Plugins.oneInch.swap({chain:n.chain,fromTokenAddress:n.fromToken.address,toTokenAddress:n.toToken.address,amount:t.Units.Token(n.fromAmount,n.fromToken.decimals).toString(),fromAddress:o,slippage:1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{getQuote:u,trySwap:function(e){return p.apply(this,arguments)},tokenList:l}},p=t(60486),f=t(71669),h=t(71577),x=t(68863),v=t(99292),m=t(15394),g=t(77171),y=t(20058),j=t(55489);function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){k(e,n,t[n])}))}return e}var w={card:{width:"430px",boxShadow:"0 0.5rem 1.2rem rgb(189 197 209 / 20%)",border:"1px solid #e7eaf3",borderRadius:"1rem",fontSize:"16px",fontWeight:"500"},input:{padding:"0",fontWeight:"500",fontSize:"23px",display:"block",width:"100%"},priceSwap:{display:"flex",justifyContent:"space-between",fontSize:"15px",color:"#434343",marginTop:"8px",padding:"0 10px"}},S={"0x1":"eth","0x38":"bsc","0x89":"polygon"},T=function(e){for(var n in S)if(S[n]===e)return n},A=function(e){return"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"===e};var C=function(e){var n,t=e.chain,l=u(t),a=l.trySwap,d=l.tokenList,c=l.getQuote,C=(0,i.Nr)(),Z=C.Moralis,E=C.isInitialized,I=C.chainId,F=(0,r.useState)(!1),z=F[0],O=F[1],R=(0,r.useState)(!1),_=R[0],W=R[1],L=(0,r.useState)(),M=L[0],U=L[1],N=(0,r.useState)(),B=N[0],Q=N[1],$=(0,r.useState)(),G=$[0],H=$[1],X=(0,r.useState)(),q=X[0],D=X[1],K=(0,r.useState)(),J=K[0],V=K[1],Y=(0,i.pQ)().fetchTokenPrice,ee=(0,r.useState)({}),ne=ee[0],te=ee[1],oe=(0,r.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne[null===M||void 0===M?void 0:M.address])?ne[null===M||void 0===M?void 0:M.address]:null}),[ne,M]),re=(0,r.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne[null===B||void 0===B?void 0:B.address])?ne[null===B||void 0===B?void 0:B.address]:null}),[ne,B]),ie=(0,r.useMemo)((function(){return oe&&G?"~$ ".concat((G*oe).toFixed(4)):null}),[oe,G]),se=(0,r.useMemo)((function(){var e;return re&&q?"~$ ".concat((Z.Units.FromWei(null===q||void 0===q?void 0:q.toTokenAmount,null===q||void 0===q||null===(e=q.toToken)||void 0===e?void 0:e.decimals)*re).toFixed(4)):null}),[re,q]);(0,r.useEffect)((function(){if(!E||!M||!t)return null;var e=t?T(t):I,n=A(M.address)?(0,j.we)(e):M.address;Y({params:{chain:e,address:n},onSuccess:function(e){return te(b({},ne,k({},M.address,e.usdPrice)))}})}),[t,E,M]),(0,r.useEffect)((function(){if(!E||!B||!t)return null;var e=t?T(t):I,n=A(B.address)?(0,j.we)(e):B.address;Y({params:{chain:e,address:n},onSuccess:function(e){return te(b({},ne,k({},B.address,e.usdPrice)))}})}),[t,E,B]),(0,r.useEffect)((function(){if(!d)return null;U(d["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"])}),[d]);var le=(0,r.useMemo)((function(){return(null===S||void 0===S?void 0:S[I])!==t?{isActive:!1,text:"Switch to ".concat(t)}:G?G&&J?{isActive:!0,text:"Swap"}:{isActive:!1,text:"Select tokens"}:{isActive:!1,text:"Enter an amount"}}),[G,J,I,t]);(0,r.useEffect)((function(){M&&B&&G&&V({fromToken:M,toToken:B,fromAmount:G,chain:t})}),[B,M,G,t]),(0,r.useEffect)((function(){J&&c(J).then((function(e){return D(e)}))}),[J]);var ae=function(){var e=q;if(!e||!(null===ne||void 0===ne?void 0:ne[null===B||void 0===B?void 0:B.address]))return null;if(400===(null===e||void 0===e?void 0:e.statusCode))return(0,o.jsx)(o.Fragment,{children:e.message});console.log(e);var n=e.fromTokenAmount,t=e.toTokenAmount,r=M.symbol,i=B.symbol,s=parseFloat((0,y.hC)(n,M.decimals)/(0,y.hC)(t,B.decimals)).toFixed(6);return(0,o.jsxs)(m.Z,{style:w.priceSwap,children:["Price:"," ",(0,o.jsx)(m.Z,{children:"1 ".concat(i," = ").concat(s," ").concat(r," ($").concat(ne[[B.address]].toFixed(6),")")})]})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(p.Z,{style:w.card,bodyStyle:{padding:"18px"},children:[(0,o.jsxs)(p.Z,{style:{borderRadius:"1rem"},bodyStyle:{padding:"0.8rem"},children:[(0,o.jsx)("div",{style:{marginBottom:"5px",fontSize:"14px",color:"#434343"},children:"From"}),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(f.Z,{bordered:!1,placeholder:"0.00",style:b({},w.input,{marginLeft:"-10px"}),onChange:H,value:G}),(0,o.jsx)(m.Z,{style:{fontWeight:"600",color:"#434343"},children:ie})]}),(0,o.jsxs)(h.Z,{style:{height:"fit-content",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"0.6rem",padding:"5px 10px",fontWeight:"500",fontSize:"17px",gap:"7px",border:"none"},onClick:function(){return O(!0)},children:[M?(0,o.jsx)("img",{src:(null===M||void 0===M?void 0:M.logoURI)||"https://etherscan.io/images/main/empty-token.png",alt:"nologo",width:"30px",preview:!1,style:{borderRadius:"15px"}}):(0,o.jsx)("span",{children:"Select a token"}),(0,o.jsx)("span",{children:null===M||void 0===M?void 0:M.symbol}),(0,o.jsx)(P,{})]})]})]}),(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"10px"},children:(0,o.jsx)(g.Z,{})}),(0,o.jsxs)(p.Z,{style:{borderRadius:"1rem"},bodyStyle:{padding:"0.8rem"},children:[(0,o.jsx)("div",{style:{marginBottom:"5px",fontSize:"14px",color:"#434343"},children:"To"}),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(x.Z,{bordered:!1,placeholder:"0.00",style:w.input,readOnly:!0,value:q?Z.Units.FromWei(null===q||void 0===q?void 0:q.toTokenAmount,null===q||void 0===q||null===(n=q.toToken)||void 0===n?void 0:n.decimals).toFixed(6):""}),(0,o.jsx)(m.Z,{style:{fontWeight:"600",color:"#434343"},children:se})]}),(0,o.jsxs)(h.Z,{style:{height:"fit-content",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"0.6rem",padding:"5px 10px",fontWeight:"500",fontSize:"17px",gap:"7px",border:"none"},onClick:function(){return W(!0)},type:B?"default":"primary",children:[B?(0,o.jsx)("img",{src:(null===B||void 0===B?void 0:B.logoURI)||"https://etherscan.io/images/main/empty-token.png",alt:"nologo",width:"30px",preview:!1,style:{borderRadius:"15px"}}):(0,o.jsx)("span",{children:"Select a token"}),(0,o.jsx)("span",{children:null===B||void 0===B?void 0:B.symbol}),(0,o.jsx)(P,{})]})]})]}),q&&(0,o.jsxs)("div",{children:[(0,o.jsxs)(m.Z,{style:{display:"flex",justifyContent:"space-between",fontSize:"15px",color:"#434343",marginTop:"8px",padding:"0 10px"},children:["Estimated Gas: ",(0,o.jsx)(m.Z,{children:null===q||void 0===q?void 0:q.estimatedGas})]}),(0,o.jsx)(ae,{})]}),(0,o.jsx)(h.Z,{type:"primary",size:"large",style:{width:"100%",marginTop:"15px",borderRadius:"0.6rem",height:"50px"},onClick:function(){return a(J)},disabled:!le.isActive,children:le.text})]}),(0,o.jsx)(v.Z,{title:"Select a token",visible:z,onCancel:function(){return O(!1)},bodyStyle:{padding:0},width:"450px",footer:null,children:(0,o.jsx)(s,{open:z,onClose:function(){return O(!1)},setToken:U,tokenList:d})}),(0,o.jsx)(v.Z,{title:"Select a token",visible:_,onCancel:function(){return W(!1)},bodyStyle:{padding:0},width:"450px",footer:null,children:(0,o.jsx)(s,{open:_,onClose:function(){return W(!1)},setToken:Q,tokenList:d})})]})},P=function(){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("polyline",{points:"6 9 12 15 18 9"})]})},Z=t(87961);var E=function(){return(0,o.jsxs)(Z.Z,{defaultActiveKey:"1",style:{alignItems:"center"},children:[(0,o.jsx)(Z.Z.TabPane,{tab:(0,o.jsx)("span",{children:"Ethereum"}),children:(0,o.jsx)(C,{chain:"eth"})},"1"),(0,o.jsx)(Z.Z.TabPane,{tab:(0,o.jsx)("span",{children:"Binance Smart Chain"}),children:(0,o.jsx)(C,{chain:"bsc"})},"2"),(0,o.jsx)(Z.Z.TabPane,{tab:(0,o.jsx)("span",{children:"Polygon"}),children:(0,o.jsx)(C,{chain:"polygon"})},"3")]})}}},function(e){e.O(0,[173,176,774,888,179],(function(){return n=95455,e(e.s=n);var n}));var n=e.O();_N_E=n}]);