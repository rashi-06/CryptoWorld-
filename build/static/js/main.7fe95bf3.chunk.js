(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{225:function(e,c,t){},226:function(e,c,t){},364:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t.n(a),n=t(31),r=t.n(n),i=(t(225),t(32)),l=t(40),j=t(367),d=t(369),o=t(376),h=(t(166),t(226),t(6)),b=t(36),u=t.n(b),x=t(372),O=t(98),A=t(59),v=t(368),p=t(120),m=t(46),k={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"1766ba61ddmsh4f43b7b508e0252p1e531fjsnc3b3506cd79a"},g=function(e){return{url:e,headers:k}},f=Object(p.a)({reducerPath:"cryptoApi",baseQuery:Object(m.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return g("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return g("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return g("/coin/".concat(c,"/history/").concat(t))}}),getExchanges:e.query({query:function(){return g("/exchanges")}})}}}),y=f.useGetCryptosQuery,w=f.useGetCryptoDetailsQuery,S=f.useGetCryptoHistoryQuery,N=f.useGetExchangesQuery,C=t(366),B=t(2),D=function(){return Object(B.jsx)("div",{className:"loader",children:Object(B.jsx)(C.a,{})})},J=function(e){var c=e.simplified,t=y(c?10:100),s=t.data,n=t.isFetching,r=Object(a.useState)([]),i=Object(h.a)(r,2),j=i[0],d=i[1],o=Object(a.useState)(""),b=Object(h.a)(o,2),p=b[0],m=b[1];return console.log(j),Object(a.useEffect)((function(){var e,c;d(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.coins);var t=null===s||void 0===s||null===(c=s.data)||void 0===c?void 0:c.coins.filter((function(e){return e.name.toLowerCase().includes(p)}));d(t)}),[s,p]),n?Object(B.jsx)(D,{}):Object(B.jsxs)(B.Fragment,{children:[!c&&Object(B.jsx)("div",{className:"search-crypto",children:Object(B.jsx)(x.a,{onChange:function(e){return m(e.target.value)},placeholder:"Search Cryptocurrency Here"})}),Object(B.jsx)(O.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(B.jsx)(A.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(B.jsx)(l.b,{to:"/crypto/".concat(e.id),children:Object(B.jsxs)(v.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(B.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(B.jsxs)("p",{children:["Price: ",u()(e.price),"$"]}),Object(B.jsxs)("p",{children:["Market Cap: ",u()(e.marketCap)]}),Object(B.jsxs)("p",{children:["Daily Change: ",e.change,"%"]})]})})},e.id)}))})]})},Q=t(373),T=t(215),P=t(375),L=t(377),K=t(378),U=t(379),H=t(380),M=t(381),z=function(){var e=Object(a.useState)(!0),c=Object(h.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(null),r=Object(h.a)(n,2),i=r[0],j=r[1];return Object(a.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}})),Object(a.useEffect)((function(){s(!(i<786))}),[i]),Object(B.jsxs)("div",{className:"nav-container",children:[Object(B.jsxs)("div",{className:"logo-container",children:[Object(B.jsx)(Q.a,{src:"data:image/png;base64,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",size:"large"}),Object(B.jsx)(d.a.Title,{level:2,className:"logo",children:Object(B.jsx)(l.b,{to:"/",children:"CryptoWorld"})}),Object(B.jsx)(T.a,{className:"menu-control-container",onClick:function(){return s(!t)},children:Object(B.jsx)(L.a,{})})]}),t&&Object(B.jsxs)(P.a,{theme:"dark",children:[Object(B.jsx)(P.a.Item,{icon:Object(B.jsx)(K.a,{}),children:Object(B.jsx)(l.b,{to:"/",children:"Home"})}),Object(B.jsx)(P.a.Item,{icon:Object(B.jsx)(U.a,{}),children:Object(B.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(B.jsx)(P.a.Item,{icon:Object(B.jsx)(H.a,{}),children:Object(B.jsx)(l.b,{to:"/exchanges",children:"Exchanges"})}),Object(B.jsx)(P.a.Item,{icon:Object(B.jsx)(M.a,{}),children:Object(B.jsx)(l.b,{to:"/news",children:"News"})})]})]})},q=t(370),I=d.a.Title,V=function(){var e,c=y(10),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(B.jsx)(D,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(I,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(B.jsxs)(O.a,{children:[Object(B.jsx)(A.a,{span:12,children:Object(B.jsx)(q.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(B.jsx)(A.a,{span:12,children:Object(B.jsx)(q.a,{title:"Total Exchanges",value:u()(s.totalExchanges)})}),Object(B.jsx)(A.a,{span:12,children:Object(B.jsx)(q.a,{title:"Total Market Cap",value:"$".concat(u()(s.totalMarketCap))})}),Object(B.jsx)(A.a,{span:12,children:Object(B.jsx)(q.a,{title:"Total 24 hrs volume",value:"$".concat(u()(s.total24hVolume))})}),Object(B.jsx)(A.a,{span:12,children:Object(B.jsx)(q.a,{title:"Total Markets",value:u()(s.totalMarkets)})})]}),Object(B.jsxs)("div",{className:"home-heading-container",children:[Object(B.jsx)(I,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the World"}),Object(B.jsx)(I,{level:3,className:"show-more",children:Object(B.jsx)(l.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(B.jsx)(J,{simplified:!0}),Object(B.jsxs)("div",{className:"home-heading-container",children:[Object(B.jsx)(I,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(B.jsx)(I,{level:3,className:"show-more",children:Object(B.jsx)(l.b,{to:"/news",children:"Show more"})})]}),Object(B.jsx)(Ae,{simplified:!0})]})},G=t(374),X=t(136),Y=d.a.Text,F=G.a.Panel,Z=function(){var e,c=N(),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return a?Object(B.jsx)(D,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(O.a,{children:[Object(B.jsx)(A.a,{span:6,children:"Exchanges"}),Object(B.jsx)(A.a,{span:6,children:"24h Trade Volume"}),Object(B.jsx)(A.a,{span:6,children:"Markets"}),Object(B.jsx)(A.a,{span:6,children:"Change"})]}),Object(B.jsx)(O.a,{children:s.map((function(e){return Object(B.jsx)(A.a,{span:24,children:Object(B.jsx)(G.a,{children:Object(B.jsx)(F,{showArrow:!1,header:Object(B.jsxs)(O.a,{children:[Object(B.jsxs)(A.a,{span:6,children:[Object(B.jsx)(Y,{children:Object(B.jsxs)("strong",{children:[e.rank,"."]})}),Object(B.jsx)(Q.a,{className:"exchange-image",src:e.iconUrl}),Object(B.jsx)(Y,{children:Object(B.jsx)("strong",{children:e.name})})]}),Object(B.jsxs)(A.a,{span:6,children:["$",u()(e.volume)]}),Object(B.jsx)(A.a,{span:6,children:u()(e.numberOfMarkets)}),Object(B.jsxs)(A.a,{span:6,children:[u()(e.marketShare),"%"]})]},e.id),children:Object(X.a)(e.description||"")},e.id)})})}))})]})},E=t(371),W=t(382),R=t(383),$=t(384),_=t(385),ee=t(139),ce=t(386),te=t(219),ae=t(216),se=d.a.Title,ne=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],r=[],i=0;i<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);i++){var l,j,d;n.push(null===t||void 0===t||null===(d=t.data)||void 0===d?void 0:d.history[i].price)}for(var o=0;o<(null===t||void 0===t||null===(h=t.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);o+=1){var h,b,u;r.push(new Date(null===t||void 0===t||null===(u=t.data)||void 0===u?void 0:u.history[o].timestamp).toLocaleDateString())}var x={labels:r,datasets:[{label:"Price In USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(O.a,{className:"chart-header",children:[Object(B.jsxs)(se,{level:2,className:"chartTitle",children:[s," Price Chart"]}),Object(B.jsxs)(A.a,{className:"price-container",children:[Object(B.jsxs)(se,{level:5,className:"price-change",children:["Change: ",null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(B.jsxs)(se,{level:5,className:"current-price",children:["Current ",s," Price: $ ",a]})]})]}),Object(B.jsx)(ae.a,{data:x,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},re=d.a.Title,ie=d.a.Text,le=E.a.Option,je=function(){var e,c,t=Object(i.f)().coinId,s=Object(a.useState)("7d"),n=Object(h.a)(s,2),r=n[0],l=n[1],j=w(t),d=j.data,o=j.isFetching,b=S({coinId:t,timePeriod:r}).data,x=null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.coin;if(o)return Object(B.jsx)(D,{});var v=[{title:"Price to USD",value:"$ ".concat(x.price&&u()(x.price)),icon:Object(B.jsx)(W.a,{})},{title:"Rank",value:x.rank,icon:Object(B.jsx)(R.a,{})},{title:"24h Volume",value:"$ ".concat(x.volume&&u()(x.volume)),icon:Object(B.jsx)($.a,{})},{title:"Market Cap",value:"$ ".concat(x.marketCap&&u()(x.marketCap)),icon:Object(B.jsx)(W.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(u()(x.allTimeHigh.price)),icon:Object(B.jsx)(_.a,{})}],p=[{title:"Number Of Markets",value:x.numberOfMarkets,icon:Object(B.jsx)(U.a,{})},{title:"Number Of Exchanges",value:x.numberOfExchanges,icon:Object(B.jsx)(H.a,{})},{title:"Aprroved Supply",value:x.approvedSupply?Object(B.jsx)(ee.a,{}):Object(B.jsx)(ce.a,{}),icon:Object(B.jsx)(te.a,{})},{title:"Total Supply",value:"$ ".concat(u()(x.totalSupply)),icon:Object(B.jsx)(te.a,{})},{title:"Circulating Supply",value:"$ ".concat(u()(x.circulatingSupply)),icon:Object(B.jsx)(te.a,{})}];return Object(B.jsxs)(A.a,{className:"coin-detail-container",children:[Object(B.jsxs)(A.a,{className:"coin-heading-container",children:[Object(B.jsxs)(re,{level:2,className:"coin-name",children:[x.name,"(",x.slug,")  Prices"]}),Object(B.jsxs)("p",{children:[x.name," live price in USD . View market-cap , statistics . supply .."]})]}),Object(B.jsx)(E.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period !!!",onChange:function(e){return l(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(B.jsx)(le,{children:e},e)}))}),Object(B.jsx)(ne,{coinHistory:b,currentPrice:u()(x.price),coinName:x.name}),Object(B.jsxs)(A.a,{className:"stats-container",children:[Object(B.jsxs)(A.a,{className:"coin-value-statistics",children:[Object(B.jsxs)(A.a,{className:"coin-value-statistics-heading",children:[Object(B.jsxs)(re,{level:3,className:"coin-detailes-heading",children:[x.name," Value Statistics"]}),Object(B.jsxs)("p",{children:["An overview  showing the statistics of the ",x.name," currency."]})]}),v.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(B.jsxs)(A.a,{className:"coin-stats",children:[Object(B.jsxs)(A.a,{className:"coin-stats-name",children:[Object(B.jsx)(ie,{children:c}),Object(B.jsx)(ie,{children:t})]}),Object(B.jsx)(ie,{className:"stats",children:a})]})}))]}),Object(B.jsxs)(A.a,{className:"coin-value-statistics",children:[Object(B.jsxs)(A.a,{className:"coin-value-statistics-heading",children:[Object(B.jsx)(re,{level:3,className:"coin-detailes-heading",children:"All Cryptos Value Statistics"}),Object(B.jsx)("p",{children:"An overview showing the statistics of the all the cryptocurrencies."})]}),p.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(B.jsxs)(A.a,{className:"coin-stats",children:[Object(B.jsxs)(A.a,{className:"coin-stats-name",children:[Object(B.jsx)(ie,{children:c}),Object(B.jsx)(ie,{children:t})]}),Object(B.jsx)(ie,{className:"stats",children:a})]})}))]})]}),Object(B.jsxs)(A.a,{className:"coin-desc-link",children:[Object(B.jsx)(O.a,{className:"coin-desc",children:Object(B.jsxs)(re,{level:3,className:"coin-details-heading",children:["What is ",x.name," ?",Object(B.jsx)("br",{}),Object(X.a)(x.description)]})}),Object(B.jsxs)(A.a,{className:"coin-links",children:[Object(B.jsxs)(re,{level:3,className:"coin-details-heading",children:[x.name," Links"]}),null===(c=x.links)||void 0===c?void 0:c.map((function(e){return Object(B.jsxs)(O.a,{className:"coin-link",children:[Object(B.jsx)(re,{level:5,className:"link-name",children:e.type}),Object(B.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},de=t(212),oe=t.n(de),he={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"1766ba61ddmsh4f43b7b508e0252p1e531fjsnc3b3506cd79a"},be=Object(p.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(m.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:he}}})}}}),ue=be.useGetCryptoNewsQuery,xe=d.a.Text,Oe=d.a.Title,Ae=(E.a.Option,function(e){var c=e.simplified,t=ue({newsCategory:"Cryptocurrency",count:c?6:12}).data;return(null===t||void 0===t?void 0:t.value)?Object(B.jsx)(O.a,{gutter:[24,24],children:t.value.map((function(e,c){var t,a,s,n,r,i;return Object(B.jsx)(A.a,{xs:24,sm:12,lg:8,children:Object(B.jsx)(v.a,{className:"news-card",hoverable:!0,children:Object(B.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(B.jsxs)("div",{className:"news-image-container",children:[Object(B.jsx)(Oe,{className:"news-title",level:5,children:Object(B.jsx)("p",{children:e.description.length>50?"".concat(e.name.substring(0,50),"..."):e.name})}),Object(B.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px "},src:null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl,alt:"news"})]}),Object(B.jsx)("p",{children:Object(B.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description})}),Object(B.jsxs)("div",{className:"provider-container",children:[Object(B.jsxs)("div",{children:[Object(B.jsx)(Q.a,{src:null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl,alt:""}),Object(B.jsx)(xe,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(B.jsx)(xe,{children:oe()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))}):Object(B.jsx)(D,{})});var ve,pe=function(){return Object(B.jsxs)("div",{className:"app",children:[Object(B.jsx)("div",{className:"navbar",children:Object(B.jsx)(z,{})}),Object(B.jsxs)("div",{className:"main",children:[Object(B.jsx)(j.a,{children:Object(B.jsx)("div",{className:"routes",children:Object(B.jsxs)(i.c,{children:[Object(B.jsx)(i.a,{exact:!0,path:"/",children:Object(B.jsx)(V,{})}),Object(B.jsx)(i.a,{exact:!0,path:"/exchanges",children:Object(B.jsx)(Z,{})}),Object(B.jsx)(i.a,{exact:!0,path:"/cryptocurrencies",children:Object(B.jsx)(J,{})}),Object(B.jsx)(i.a,{exact:!0,path:"/crypto/:coinId",children:Object(B.jsx)(je,{})}),Object(B.jsx)(i.a,{exact:!0,path:"/news",children:Object(B.jsx)(Ae,{})})]})})}),Object(B.jsx)("div",{className:"footer",children:Object(B.jsxs)(d.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["CryptoWorld",Object(B.jsx)("br",{}),"All rights are reserved",Object(B.jsx)("br",{}),Object(B.jsx)(o.b,{children:Object(B.jsx)(l.b,{to:"/",children:"Home"})})]})})]})]})},me=t(7),ke=t(14),ge=Object(ke.a)({reducer:(ve={},Object(me.a)(ve,f.reducerPath,f.reducer),Object(me.a)(ve,be.reducerPath,be.reducer),ve)}),fe=t(44);r.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(l.a,{children:Object(B.jsx)(fe.a,{store:ge,children:Object(B.jsx)(pe,{})})})}),document.getElementById("root"))}},[[364,1,2]]]);
//# sourceMappingURL=main.7fe95bf3.chunk.js.map