(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,n,t){e.exports=t(35)},,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),i=t(5),s=t(1),l=t(14),u=t(15),m=(t(26),t(3)),E=t(4),h=t(7),d=t(6),p=(t(27),function(e){var n=e.name,t=e.email,a=e.phone,c=e.company;return r.a.createElement("div",{className:"tc dib pa3 ma3 grow shadow-2 card ba bw2"},r.a.createElement("img",{alt:"Profile Pic",src:"https://avatars.dicebear.com/api/avataaars/".concat(t,".svg?w=250&h=200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,c),r.a.createElement("p",null,a),r.a.createElement("p",null,t)))}),f=(t(28),function(e){var n=e.connections;return r.a.createElement("div",{className:"tc grid-item"},n.map((function(e,n){return r.a.createElement(p,{key:e.index,name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,phone:e.phone,company:e.company})})))}),g=(t(29),function(e){var n=e.searchChange;return r.a.createElement("div",{className:"ma4 search"},r.a.createElement("input",{className:"bw2 pa3 ba",type:"search",placeholder:"Search Network",onChange:n}))}),N=(t(30),function(e){return r.a.createElement("div",{className:"cardListContainer"},e.children)}),C=(t(31),function(){return r.a.createElement("nav",{className:"navBar sticky"},r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",{className:"linkItem"},r.a.createElement("a",{href:"google.com",className:"link appName"},"NetWorked")),r.a.createElement("li",{className:"linkItem push"},r.a.createElement("a",{href:"google.com",className:"link"},"About")),r.a.createElement("li",{className:"linkItem"},r.a.createElement("a",{href:"google.com",className:"link"},"Contact")),r.a.createElement("li",{className:"linkItem"},r.a.createElement("a",{href:"google.com",className:"link"},"Team"))))}),v=function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(m.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(E.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Error Has Occurred"):this.props.children}}]),t}(r.a.Component),b=(t(32),function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestConnections()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,a=e.connections,c=e.isPending,o=a.filter((function(e){return e.name.first.toLowerCase().includes(n.toLowerCase())||e.name.last.toLowerCase().includes(n.toLowerCase())}));return c?r.a.createElement("div",{className:"loadingContainer"},r.a.createElement("h1",{className:"loadingTag"},"Loading...")):r.a.createElement("div",{className:"tc"},r.a.createElement(C,null),r.a.createElement(g,{searchChange:t}),r.a.createElement(N,null,r.a.createElement(v,null,r.a.createElement(f,{connections:o}))))}}]),t}(r.a.Component)),O=Object(i.b)((function(e){return{searchField:e.searchConnections.searchField,connections:e.requestConnections.connections,isPending:e.requestConnections.isPending,error:e.requestConnections.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestConnections:function(){return e((function(e){e({type:"REQUEST_CONNECTIONS_PENDING"}),fetch("https://next.json-generator.com/api/json/get/N1hbZK16u").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_CONNECTIONS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_CONNECTIONS_FAILED",payload:n})}))}))}}}))(b),y=(t(33),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"bg"}),r.a.createElement("div",{className:"bg bg2"}),r.a.createElement("div",{className:"bg bg3"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(34);var S={searchField:""},j={isPending:!1,connections:[],error:""},k=Object(l.createLogger)(),w=Object(s.c)({searchConnections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestConnections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_CONNECTIONS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_CONNECTIONS_SUCCESS":return Object.assign({},e,{connections:n.payload,isPending:!1});case"REQUEST_CONNECTIONS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),I=Object(s.d)(w,Object(s.a)(u.a,k));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null),r.a.createElement(i.a,{store:I},r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.ca27e8f7.chunk.js.map