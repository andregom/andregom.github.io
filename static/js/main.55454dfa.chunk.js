(this["webpackJsonpminha-carteira"]=this["webpackJsonpminha-carteira"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var r,a,o,c,i,u,s,l,d,p,f,b,j,m,h,y,x,O,g,v,w,q,C,S,E,F,k,M,N,T=t(0),D=t.n(T),P=t(16),z=t.n(P),L=t(3),B=t(2),A=Object(B.b)(r||(r=Object(L.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    *, button, input {\n        border: 0;\n        outline: 0;\n        font-family: Roboto, sans-serif;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]))),I=t(7),J=t(4),R=B.c.div(a||(a=Object(L.a)(["\n    display: grid;\n    grid-template-columns: 250px auto;\n    grid-template-rows: 70px auto;\n    grid-template-areas:\n    'AS MH'\n    'AS CT'; \n    height: 100vh;\n"]))),V=t(20),Y=t(5),H=t(21),U=t.n(H),_=B.c.div(o||(o=Object(L.a)(["\n    display: flex;\n    align-items: center;\n"]))),G=B.c.span(c||(c=Object(L.a)(["\n    color: ","\n"])),(function(e){return e.theme.color.white})),X=Object(B.c)(U.a).attrs((function(e){var n=e.theme;return{onColor:n.color.info,offColor:n.color.warning}}))(i||(i=Object(L.a)(["\n    margin: 0px 7px;\n"]))),$=t(1),K=function(){var e=Object(T.useState)(!1),n=Object(Y.a)(e,2),t=n[0],r=n[1];return Object($.jsxs)(_,{children:[Object($.jsx)(G,{children:"Light"}),Object($.jsx)(X,{checked:t,uncheckedIcon:!1,checkedIcon:!1,onChange:function(){r(!t)}}),Object($.jsx)(G,{children:"Dark"})]})},Q=["&#128540;","&#128541;","&#128543;","&#128537;","&#128526;","&#128522;","&#128521;","&#128518;","&#128516;","&#128513;","&#128515;","&#128512;","&#128125;","&#128056;","&#129327;","&#129297;","&#129297;","&#129297"],W=B.c.div(u||(u=Object(L.a)(["\ngrid-area: MH;\ncolor: ",";\nbackground-color: ",";\n\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n\npadding: 0 10px;\n\nborder-bottom: 1px solid ","\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.secondary}),(function(e){return e.theme.color.gray})),Z=B.c.div(s||(s=Object(L.a)(["\n    color: ","\n"])),(function(e){return e.theme.color.white})),ee=B.c.h3(l||(l=Object(L.a)([""]))),ne=B.c.span(d||(d=Object(L.a)([""]))),te=Q.length,re=function(){var e=Object(T.useMemo)((function(){var e=Math.floor(Math.random()*te);return Q[e]}),[]);return Object($.jsxs)(W,{children:[Object($.jsx)(K,{}),Object($.jsxs)(Z,{children:[Object($.jsxs)(ee,{children:["Ol\xe1, ",Object($.jsx)("div",{style:{display:"inline"},dangerouslySetInnerHTML:{__html:Object(V.sanitize)(e)}})]}),Object($.jsx)(ne,{children:"Andr\xe9 Gomes"})]})]})},ae=t(10),oe=t.p+"static/media/logo.3fc9096d.svg",ce=B.c.div(p||(p=Object(L.a)(["\n    grid-area: AS;\n    background-color: ",";\n    padding-left: 20px;\n    border-right: 1px solid ","\n"])),(function(e){return e.theme.color.secondary}),(function(e){return e.theme.color.gray})),ie=B.c.header(f||(f=Object(L.a)(["\n    display: flex;\n    align-items: center;\n    height: 70px\n"]))),ue=B.c.img(b||(b=Object(L.a)(["\n    height: 40px;\n    width: 40px\n"]))),se=B.c.h3(j||(j=Object(L.a)(["\n    color: ",";\n    margin-left: 10px;\n"])),(function(e){return e.theme.color.white})),le=B.c.nav(m||(m=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n\n    > * {\n        text-decoration: none;\n    }\n"]))),de=B.c.a(h||(h=Object(L.a)(["\n    color: ",";\n    padding: 2px;\n    text-decoration: none; \n    margin: 7px 0;\n    display: flex;\n    align-items: center;\n    transition: opacity .3s;\n    &:hover {\n        opacity: .5;\n    }\n\n    > svg {\n        font-size: 18px;\n        margin-right: 5px;\n    }\n"])),(function(e){return e.theme.color.info})),pe=function(){return Object($.jsxs)(ce,{children:[Object($.jsxs)(ie,{children:[Object($.jsx)(ue,{src:oe,alt:"Logo Minha Carteira"}),Object($.jsx)(se,{children:"Minha Carteira"})]}),Object($.jsxs)(le,{children:[Object($.jsx)(I.b,{to:"/dashboard",children:Object($.jsxs)(de,{children:[Object($.jsx)(ae.c,{}),"Dashboard"]})}),Object($.jsx)(I.b,{to:"/list/entry-ballance",children:Object($.jsxs)(de,{children:[Object($.jsx)(ae.b,{}),"Entradas"]})}),Object($.jsx)(I.b,{to:"/list/exit-ballance",children:Object($.jsxs)(de,{children:[Object($.jsx)(ae.a,{}),"Sa\xeddas"]})}),Object($.jsx)(I.b,{to:"#",children:Object($.jsxs)(de,{children:[Object($.jsx)(ae.d,{}),"Sair"]})})]})]})},fe=B.c.div(y||(y=Object(L.a)(["\n    grid-area: CT;\n    color: ",";\n    background-color: ",";\n    \n    padding: 25px;\n    \n    height: calc(100vh - 70px);\n    overflow-y: scroll;\n\n    .scroll {\n        width: 10px;\n        scrollbar-color: orange lightyellow;\n    }\n\n    .scroll-color-dark {\n        scrollbar-color: dark;\n    }\n\n    .scroll-color-light {\n        scrollbar-color: light;\n    }\n\n    .scroll-color-colors {\n        scrollbar-color: orange lightyellow;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background-color: ",";\n        border-radius: 10px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.secondary}),(function(e){return e.theme.color.tertiary})),be=function(e){var n=e.children;return Object($.jsx)(fe,{children:n})},je=function(e){var n=e.children;return Object($.jsxs)(R,{children:[Object($.jsx)(re,{}),Object($.jsx)(pe,{}),Object($.jsx)(be,{children:n})]})},me=t(22),he=t.n(me),ye=B.c.div(x||(x=Object(L.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]))),xe=B.c.div(O||(O=Object(L.a)(["\n    > h1 {\n        color: ",";\n    }\n\n    &::after {\n        content: '';\n        display: block;\n        width: 55px;\n        border-bottom: 10px solid ",";\n    }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.lineColor})),Oe=B.c.div(g||(g=Object(L.a)(["\n    display: flex;\n"]))),ge=function(e){var n=e.title,t=e.lineColor,r=e.children;return Object($.jsxs)(ye,{children:[Object($.jsx)(xe,{lineColor:t,children:Object($.jsx)("h1",{children:n})}),Object($.jsx)(Oe,{children:r})]})},ve=B.c.div(v||(v=Object(L.a)(["\n    > select {\n        padding: 7px 10px;\n        border-radius: 5px;\n        margin-left: 7px;\n    }\n"]))),we=function(e){var n=e.options,t=e.onChange,r=e.defaultValue,a=e.value;return Object($.jsx)(ve,{children:Object($.jsx)("select",{onChange:t,defaultValue:r,value:a,children:n.map((function(e){return Object($.jsx)("option",{value:e.value,children:e.label},e.value)}))})})},qe=B.c.div(w||(w=Object(L.a)(["\n    width: 32%;\n    height: 150px;\n\n    margin: 10px 0;\n    \n    background-color: ",";\n    color: ",";\n\n    border-radius: 7px;\n    padding: 10px 20px;\n\n    position: relative;\n    overflow: hidden;\n\n    > img {\n        height: 110%;\n\n        position: absolute;\n        top: -10px;\n        right: -30px;\n\n        opacity: 30%;\n    }\n\n    > span {\n        font-size: 18px;\n        font-weight: 500;\n    }\n\n    > small {\n        font-size: 12px;\n        position: absolute;\n        bottom: 10px;\n    }\n"])),(function(e){return e.color}),(function(e){return e.theme.color.white})),Ce=t.p+"static/media/dollar.d4a9bb64.svg",Se=t.p+"static/media/arrow-up.e0895fae.svg",Ee=t.p+"static/media/arrow-down.7681f6e6.svg",Fe=t(23),ke=t.n(Fe),Me=function(e){var n=e.title,t=e.amount,r=e.footerLabel,a=e.icon,o=e.color,c=function(){switch(a){case"dolar":return Ce;case"arrowUp":return Se;case"arrowDown":return Ee;default:return""}};return Object($.jsxs)(qe,{color:o,children:[Object($.jsx)("span",{children:n}),Object($.jsx)("h2",{children:Object($.jsx)(ke.a,{end:t,prefix:"R$ ",separator:".",decimal:",",decimals:2})}),Object($.jsx)("small",{children:r}),c()&&Object($.jsx)("img",{src:c(),alt:n})]})},Ne=B.c.div(q||(q=Object(L.a)(["\n    width: 48%;\n\n    height: 260px;\n\n    background-color: ",";\n    color: ",";\n    border-radius: 7px;\n\n    margin: 10px 0;\n    padding: 30px 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    > header img {\n        width: 35px;\n        margin-left: 5px;\n    }\n\n    > header p {\n        font-size: 18px;\n    }\n"])),(function(e){return e.theme.color.tertiary}),(function(e){return e.theme.color.white})),Te=function(e){var n=e.title,t=e.description,r=e.footerText,a=e.icon;return Object($.jsxs)(Ne,{children:[Object($.jsxs)("header",{children:[Object($.jsxs)("h1",{children:[n,Object($.jsx)("img",{src:a,alt:"title"})]}),Object($.jsx)("p",{children:t})]}),Object($.jsx)("footer",{children:Object($.jsx)("span",{children:r})})]})},De=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Pe=function(e){return De[e]},ze=function(e){var n={years:[]};return e.forEach((function(e){var t=new Date(e.date),r=t.getFullYear(),a=t.getMonth();n.years.some((function(e){return e.value===r}))||n.years.push({value:r,months:new Set});var o=n.years.find((function(e){return e.value===r}));o&&o.months.add(a)})),n.years.map((function(e){return{year:{value:e.value,label:e.value},months:Array.from(e.months).map((function(e){return{value:e+1,label:Pe(e)}}))}}))},Le=t(14),Be=[{description:"Sal\xe1rio",amount:"1300.52",type:"entrada",frequency:"recorrente",date:"2022-01-10"},{description:"Freela",amount:"150.13",type:"entrada",frequency:"eventual",date:"2022-01-17"},{description:"Sal\xe1rio",amount:"2500.23",type:"entrada",frequency:"recorrente",date:"2022-02-10"},{description:"Freela site",amount:"900.23",type:"entrada",frequency:"eventual",date:"2021-02-21"},{description:"Freela app",amount:"950.92",type:"entrada",frequency:"eventual",date:"2019-02-23"},{description:"Sal\xe1rio",amount:"2500.25",type:"entrada",frequency:"recorrente",date:"2020-03-10"},{description:"Sal\xe1rio",amount:"3500.25",type:"entrada",frequency:"recorrente",date:"2022-03-10"},{description:"Sal\xe1rio",amount:"2500.18",type:"entrada",frequency:"recorrente",date:"2022-04-10"},{description:"Sal\xe1rio",amount:"2500.15",type:"entrada",frequency:"recorrente",date:"2022-05-10"},{description:"Sal\xe1rio",amount:"2500.12",type:"entrada",frequency:"recorrente",date:"2017-06-10"},{description:"Sal\xe1rio",amount:"2500.12",type:"entrada",frequency:"recorrente",date:"2020-05-10"},{description:"Sal\xe1rio",amount:"2500.12",type:"entrada",frequency:"recorrente",date:"2020-04-10"},{description:"Sal\xe1rio",amount:"2500.12",type:"entrada",frequency:"recorrente",date:"2020-03-10"},{description:"Sal\xe1rio",amount:"2500.00",type:"entrada",frequency:"recorrente",date:"2022-07-10"}],Ae=[{description:"Energia el\xe9trica",amount:"150.55",type:"sa\xedda",frequency:"recorrente",date:"2020-01-10"},{description:"\xc1gua",amount:"75.55",type:"sa\xedda",frequency:"recorrente",date:"2025-01-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-01-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-01-23"},{description:"Compras do m\xeas",amount:"625.78",type:"sa\xedda",frequency:"recorrente",date:"2023-01-23"},{description:"Lanche",amount:"45.70",type:"sa\xedda",frequency:"eventual",date:"2023-01-23"},{description:"Blusa",amount:"95.70",type:"sa\xedda",frequency:"eventual",date:"2023-01-23"},{description:"Energia el\xe9trica",amount:"125.55",type:"sa\xedda",frequency:"recorrente",date:"2020-02-10"},{description:"\xc1gua",amount:"90.15",type:"sa\xedda",frequency:"recorrente",date:"2025-02-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-02-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-02-23"},{description:"Compras do m\xeas",amount:"540.00",type:"sa\xedda",frequency:"recorrente",date:"2025-02-25"},{description:"Parcela do Celular 1/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2026-02-26"},{description:"Cinema",amount:"45.00",type:"sa\xedda",frequency:"eventual",date:"2023-02-23"},{description:"Energia el\xe9trica",amount:"97.00",type:"sa\xedda",frequency:"recorrente",date:"2020-03-10"},{description:"\xc1gua",amount:"100.10",type:"sa\xedda",frequency:"recorrente",date:"2025-03-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-03-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-03-23"},{description:"Compras do m\xeas",amount:"800.50",type:"sa\xedda",frequency:"recorrente",date:"2027-03-17"},{description:"Parcela do Celular 2/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2028-03-18"},{description:"Troca de Ol\xe9o do carro",amount:"90.00",type:"sa\xedda",frequency:"eventual",date:"2023-03-23"},{description:"Energia el\xe9trica",amount:"75.99",type:"sa\xedda",frequency:"recorrente",date:"2020-04-11"},{description:"\xc1gua",amount:"80.33",type:"sa\xedda",frequency:"recorrente",date:"2025-04-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-04-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-04-23"},{description:"Compras do m\xeas",amount:"600.00",type:"sa\xedda",frequency:"recorrente",date:"2025-04-25"},{description:"Parcela do Celular 3/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2026-04-26"},{description:"Ebook de React Js",amount:"85.95",type:"sa\xedda",frequency:"eventual",date:"2023-04-13"},{description:"Energia el\xe9trica",amount:"125.55",type:"sa\xedda",frequency:"recorrente",date:"2020-05-10"},{description:"\xc1gua",amount:"90.15",type:"sa\xedda",frequency:"recorrente",date:"2025-05-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-05-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-05-23"},{description:"Compras do m\xeas",amount:"540.00",type:"sa\xedda",frequency:"recorrente",date:"2025-05-25"},{description:"Parcela do Celular 4/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2026-05-26"},{description:"Blusa Iron Man",amount:"150.00",type:"sa\xedda",frequency:"eventual",date:"2023-01-23"},{description:"Energia el\xe9trica",amount:"200.00",type:"sa\xedda",frequency:"recorrente",date:"2020-06-10"},{description:"\xc1gua",amount:"150.00",type:"sa\xedda",frequency:"recorrente",date:"2025-06-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-06-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-06-23"},{description:"Compras do m\xeas",amount:"559.15",type:"sa\xedda",frequency:"recorrente",date:"2025-06-25"},{description:"Parcela do Celular 5/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2026-06-26"},{description:"Perfume",amount:"250.00",type:"sa\xedda",frequency:"eventual",date:"2021-06-21"},{description:"Energia el\xe9trica",amount:"250.00",type:"sa\xedda",frequency:"recorrente",date:"2020-07-10"},{description:"\xc1gua",amount:"90.00",type:"sa\xedda",frequency:"recorrente",date:"2025-07-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2023-07-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2023-07-23"},{description:"Compras do m\xeas",amount:"700.00",type:"sa\xedda",frequency:"recorrente",date:"2025-07-25"},{description:"Cafeteira",amount:"250.00",type:"sa\xedda",frequency:"eventual",date:"2026-07-26"},{description:"Pizza",amount:"60.00",type:"sa\xedda",frequency:"eventual",date:"2029-07-19"}],Ie=function(e){return"entry-ballance"===e?{title:"Entradas",lineColor:"#4E41F0",data:Be}:"exit-ballance"===e?{title:"Sa\xeddas",lineColor:"#E44C4E",data:Ae}:"all"===e?{title:"Todas",lineColor:"#F5F5F5",data:[].concat(Object(Le.a)(Be),Object(Le.a)(Ae))}:{title:"Not a valid address",lineColor:"red",data:[]}},Je=t.p+"static/media/happy.2abe7ca8.svg",Re=B.c.div(C||(C=Object(L.a)(["\n    \n"]))),Ve=B.c.div(S||(S=Object(L.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    flex-wrap: wrap;\n"]))),Ye=function(){var e=Object(T.useState)((new Date).getMonth()+1),n=Object(Y.a)(e,2),t=n[0],r=n[1],a=Object(T.useState)((new Date).getFullYear()),o=Object(Y.a)(a,2),c=o[0],i=o[1],u=Object(T.useState)([]),s=Object(Y.a)(u,2),l=s[0],d=s[1],p=Object(T.useState)([]),f=Object(Y.a)(p,2),b=f[0],j=f[1],m="all",h=Object(T.useMemo)((function(){return Ie(m)}),[m]),y=Object(T.useMemo)((function(){return ze(h.data)}),[h]);Object(T.useEffect)((function(){var e,n=null===(e=y.find((function(e){return e.year.value===Number(c)})))||void 0===e?void 0:e.months;d(void 0!==n?n:[])}),[y,c,m]),Object(T.useEffect)((function(){j(y.map((function(e){return e.year})))}),[y,m]),Object(T.useLayoutEffect)((function(){b.length>0&&(b.some((function(e){return e.value==c}))||i(Number(b[0].value)))}),[b,y,m]),Object(T.useEffect)((function(){l.length>0&&(l.some((function(e){return e.value==t}))||r(Number(l[0].value)))}),[c,l]);var x=Object(T.useMemo)((function(){return he()((function(e){var n=0;return e.forEach((function(e){var r=new Date(e.date),a=r.getFullYear();if(r.getMonth()+1==t&&a==c)try{n+=Number(e.amount)}catch(o){throw new Error("Invalid amount! Not a valid number.")}})),n}))}),[c,t]);return Object($.jsxs)(Re,{children:[Object($.jsxs)(ge,{title:"Dashboard",lineColor:"#F7931B",children:[Object($.jsx)(we,{options:l,onChange:function(e){return r(Number(e.target.value))},defaultValue:t,value:t}),Object($.jsx)(we,{options:b,onChange:function(e){return i(Number(e.target.value))},defaultValue:c,value:c})]}),Object($.jsxs)(Ve,{children:[Object($.jsx)(Me,{title:"saldo",amount:x(Be)-x(Ae),footerLabel:"atualizado com base nas entradas e sa\xeddas",icon:"dolar",color:"#4E41F0"}),Object($.jsx)(Me,{title:"entradas",amount:x(Be),footerLabel:"atualizado com base nas entradas e sa\xeddas",icon:"arrowUp",color:"#F7931B"}),Object($.jsx)(Me,{title:"sa\xeddas",amount:x(Ae),footerLabel:"atualizado com base nas entradas e sa\xeddas",icon:"arrowDown",color:"#E44C4E"}),Object($.jsx)(Te,{title:"Muito bem!",description:"Sua carteira est\xe1 positiva!",footerText:"Continue assim. Considere investir o seu saldo.",icon:Je})]})]})},He=t(24),Ue=B.c.div(E||(E=Object(L.a)(["\n\n"]))),_e=B.c.main(F||(F=Object(L.a)(["\n\n"]))),Ge=B.c.div(k||(k=Object(L.a)(["\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n\n    margin-bottom: 10px;\n\n    .tag-filter {\n        font-size: 18px;\n        font-weight: 500;\n\n        background: none;\n        color: ",";\n\n        margin: 0 10px;\n\n        transition: all .5s;\n        opacity: .4;\n        transform: scale(.9,.9);\n\n        &:hover {\n            opacity: 1;\n            transform: scale(1.1, 1.1);\n        }\n    }\n    \n    .tag-filter::after {\n        content: '';\n        display: block;\n        min-width: 50px;\n        max-width: 75%;\n        margin: 2.5px auto;\n        margin-right: 5px;\n        margin-left: 10px;\n    }\n\n    .tag-filter:hover:after {\n        transition: all .5s;\n        \n        max-width: 90%;\n        margin-right: auto;\n        margin-left: 2.5px;\n    }\n\n    .tag-filter-recurrent::after {\n        border-bottom: 10px solid ","\n    }\n\n    .tag-filter-eventual::after {\n        border-bottom: 10px solid ","\n    }\n\n    .tag-active {\n        opacity: 1;\n        transform: scale(1.05, 1.05);\n\n        &:hover {\n            opacity: .7;\n            transform: scale(.9, .9);\n        }\n    }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.success}),(function(e){return e.theme.color.warning})),Xe=function(e,n){var t="tag-active",r=e.className.split(" ");Ke(r,t)&&Ze(n)?e.className=en(r,t):Qe(r,t)&&We(n)&&(e.className=$e(e.className,t))},$e=function(e,n){return e+" ".concat(n)},Ke=function(e,n){return e.some((function(e){return e===n}))},Qe=function(e,n){return!Ke(e,n)},We=function(e){return!0===e},Ze=function(e){return!1===e},en=function(e,n){return e.filter((function(e){return e!==n})).join(" ")},nn=function(e,n){e.onmouseleave=function(t){Xe(e,n)}},tn=B.c.li(M||(M=Object(L.a)(["\n    background-color: ",";\n\n    list-style: none;\n    border-radius: 5px;\n\n    margin: 10px 0;\n    padding: 12px 10px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    cursor: pointer;\n    transition: all .3s;\n\n    position: relative;\n\n    &:hover {\n        opacity: .7;\n        transform: translateX(10px);\n    }\n\n    > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        padding-left: 10px;\n    }\n"])),(function(e){return e.theme.color.tertiary})),rn=B.c.div(N||(N=Object(L.a)(["\n    width: 10px;\n    height: 60%;\n\n    background-color: ",";\n\n    position: absolute;\n    left: 4px;\n"])),(function(e){return e.color})),an=function(e){var n=e.tagColor,t=e.title,r=e.subtitle,a=e.amount;return Object($.jsxs)(tn,{children:[Object($.jsx)(rn,{color:n}),Object($.jsxs)("div",{children:[Object($.jsx)("span",{children:t}),Object($.jsx)("small",{children:r})]}),Object($.jsx)("h3",{children:a})]})},on=function(e){return e.toLocaleString("pt-br",{style:"currency",currency:"BRL"})},cn=function(e,n){return un(n)?"0".concat(n):"".concat(n)},un=function(e){return e<=9},sn=function(e){var n=new Date(e),t=cn(0,n.getDate()+1),r=cn(0,n.getMonth()+1),a=cn(0,n.getFullYear());return"".concat(t,"/").concat(r,"/").concat(a)},ln=function(){var e=Object(T.useRef)([]),n=Object(T.useState)([]),t=Object(Y.a)(n,2),r=t[0],a=t[1],o=Object(T.useState)((new Date).getMonth()+1),c=Object(Y.a)(o,2),i=c[0],u=c[1],s=Object(T.useState)((new Date).getFullYear()),l=Object(Y.a)(s,2),d=l[0],p=l[1],f=Object(T.useState)([]),b=Object(Y.a)(f,2),j=b[0],m=b[1],h=Object(T.useState)([]),y=Object(Y.a)(h,2),x=y[0],O=y[1],g=Object(T.useState)({recurrent:!0,sporadic:!0}),v=Object(Y.a)(g,2),w=v[0],q=v[1],C=Object(J.g)().type,S=Object(T.useMemo)((function(){return Ie(C)}),[C]),E=Object(T.useMemo)((function(){return ze(S.data)}),[S]),F=function(e){void 0!==e&&("recurrent"!==e&&"sporadic"!==e||k(e))},k=function(n){var t=!w[n];w[n]=t,q(Object(He.a)({},w));var r=e.current.filter((function(e){return e.value===n}))[0];nn(r,t)};return Object(T.useEffect)((function(){var e,n=null===(e=E.find((function(e){return e.year.value===Number(d)})))||void 0===e?void 0:e.months;m(void 0!==n?n:[])}),[E,d,C]),Object(T.useEffect)((function(){O(E.map((function(e){return e.year})))}),[E,C]),Object(T.useLayoutEffect)((function(){var e=S.data.filter((function(e){var n=new Date(e.date),t=n.getMonth()+1,r=n.getFullYear(),a="recorrente"===e.frequency?"recurrent":"sporadic";return t===i&&r===d&&w[a]})),n=e.map((function(n){return{id:String(Math.random()*e.length),description:n.description,amountFormatted:on(Number(n.amount)),type:n.type,frequency:n.frequency,dateFormatted:sn(n.date),tagColor:"recorrente"===n.frequency?"#4E41f0":"#E44C4E"}}));a(n)}),[S,i,d,w]),Object(T.useLayoutEffect)((function(){x.length>0&&(x.some((function(e){return e.value==d}))||p(Number(x[0].value)))}),[x,E,C]),Object(T.useEffect)((function(){j.length>0&&(j.some((function(e){return e.value==i}))||u(Number(j[0].value)))}),[d,j]),Object($.jsxs)(Ue,{children:[Object($.jsxs)(ge,{title:S.title,lineColor:S.lineColor,children:[Object($.jsx)(we,{options:j,onChange:function(e){return u(Number(e.target.value))},defaultValue:i,value:i}),Object($.jsx)(we,{options:x,onChange:function(e){return p(Number(e.target.value))},defaultValue:d,value:d})]}),Object($.jsxs)(Ge,{children:[Object($.jsx)("button",{type:"button",ref:function(n){return e.current[0]=n},value:"recurrent",className:"tag-filter tag-filter-recurrent tag-active",onClick:function(e){return F(e.currentTarget.value)},children:"Recorrentes"}),Object($.jsx)("button",{type:"button",ref:function(n){return e.current[1]=n},value:"sporadic",className:"tag-filter tag-filter-eventual tag-active",onClick:function(e){return F(e.currentTarget.value)},children:"Eventuais"})]}),Object($.jsx)(_e,{children:r.map((function(e){return Object($.jsx)(an,{tagColor:e.tagColor,title:e.description,subtitle:e.dateFormatted,amount:e.amountFormatted},e.id)}))})]})},dn=function(){return Object($.jsx)(je,{children:Object($.jsxs)(J.c,{children:[Object($.jsx)(J.a,{path:"/dashboard",element:Object($.jsx)(Ye,{})}),Object($.jsx)(J.a,{path:"/list/:type",element:Object($.jsx)(ln,{})})]})})},pn=function(){return Object($.jsx)(I.a,{children:Object($.jsx)(dn,{})})},fn={title:"dark",color:{primary:"#1B1F38",secondary:"#252A48",tertiary:"#313852",white:"#FFF",black:"#000",gray:"#BFBFBF",success:"#4E41F0",info:"#F7931B",warning:"#E44C4E"}};z.a.render(Object($.jsx)(B.a,{theme:fn,children:Object($.jsxs)(D.a.StrictMode,{children:[Object($.jsx)(A,{}),Object($.jsx)(pn,{})]})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.55454dfa.chunk.js.map