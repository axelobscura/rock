(this.webpackJsonprock=this.webpackJsonprock||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},20:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(13),r=n.n(l),o=(n(20),n(2)),i=n.n(o),u=n(3),s=n(14),m=n.n(s);n(39);var p=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)({hits:[]}),o=Object(u.a)(r,2),s=o[0],p=o[1];Object(a.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(m()({url:"https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=5&limit=10",headers:{Accept:"application/json"},Authorization:{Bearer:"BQDnjvtqz6jbcHAFzq6KMqsQS0TDXmJOidcUfcSv_JflsRpdy5Q872PXB0lmdIhioLwBt8DHngIGBhZsmPc775Pbk8wfeb1WZdpnIH6AAOUxSgGmPbUYKyGLKlC0hWuPLcyIBdTVi8xgq-lWaNIcenITQT3aHj5PhM3dQiX47vO7me9cVQZMTSCldVBJJgNkewPX41_Y94e4F0BVoLJL-ldB8FsvKsh01A"}}).then((function(){p(e.data)})));case 2:e=t.sent;case 3:case"end":return t.stop()}}))}()}),[]);var f=function(e){console.log(e),console.log(s.hits)};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"BIBLIOTECA DEL ROCK"),c.a.createElement("h2",null,"Historias De La M\xfasica Latinoamericana"),c.a.createElement("ul",null,s.hits.map((function(e){return c.a.createElement("li",{key:e.objectID},c.a.createElement("a",{href:e.url},e.title))}))),c.a.createElement("p",{onClick:function(){return l(n+1)}},"Desarrollo del Rock a trav\xe9s de la Historia en Latinoam\xe9rica ",n),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(1950)}},"1950")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(1960)}},"1960")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(1970)}},"1970")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(1980)}},"1980")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(1990)}},"1990")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(2e3)}},"2000")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(2010)}},"2010")),c.a.createElement("li",null,c.a.createElement("p",{onClick:function(){return f(2020)}},"2020")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.79bc97c7.chunk.js.map