(this["webpackJsonpfilm-search"]=this["webpackJsonpfilm-search"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),r=c(26),s=c.n(r),l=(c(35),c(36),c(10)),o=c(2),j=(c(37),c.p+"static/media/movie.c9f9d1ef.svg");function h(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"title-div",children:[Object(n.jsx)("h1",{children:"Find your favorite Movie"}),Object(n.jsx)(l.b,{to:"".concat("/film-search","/search"),children:Object(n.jsx)("button",{children:"Search"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:j,width:"300px",className:"home-img",alt:"home"})})]})}var d=c(15),u=c.n(d),b=c(28),m=c(16),p=c(29),v=c.n(p);function x(e){var t=e.data,c=e.handleChange,i=e.handleSubmit;return Object(n.jsxs)("section",{className:"principal",style:{backgroundImage:"url(".concat(t.imgBg,")")},children:[Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("input",{type:"text",placeholder:"Search Movie Title...",onChange:c,required:!0}),Object(n.jsx)("button",{children:"Search"})]})}),Object(n.jsxs)("div",{className:"children",children:[Object(n.jsx)("img",{height:"500px",src:t.imgPoster,alt:t.title}),Object(n.jsx)("div",{className:"info-div",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:t.title}),Object(n.jsx)("p",{children:t.overview}),Object(n.jsxs)("h3",{children:["Original release: ",Object(n.jsx)("span",{children:t.release})]}),Object(n.jsxs)("h3",{children:["Vote: ",Object(n.jsxs)("span",{children:[t.vote,"/10"]})]}),Object(n.jsxs)("h3",{children:["Popularity: ",Object(n.jsx)("span",{children:t.popularity})]})]})})]})]})}function O(){var e=Object(i.useState)({title:"",overview:"",release:"",vote:"",popularity:"",imgBg:"",imgPoster:""}),t=Object(m.a)(e,2),c=t[0],a=t[1];Object(i.useEffect)((function(){r(o)}),[]);var r=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"419c08366994072e62fa8a67f02677a2",e.next=4,v.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("419c08366994072e62fa8a67f02677a2","&query=").concat(t));case 4:return c=e.sent,n=c.data.results[0],i={title:n.original_title,overview:n.overview,release:n.release_date,vote:n.vote_average,popularity:n.popularity,imgBg:"https://image.tmdb.org/t/p/original"+n.backdrop_path,imgPoster:"https://image.tmdb.org/t/p/original"+n.poster_path},e.next=9,a(i);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Title not found");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),s=Object(i.useState)("dirt"),l=Object(m.a)(s,2),o=l[0],j=l[1];return Object(n.jsx)(x,{data:c,handleChange:function(e){j(e.target.value)},handleSubmit:function(e){r(o),console.log(o),e.preventDefault()}})}function f(){return Object(n.jsx)("div",{children:Object(n.jsx)(O,{})})}c(62);var g=c.p+"static/media/github.cb9ed58b.svg",w=c.p+"static/media/linkedin.f6386630.svg";function k(){var e=[{icon:g,link:"https://github.com/Nahuelluca20",name:"GitHub"},{icon:w,link:"https://www.linkedin.com/in/nahuel-luca-b66356199/",name:"LinkedIn"}];return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("h1",{children:"About the project"}),Object(n.jsxs)("p",{children:["This project is made with Reactjs and the",Object(n.jsx)("a",{className:!0,href:"https://www.themoviedb.org/",children:" TMDB API (the movie database)."}),Object(n.jsx)("br",{})," You can find the code in my Github"]}),Object(n.jsx)("div",{className:"social",children:e.map((function(e){return Object(n.jsx)("a",{href:e.link,className:"icon",children:Object(n.jsx)("img",{src:e.icon,alt:e.name,width:"50px"})},e.name)}))})]})}c(63);function N(){var e=[{title:"Home",url:"".concat("/film-search","/"),component:Object(n.jsx)(h,{})},{title:"Search",url:"".concat("/film-search","/search"),component:Object(n.jsx)(f,{})},{title:"About",url:"".concat("/film-search","/about"),component:Object(n.jsx)(k,{})}];return Object(n.jsxs)(l.a,{children:[Object(n.jsx)("nav",{className:"nav",children:e.map((function(e){return Object(n.jsx)("li",{className:"item-nav",children:Object(n.jsx)(l.b,{to:e.url,className:"link-nav",children:e.title})},e.title)}))}),Object(n.jsx)(o.c,{children:e.map((function(e){return Object(n.jsx)(o.a,{exact:!0,path:e.url,children:e.component},e.title)}))})]})}var y=function(){return Object(n.jsx)("main",{children:Object(n.jsx)(N,{})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.888988c3.chunk.js.map