(this.webpackJsonpcloud_dashboard=this.webpackJsonpcloud_dashboard||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(17),r=n.n(i),o=n(18),s=n(2),l="/clouds/dashboard",d=[{name:"AWS instance",url:"/aws_cloud/instance"},{name:"K8s Pod",url:"/k8s/pod"}],u=n(9),j=n.n(u),b=n(11),h=n(0),f=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){var a,i,r,o,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("grant_type","authorization_code"),a.append("client_id",n),a.append("client_secret","cloud_dashboard"),a.append("code",t),a.append("redirect_uri",c),e.next=8,fetch("/oauth/token",{method:"POST",body:a});case 8:if((i=e.sent).ok){e.next=11;break}throw new Error("Authorization failed");case 11:return e.next=13,i.json();case 13:if(!("access_token"in(r=e.sent))){e.next=23;break}o=r.access_token,s=r.refresh_token,l=(new Date).getTime()+1e3*r.expires_in,window.localStorage.setItem("accessToken",o),window.localStorage.setItem("refreshToken",s),window.localStorage.setItem("expiresDatetime","".concat(l)),e.next=24;break;case 23:throw new Error("Authorization failed");case 24:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.group("Authorization Code Grant");var t=window.localStorage.getItem("clientId"),n=window.localStorage.getItem("redirectUri");if(null===t||null==n)return console.log("Client ID : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=l);console.log("Client ID : Yes");var c=new URL(window.location.href).searchParams.get("code");if(null===c)return console.log("Authorization code : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=l);console.log("authorization code : Yes"),e(c,t,n).then((function(){console.log("Access token : Yes"),console.groupEnd(),window.location.href=l+"/aws_cloud/instance"})).catch((function(){console.log("Access token : No"),console.error("Authorization failed."),console.groupEnd(),window.location.href=l}))}),[]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h2",{children:"Please waiting..."})})})},O=n(3),x=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(O.a)(i,2),o=r[0],s=r[1],l=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/jsonapi/consumer/consumer");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,(n=t.data.filter((function(e){return"Cloud Dashboard"===e.attributes.label}))).length>=1&&(a(n[0].id),s(n[0].attributes.redirect));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("clientId",n)}),[n]),Object(c.useEffect)((function(){window.localStorage.setItem("redirectUri",o)}),[o]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("form",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(){var e="/oauth/authorize?response_type=code&client_id=".concat(n,"&redirect_uri=").concat(o);window.location.href=e},disabled:""===n,children:"login"})})})})},m=function(e){var t=e.selectedMenuName;Object(c.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),t=window.localStorage.getItem("expiresDatetime");null!==e&&null!=t?(new Date).getTime()>parseInt(t,10)&&(window.location.href=l):window.location.href=l}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:"nav nav-tabs",children:[d.map((function(e){return Object(h.jsx)("li",{role:"presentation",className:e.name===t?"active":"",children:Object(h.jsx)("a",{href:"".concat(l).concat(e.url),children:e.name})},e.name)})),Object(h.jsx)("li",{role:"presentation",children:Object(h.jsx)("a",{href:"#",onClick:function(){window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"),window.localStorage.removeItem("expiresDatetime"),window.location.href=l},children:"logout"})})]})})},p=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(30),r=Object(O.a)(i,1)[0],o=Object(c.useState)(0),s=Object(O.a)(o,2),d=s[0],u=s[1],j=Object(c.useState)([]),b=Object(O.a)(j,2),f=b[0],x=b[1],m=Object(c.useState)(""),p=Object(O.a)(m,2),k=p[0],_=p[1],g=Object(c.useState)([]),w=Object(O.a)(g,2),y=w[0],S=w[1],C=Object(c.useState)(""),v=Object(O.a)(C,2),N=v[0],E=v[1],A=Object(c.useState)({key:"",direction:"ASC"}),D=Object(O.a)(A,2),I=D[0],T=D[1],z=Object(c.useState)(!1),M=Object(O.a)(z,2),P=M[0],F=M[1],U=function(e){I.key===e?"ASC"!==I.direction?T({key:"",direction:"ASC"}):T({key:e,direction:"DESC"}):T({key:e,direction:"ASC"})},Y=function(e,t){return"000000".concat(e).slice(-t)},L=function(e){var t=new Date(e),n=t.getFullYear(),c=t.getMonth()+1,a=t.getDate(),i=t.getHours(),r=t.getMinutes(),o="".concat(n,"/").concat(Y(c,2),"/").concat(Y(a,2));return o+=" - ".concat(Y(i,2),":").concat(Y(r,2))};return Object(c.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),t=window.localStorage.getItem("expiresDatetime");null!==e&&null!=t?(new Date).getTime()>parseInt(t,10)&&(window.location.href=l):window.location.href=l}),[]),Object(c.useEffect)((function(){var e="/jsonapi/k8s_pod/k8s_pod?page[limit]=".concat(r,"&page[offset]=").concat(d*r);""!==k&&(e+="&filter[namespace]=".concat(k)),""!==N&&(e+="&filter[cloud_context]=".concat(N)),""!==I.key&&("ASC"===I.direction?e+="&sort=".concat(I.key):e+="&sort=-".concat(I.key)),fetch(e).then((function(e){return e.json()})).then((function(e){e.links.next?F(!0):F(!1),a(e.data.map((function(e){return{drupal_internal__id:e.attributes.drupal_internal__id,cloud_context:e.attributes.cloud_context,namespace:e.attributes.namespace,name:e.attributes.name,node_name:e.attributes.node_name,status:e.attributes.status,restarts:e.attributes.restarts,cpu_usage:e.attributes.cpu_usage,memory_usage:e.attributes.memory_usage,created:L(e.attributes.created)}})))}))}),[r,d,k,N,I]),Object(c.useEffect)((function(){fetch("/jsonapi/k8s_namespace/k8s_namespace").then((function(e){return e.json()})).then((function(e){x(e.data.map((function(e){return e.attributes.name})))}))}),[]),Object(c.useEffect)((function(){fetch("/jsonapi/cloud_config/k8s").then((function(e){return e.json()})).then((function(e){S(e.data.map((function(e){return e.attributes.cloud_context})))}))}),[]),Object(c.useEffect)((function(){""!==N&&y.includes(N)||y.length>=1&&E(y[0])}),[y]),Object(h.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"control-label",children:"Cloud context"}),Object(h.jsx)("select",{className:"form-select form-control",value:N,onChange:function(e){E(e.currentTarget.value)},children:y.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"control-label",children:"Namespace"}),Object(h.jsxs)("select",{className:"form-select form-control",value:k,onChange:function(e){_(e.currentTarget.value)},children:[Object(h.jsx)("option",{value:"",children:"- \u3059\u3079\u3066 -"}),f.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),Object(h.jsxs)("th",{onClick:function(){return U("namespace")},children:["Namespace","namespace"===I.key&&"ASC"===I.direction?"\u2191":"namespace"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("name")},children:["Name","name"===I.key&&"ASC"===I.direction?"\u2191":"name"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("node_name")},children:["Node","node_name"===I.key&&"ASC"===I.direction?"\u2191":"node_name"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("status")},children:["State","status"===I.key&&"ASC"===I.direction?"\u2191":"status"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("restarts")},children:["Restarts","restarts"===I.key&&"ASC"===I.direction?"\u2191":"restarts"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("cpu_usage")},children:["CPU (Usage)","cpu_usage"===I.key&&"ASC"===I.direction?"\u2191":"cpu_usage"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("memory_usage")},children:["Memory (Usage)","memory_usage"===I.key&&"ASC"===I.direction?"\u2191":"memory_usage"===I.key&&"DESC"===I.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return U("created")},children:["Created","created"===I.key&&"ASC"===I.direction?"\u2191":"created"===I.key&&"DESC"===I.direction?"\u2193":""]})]}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),Object(h.jsx)("td",{children:e.namespace}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/clouds/k8s/".concat(e.cloud_context,"/pod/").concat(e.drupal_internal__id),target:"_blank",rel:"noopener noreferrer",children:e.name})}),Object(h.jsx)("td",{children:e.node_name}),Object(h.jsx)("td",{children:e.status}),Object(h.jsx)("td",{children:e.restarts}),Object(h.jsx)("td",{children:e.cpu_usage}),Object(h.jsx)("td",{children:e.memory_usage}),Object(h.jsx)("td",{children:e.created})]},e.drupal_internal__id)}))})]})}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){u(0)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u524d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){u(Math.max(0,d-1))},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:d+1})}),Object(h.jsx)("li",{className:P?"":"disabled",children:Object(h.jsx)("a",{href:"#","aria-label":"\u6b21\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){P&&u(d+1)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})})]})})]})})})},k=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(30),r=Object(O.a)(i,1)[0],o=Object(c.useState)(0),s=Object(O.a)(o,2),d=s[0],u=s[1],j=Object(c.useState)([]),b=Object(O.a)(j,2),f=b[0],x=b[1],m=Object(c.useState)(""),p=Object(O.a)(m,2),k=p[0],_=p[1],g=Object(c.useState)({key:"",direction:"ASC"}),w=Object(O.a)(g,2),y=w[0],S=w[1],C=Object(c.useState)(!1),v=Object(O.a)(C,2),N=v[0],E=v[1],A=function(e){y.key===e?"ASC"!==y.direction?S({key:"",direction:"ASC"}):S({key:e,direction:"DESC"}):S({key:e,direction:"ASC"})},D=function(e,t){return"000000".concat(e).slice(-t)},I=function(e){var t=new Date(e),n=t.getFullYear(),c=t.getMonth()+1,a=t.getDate(),i=t.getHours(),r=t.getMinutes(),o="".concat(n,"/").concat(D(c,2),"/").concat(D(a,2));return o+=" - ".concat(D(i,2),":").concat(D(r,2))};return Object(c.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),t=window.localStorage.getItem("expiresDatetime");null!==e&&null!=t?(new Date).getTime()>parseInt(t,10)&&(window.location.href=l):window.location.href=l}),[]),Object(c.useEffect)((function(){var e="/jsonapi/aws_cloud_instance/aws_cloud_instance?page[limit]=".concat(r,"&page[offset]=").concat(d*r);""!==k&&(e+="&filter[cloud_context]=".concat(k)),""!==y.key&&("ASC"===y.direction?e+="&sort=".concat(y.key):e+="&sort=-".concat(y.key)),fetch(e).then((function(e){return e.json()})).then((function(e){e.links.next?E(!0):E(!1),a(e.data.map((function(e){return{drupal_internal__id:e.attributes.drupal_internal__id,cloud_context:e.attributes.cloud_context,name:e.attributes.name,public_ip:e.attributes.public_ip,instance_state:e.attributes.instance_state,instance_type:e.attributes.instance_type,availability_zone:e.attributes.availability_zone,cost:e.attributes.cost,created:I(e.attributes.created)}})))}))}),[r,d,k,y]),Object(c.useEffect)((function(){fetch("/jsonapi/cloud_config/aws_cloud").then((function(e){return e.json()})).then((function(e){x(e.data.map((function(e){return e.attributes.cloud_context})))}))}),[]),Object(c.useEffect)((function(){""!==k&&f.includes(k)||f.length>=1&&_(f[0])}),[f]),Object(h.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"control-label",children:"Cloud context"}),Object(h.jsx)("select",{className:"form-select form-control",value:k,onChange:function(e){_(e.currentTarget.value)},children:f.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})]}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),Object(h.jsxs)("th",{onClick:function(){return A("name")},children:["Name","name"===y.key&&"ASC"===y.direction?"\u2191":"name"===y.key&&"DESC"===y.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return A("public_ip")},children:["Public IP","public_ip"===y.key&&"ASC"===y.direction?"\u2191":"public_ip"===y.key&&"DESC"===y.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return A("instance_state")},children:["Instance State","instance_state"===y.key&&"ASC"===y.direction?"\u2191":"instance_state"===y.key&&"DESC"===y.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return A("instance_type")},children:["Instance Type","instance_type"===y.key&&"ASC"===y.direction?"\u2191":"instance_type"===y.key&&"DESC"===y.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return A("availability_zone")},children:["Availability Zone","availability_zone"===y.key&&"ASC"===y.direction?"\u2191":"availability_zone"===y.key&&"DESC"===y.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return A("cost")},children:["Cost","cost"===y.key&&"ASC"===y.direction?"\u2191":"cost"===y.key&&"DESC"===y.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return A("created")},children:["Created","created"===y.key&&"ASC"===y.direction?"\u2191":"created"===y.key&&"DESC"===y.direction?"\u2193":""]})]}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/clouds/aws_cloud/".concat(e.cloud_context,"/instance/").concat(e.drupal_internal__id),target:"_blank",rel:"noopener noreferrer",children:e.name})}),Object(h.jsx)("td",{children:e.public_ip}),Object(h.jsx)("td",{children:e.instance_state}),Object(h.jsx)("td",{children:e.instance_type}),Object(h.jsx)("td",{children:e.availability_zone}),Object(h.jsx)("td",{children:null!==e.cost?"$".concat(e.cost):""}),Object(h.jsx)("td",{children:e.created})]},e.drupal_internal__id)}))})]})}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){u(0)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u524d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){u(Math.max(0,d-1))},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:d+1})}),Object(h.jsx)("li",{className:N?"":"disabled",children:Object(h.jsx)("a",{href:"#","aria-label":"\u6b21\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){N&&u(d+1)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})})]})})]})})})},_=function(){return Object(h.jsx)(o.a,{basename:l,children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/aws_cloud/instance",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{selectedMenuName:"AWS instance"}),Object(h.jsx)(k,{})]})}),Object(h.jsx)(s.a,{exact:!0,path:"/callback",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(f,{})})}),Object(h.jsx)(s.a,{exact:!0,path:"/k8s/pod",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{selectedMenuName:"K8s Pod"}),Object(h.jsx)(p,{})]})}),Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(x,{})})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.51e70995.chunk.js.map