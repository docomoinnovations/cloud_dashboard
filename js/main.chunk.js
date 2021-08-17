(this.webpackJsonpcloud_dashboard=this.webpackJsonpcloud_dashboard||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(17),i=n.n(o),r=n(18),s=n(2),l="/clouds/dashboard",d=[{name:"AWS Cloud instance",url:"/aws_cloud/instance"},{name:"K8s Node",url:"/k8s/node"},{name:"K8s Pod",url:"/k8s/pod"}],u=n(9),j=n.n(u),b=n(11),h=n(0),m=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){var a,o,i,r,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("grant_type","authorization_code"),a.append("client_id",n),a.append("client_secret","cloud_dashboard"),a.append("code",t),a.append("redirect_uri",c),e.next=8,fetch("/oauth/token",{method:"POST",body:a});case 8:if((o=e.sent).ok){e.next=11;break}throw new Error("Authorization failed");case 11:return e.next=13,o.json();case 13:if(!("access_token"in(i=e.sent))){e.next=23;break}r=i.access_token,s=i.refresh_token,l=(new Date).getTime()+1e3*i.expires_in,window.localStorage.setItem("accessToken",r),window.localStorage.setItem("refreshToken",s),window.localStorage.setItem("expiresDatetime","".concat(l)),e.next=24;break;case 23:throw new Error("Authorization failed");case 24:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.group("Authorization Code Grant");var t=window.localStorage.getItem("clientId"),n=window.localStorage.getItem("redirectUri");if(null===t||null==n)return console.log("Client ID : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=l);console.log("Client ID : Yes");var c=new URL(window.location.href).searchParams.get("code");if(null===c)return console.log("Authorization code : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=l);console.log("authorization code : Yes"),e(c,t,n).then((function(){console.log("Access token : Yes"),console.groupEnd(),window.location.href=l+"/aws_cloud/instance"})).catch((function(){console.log("Access token : No"),console.error("Authorization failed."),console.groupEnd(),window.location.href=l}))}),[]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h2",{children:"Please waiting..."})})})},f=n(3),p=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(f.a)(o,2),r=i[0],s=i[1],l=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/jsonapi/consumer/consumer");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,(n=t.data.filter((function(e){return"Cloud Dashboard"===e.attributes.label}))).length>=1&&(a(n[0].id),s(n[0].attributes.redirect));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("clientId",n)}),[n]),Object(c.useEffect)((function(){window.localStorage.setItem("redirectUri",r)}),[r]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("form",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(){var e="/oauth/authorize?response_type=code&client_id=".concat(n,"&redirect_uri=").concat(r);window.location.href=e},disabled:""===n,children:"login"})})})})},x=function(e){var t=e.selectedMenuName;Object(c.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),t=window.localStorage.getItem("expiresDatetime");null!==e&&null!=t?(new Date).getTime()>parseInt(t,10)&&(window.location.href=l):window.location.href=l}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:"nav nav-tabs",children:[d.map((function(e){return Object(h.jsx)("li",{role:"presentation",className:e.name===t?"active":"",children:Object(h.jsx)("a",{href:"".concat(l).concat(e.url),children:e.name})},e.name)})),Object(h.jsx)("li",{role:"presentation",children:Object(h.jsx)("a",{href:"#",onClick:function(){window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"),window.localStorage.removeItem("expiresDatetime"),window.location.href=l},children:"logout"})})]})})},O=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(30),i=Object(f.a)(o,1)[0],r=Object(c.useState)(0),s=Object(f.a)(r,2),d=s[0],u=s[1],j=Object(c.useState)(0),b=Object(f.a)(j,2),m=b[0],p=b[1],x=Object(c.useState)([]),O=Object(f.a)(x,2),y=O[0],k=O[1],g=Object(c.useState)(""),v=Object(f.a)(g,2),C=v[0],_=v[1],w=Object(c.useState)({key:"",direction:"ASC"}),N=Object(f.a)(w,2),S=N[0],I=N[1],E=Object(c.useState)(!1),A=Object(f.a)(E,2),D=A[0],T=A[1],M=function(e){S.key===e?"ASC"!==S.direction?I({key:"",direction:"ASC"}):I({key:e,direction:"DESC"}):I({key:e,direction:"ASC"})},z=function(e,t){return"000000".concat(e).slice(-t)},P=function(e){var t=new Date(e),n=t.getFullYear(),c=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),r="".concat(n,"/").concat(z(c,2),"/").concat(z(a,2));return r+=" - ".concat(z(o,2),":").concat(z(i,2))};return Object(c.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),t=window.localStorage.getItem("expiresDatetime");null!==e&&null!=t?(new Date).getTime()>parseInt(t,10)&&(window.location.href=l):window.location.href=l}),[]),Object(c.useEffect)((function(){var e="/jsonapi/aws_cloud_instance/aws_cloud_instance?page[limit]=".concat(i,"&page[offset]=").concat(m*i);""!==C&&(e+="&filter[cloud_context]=".concat(C)),""!==S.key&&("ASC"===S.direction?e+="&sort=".concat(S.key):e+="&sort=-".concat(S.key)),fetch(e).then((function(e){return e.json()})).then((function(e){e.links.next?T(!0):T(!1),a(e.data.map((function(e){return{drupal_internal__id:e.attributes.drupal_internal__id,cloud_context:e.attributes.cloud_context,name:e.attributes.name,public_ip:e.attributes.public_ip,instance_state:e.attributes.instance_state,instance_type:e.attributes.instance_type,availability_zone:e.attributes.availability_zone,cost:e.attributes.cost,created:P(e.attributes.created)}})))}))}),[i,m,C,S]),Object(c.useEffect)((function(){fetch("/jsonapi/cloud_config/aws_cloud").then((function(e){return e.json()})).then((function(e){k(e.data.map((function(e){return e.attributes.cloud_context})))}))}),[]),Object(c.useEffect)((function(){var e="/cloud_dashboard/aws_cloud/".concat(C,"/aws_cloud_instance/entity/count");fetch(e).then((function(e){return e.json()})).then((function(e){u(e.count)}))}),[C]),Object(c.useEffect)((function(){""!==C&&y.includes(C)||y.length>=1&&_(y[0])}),[y]),Object(h.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"control-label",children:"Cloud context"}),Object(h.jsx)("select",{className:"form-select form-control",value:C,onChange:function(e){_(e.currentTarget.value)},children:y.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{className:"control-label",children:["Item Count: ",d]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),Object(h.jsxs)("th",{onClick:function(){return M("name")},children:["Name","name"===S.key&&"ASC"===S.direction?"\u2191":"name"===S.key&&"DESC"===S.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return M("public_ip")},children:["Public IP","public_ip"===S.key&&"ASC"===S.direction?"\u2191":"public_ip"===S.key&&"DESC"===S.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return M("instance_state")},children:["Instance State","instance_state"===S.key&&"ASC"===S.direction?"\u2191":"instance_state"===S.key&&"DESC"===S.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return M("instance_type")},children:["Instance Type","instance_type"===S.key&&"ASC"===S.direction?"\u2191":"instance_type"===S.key&&"DESC"===S.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return M("availability_zone")},children:["Availability Zone","availability_zone"===S.key&&"ASC"===S.direction?"\u2191":"availability_zone"===S.key&&"DESC"===S.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return M("cost")},children:["Cost","cost"===S.key&&"ASC"===S.direction?"\u2191":"cost"===S.key&&"DESC"===S.direction?"\u2193":""]}),Object(h.jsxs)("th",{onClick:function(){return M("created")},children:["Created","created"===S.key&&"ASC"===S.direction?"\u2191":"created"===S.key&&"DESC"===S.direction?"\u2193":""]})]}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/clouds/aws_cloud/".concat(e.cloud_context,"/instance/").concat(e.drupal_internal__id),target:"_blank",rel:"noopener noreferrer",children:e.name})}),Object(h.jsx)("td",{children:e.public_ip}),Object(h.jsx)("td",{children:e.instance_state}),Object(h.jsx)("td",{children:e.instance_type}),Object(h.jsx)("td",{children:e.availability_zone}),Object(h.jsx)("td",{children:null!==e.cost?"$".concat(e.cost):""}),Object(h.jsx)("td",{children:e.created})]},e.drupal_internal__id)}))})]})}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){p(0)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u524d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){p(Math.max(0,m-1))},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:m+1})}),Object(h.jsx)("li",{className:D?"":"disabled",children:Object(h.jsx)("a",{href:"#","aria-label":"\u6b21\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){D&&p(m+1)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})}),Object(h.jsx)("li",{className:0!==d&&D?"":"disabled",children:Object(h.jsx)("a",{href:"#","aria-label":"\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){if(0!==d&&D){var e=Math.floor(1*(d+i-1)/i);p(e-1)}},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})]})})})},y=function(e,t){return"000000".concat(e).slice(-t)},k=function(e,t){for(var n=1,c=0;c<t;c+=1)n*=10;if(Math.floor(e)===e){var a="".concat(e);if(0!==t){a+=".";for(var o=0;o<t;o+=1)a+="0"}return a}return"".concat(Math.round(e*n)/n)},g=function(e){var t=e.cloudContext,n=e.setCloudContext,a=Object(c.useState)([]),o=Object(f.a)(a,2),i=o[0],r=o[1];return Object(c.useEffect)((function(){fetch("/jsonapi/cloud_config/k8s").then((function(e){return e.json()})).then((function(e){r(e.data.map((function(e){return e.attributes.cloud_context})))}))}),[]),Object(c.useEffect)((function(){""!==t&&i.includes(t)||i.length>=1&&n(i[0])}),[i]),Object(h.jsx)("select",{className:"form-select form-control",value:t,onChange:function(e){n(e.currentTarget.value)},children:i.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})},v=function(e){var t=e.cloudContext,n=e.namespace,a=e.setNamespace,o=Object(c.useState)([]),i=Object(f.a)(o,2),r=i[0],s=i[1];return Object(c.useEffect)((function(){var e="/jsonapi/k8s_namespace/k8s_namespace";""!==t&&(e+="?cloudContext=".concat(t)),fetch(e).then((function(e){return e.json()})).then((function(e){s(e.data.map((function(e){return e.attributes.name})))}))}),[t]),Object(h.jsxs)("select",{className:"form-select form-control",value:n,onChange:function(e){a(e.currentTarget.value)},children:[Object(h.jsx)("option",{value:"",children:"- \u3059\u3079\u3066 -"}),r.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})},C=function(e){var t=e.cloudContext,n=e.entityTypeId,a=e.namespace,o=e.itemCount,i=e.setItemCount;return Object(c.useEffect)((function(){if(""!==t){var e="/cloud_dashboard/k8s/".concat(t,"/").concat(n,"/entity/count");""!==a&&(e+="?namespace=".concat(a)),fetch(e).then((function(e){return e.json()})).then((function(e){i(e.count)}))}}),[t,a]),Object(h.jsxs)("label",{className:"control-label",children:["Item Count: ",o]})},_=function(e){var t=e.entityTypeId,n=e.column,a=e.cloudContext,o=e.namespace,i=e.sortInfo,r=e.setSortInfo,s=e.pageIndex,l=Object(c.useState)([]),d=Object(f.a)(l,2),u=d[0],j=d[1],b=function(e,t){switch(t){case"datetime":return function(e){var t=new Date(e),n=t.getFullYear(),c=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),r="".concat(n,"/").concat(y(c,2),"/").concat(y(a,2));return r+" - ".concat(y(o,2),":").concat(y(i,2))}(e);case"memory":return e>=1073741824?"".concat(k(e/1073741824,2),"Gi"):e>=1048576?"".concat(k(e/1048576,2),"Mi"):e>=1024?"".concat(k(e/1024,2),"Ki"):k(e,2);default:return e}};return Object(c.useEffect)((function(){var e="/jsonapi/".concat(t,"/").concat(t),n=[];n.push({key:"page[limit]",value:"".concat(30)}),n.push({key:"page[offset]",value:"".concat(30*s)}),""!==o&&n.push({key:"filter[namespace]",value:o}),""!==a&&n.push({key:"filter[cloud_context]",value:a}),""!==i.key&&("ASC"===i.direction?n.push({key:"sort",value:i.key}):n.push({key:"sort",value:"-"+i.key})),n.length>0&&(e+="?"+n.map((function(e){return e.key+"="+e.value})).join("&")),fetch(e).then((function(e){return e.json()})).then((function(e){j(e.data)}))}),[o,a,i,s]),Object(h.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),n.map((function(e){return Object(h.jsxs)("th",{onClick:function(){return t=e.name,void(i.key===t?"ASC"!==i.direction?r({key:"",direction:"ASC"}):r({key:t,direction:"DESC"}):r({key:t,direction:"ASC"}));var t},children:[e.labelName,i.key===e.name&&"ASC"===i.direction?"\u2191":i.key===e.name&&"DESC"===i.direction?"\u2193":""]},e.name)}))]}),Object(h.jsx)("tbody",{children:u.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),n.map((function(t){return Object(h.jsx)("td",{children:b(e.attributes[t.name],t.type)},t.name)}))]},e.id)}))})]})},w=function(e){var t=e.pageIndex,n=e.setPageIndex,c=e.itemCount,a=Math.floor(1*(c+30-1)/30);return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){n(0)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#","aria-label":"\u524d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){n(Math.max(0,t-1))},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:t+1})}),Object(h.jsx)("li",{className:t!==a-1?"":"disabled",children:Object(h.jsx)("a",{href:"#","aria-label":"\u6b21\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){n(Math.min(t+1,a-1))},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})}),Object(h.jsx)("li",{className:0!==c&&t!==a-1?"":"disabled",children:Object(h.jsx)("a",{href:"#","aria-label":"\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){n(a-1)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})},N=function(e){var t=e.entityTypeId,n=e.namespaceFlg,a=e.column,o=Object(c.useState)(""),i=Object(f.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(""),d=Object(f.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)(0),m=Object(f.a)(b,2),p=m[0],x=m[1],O=Object(c.useState)({key:"",direction:"ASC"}),y=Object(f.a)(O,2),k=y[0],N=y[1],S=Object(c.useState)(0),I=Object(f.a)(S,2),E=I[0],A=I[1];return Object(h.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"control-label",children:"Cloud context"}),Object(h.jsx)(g,{cloudContext:r,setCloudContext:s})]}),n?Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"control-label",children:"Namespace"}),Object(h.jsx)(v,{cloudContext:r,namespace:u,setNamespace:j})]}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)(C,{cloudContext:r,entityTypeId:t,namespace:u,itemCount:p,setItemCount:x})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsx)(_,{entityTypeId:t,column:a,cloudContext:r,namespace:u,sortInfo:k,setSortInfo:N,pageIndex:E})}),Object(h.jsx)(w,{pageIndex:E,setPageIndex:A,itemCount:p})]})})})},S=function(){return Object(h.jsx)(r.a,{basename:l,children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/aws_cloud/instance",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{selectedMenuName:"AWS Cloud instance"}),Object(h.jsx)(O,{})]})}),Object(h.jsx)(s.a,{exact:!0,path:"/callback",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(m,{})})}),Object(h.jsx)(s.a,{exact:!0,path:"/k8s/node",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{selectedMenuName:"K8s Node"}),Object(h.jsx)(N,{entityTypeId:"k8s_node",namespaceFlg:!1,column:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"CPU (Request)",name:"cpu_request",type:"default"},{labelName:"CPU (Limit)",name:"cpu_limit",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Request)",name:"memory_request",type:"memory"},{labelName:"Memory (Limit)",name:"memory_limit",type:"memory"},{labelName:"Memory (Usage)",name:"memory_usage",type:"memory"},{labelName:"Pods (Applcation)",name:"pods_allocation",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]})]})}),Object(h.jsx)(s.a,{exact:!0,path:"/k8s/pod",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{selectedMenuName:"K8s Pod"}),Object(h.jsx)(N,{entityTypeId:"k8s_pod",namespaceFlg:!0,column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Restarts",name:"restarts",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Usage)",name:"memory_usage",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]})]})}),Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(p,{})})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),I()}},[[31,1,2]]]);
//# sourceMappingURL=main.02b4cc2e.chunk.js.map