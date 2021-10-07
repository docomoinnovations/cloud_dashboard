(this.webpackJsonpcloud_dashboard=this.webpackJsonpcloud_dashboard||[]).push([[0],{35:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(19),m=t.n(c),r=t(8),o=t(13),i=t(2),s="/clouds/dashboard",u=[{cloudServiceProvider:"aws_cloud",labelName:"Instance",entityName:"instance",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Public IP",name:"public_ip",type:"default"},{labelName:"Instance State",name:"instance_state",type:"default"},{labelName:"Instance Type",name:"instance_type",type:"default"},{labelName:"Availability Zone",name:"availability_zone",type:"default"},{labelName:"Cost",name:"cost",type:"cost"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"Image",entityName:"image",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"AMI Name",name:"ami_name",type:"default"},{labelName:"AMI ID",name:"image_id",type:"default"},{labelName:"Status",name:"status",type:"default"},{labelName:"Source",name:"source",type:"default"},{labelName:"Root Device Type",name:"root_device_type",type:"default"},{labelName:"Visibility",name:"visibility",type:"boolean",value:["Public","Private"]},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"Security Group",entityName:"security_group",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Group ID",name:"group_id",type:"default"},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}}]},{cloudServiceProvider:"aws_cloud",labelName:"Elastic IP",entityName:"elastic_ip",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Allocation ID",name:"allocation_id",type:"default"},{labelName:"Type",name:"elastic_ip_type",type:"default"},{labelName:"Elastic IP",name:"public_ip",type:"default"},{labelName:"Instance ID",name:"instance_id",type:"join",info:{entityTypeId:"aws_cloud_instance",keyColumn:"instance_id",valueColumn:"name"}},{labelName:"Private IP Address",name:"private_ip_address",type:"default"},{labelName:"Scope",name:"scope",type:"default"}]},{cloudServiceProvider:"aws_cloud",labelName:"Key Pair",entityName:"key_pair",entityColumn:[{labelName:"Key Pair Name",name:"key_pair_name",type:"default"},{labelName:"Key Fingerprint",name:"key_fingerprint",type:"default"}]},{cloudServiceProvider:"aws_cloud",labelName:"Volume",entityName:"volume",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Volume ID",name:"volume_id",type:"default"},{labelName:"IOPS",name:"iops",type:"default"},{labelName:"Size",name:"size",type:"default"},{labelName:"Availability Zone",name:"availability_zone",type:"default"},{labelName:"Volume Type",name:"volume_type",type:"default"},{labelName:"Attachment Information",name:"attachment_information",type:"join",info:{entityTypeId:"aws_cloud_instance",keyColumn:"instance_id",valueColumn:"name"}},{labelName:"State",name:"state",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"Snapshot",entityName:"snapshot",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Snapshot ID",name:"snapshot_id",type:"default"},{labelName:"Encrypted",name:"encrypted",type:"default"},{labelName:"Size",name:"size",type:"default"},{labelName:"Status",name:"status",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"Network Interface",entityName:"network_interface",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Subnet",name:"subnet_id",type:"join",info:{entityTypeId:"aws_cloud_subnet",keyColumn:"subnet_id",valueColumn:"name"}},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Status",name:"status",type:"default"},{labelName:"Security Groups",name:"security_groups",type:"default"},{labelName:"Primary Private IP",name:"primary_private_ip",type:"default"},{labelName:"Secondary Private IPs",name:"secondary_private_ips",type:"default"}]},{cloudServiceProvider:"aws_cloud",labelName:"VPC",entityName:"vpc",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"VPC",name:"vpc_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"IPv4 CIDR",name:"cidr_block",type:"default"},{labelName:"IPv6 CIDR",name:"ipv6_cidr_blocks",type:"array"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"Subnet",entityName:"subnet",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Subnet ID",name:"subnet_id",type:"default"},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"IPv4 CIDR",name:"cidr_block",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Region Name",name:"region_name",type:"default"},{labelName:"Zone Name",name:"zone_name",type:"default"},{labelName:"Network Border Group",name:"network_border_group",type:"default"},{labelName:"Zone Type",name:"zone_type",type:"default"},{labelName:"Parent Zone Type",name:"parent_zone_type",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"VPC Peering Connection",entityName:"vpc_peering_connection",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"VPC Peering Connection ID",name:"vpc_peering_connection_id",type:"default"},{labelName:"Status",name:"status_code",type:"default"},{labelName:"Requester VPC",name:"requester_vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Accepter VPC",name:"accepter_vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Requester CIDR Blocks",name:"requester_cidr_block",type:"default"},{labelName:"Accepter CIDR Blocks",name:"accepter_cidr_block",type:"default"},{labelName:"Requester AWS Account",name:"requester_account_id",type:"default"},{labelName:"Accepter AWS Account",name:"accepter_account_id",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"aws_cloud",labelName:"Internet Gateway",entityName:"internet_gateway",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Internet Gateway ID",name:"internet_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"VPC ID",name:"vpc_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]},{cloudServiceProvider:"aws_cloud",labelName:"Career Gateway",entityName:"career_gateway",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Carrier Gateway ID",name:"carrier_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"VPC ID",name:"vpc_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]},{cloudServiceProvider:"aws_cloud",labelName:"Transit Gateway",entityName:"transit_gateway",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Transit Gateway ID",name:"transit_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Amazon Account ID",name:"account_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]}],d=[{cloudServiceProvider:"k8s",labelName:"Node",entityName:"node",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"CPU (Request)",name:"cpu_request",type:"default"},{labelName:"CPU (Limit)",name:"cpu_limit",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Request)",name:"memory_request",type:"memory"},{labelName:"Memory (Limit)",name:"memory_limit",type:"memory"},{labelName:"Memory (Usage)",name:"memory_usage",type:"memory"},{labelName:"Pods (Applcation)",name:"pods_allocation",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Namespace",entityName:"namespace",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Deployment",entityName:"deployment",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Pod",entityName:"pod",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Restarts",name:"restarts",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Usage)",name:"memory_usage",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"ReplicaSet",entityName:"replica_set",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Replica",name:"replicas",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"CronJob",entityName:"cron_job",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Schedule",name:"schedule",type:"default"},{labelName:"Suspend",name:"suspend",type:"default"},{labelName:"Active",name:"active",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Job",entityName:"job",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Image",name:"image",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Service",entityName:"service",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Cluster IP",name:"cluster_ip",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Network Policy",entityName:"network_policy",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Resource Quotas",entityName:"resource_quota",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"LimitRange",entityName:"limit_range",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Priority Class",entityName:"priority_class",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Value",name:"value",type:"default"},{labelName:"Global Default",name:"global_default",type:"boolean",value:["TRUE","FALSE"]},{labelName:"Description",name:"description",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"ConfigMap",entityName:"config_map",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Secret",entityName:"secret",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Type",name:"secret_type",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Role",entityName:"role",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Role Binding",entityName:"role_binding",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Role",name:"role_ref",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Cluster Role",entityName:"cluster_role",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Cluster Role Binding",entityName:"cluster_role_binding",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Cluster Role",name:"role_ref",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Persistent Volume",entityName:"persistent_volume",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Capacity",name:"capacity",type:"default"},{labelName:"Access Modes",name:"access_modes",type:"default"},{labelName:"Reclaim Policy",name:"reclaim_policy",type:"default"},{labelName:"Status",name:"phase",type:"default"},{labelName:"Request",name:"claim_ref",type:"default"},{labelName:"Storage Class",name:"storage_class_name",type:"default"},{labelName:"Reason",name:"reason",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Persistent Volume Claim",entityName:"persistent_volume_claim",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Phase",name:"phase",type:"default"},{labelName:"VolumeName",name:"volume_name",type:"default"},{labelName:"Capacity",name:"capacity",type:"default"},{labelName:"Request",name:"request",type:"default"},{labelName:"Access Mode",name:"access_mode",type:"default"},{labelName:"Storage Class",name:"storage_class",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Storage Class",entityName:"storage_class",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Provisioner",name:"provisioner",type:"default"},{labelName:"Parameters",name:"parameters",type:"key-value"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"StatefulSet",entityName:"stateful_set",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Ingress",entityName:"ingress",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"DaemonSet",entityName:"daemon_set",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Endpoint",entityName:"endpoint",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Event",entityName:"event",entityColumn:[{labelName:"Type",name:"k8s_event_type",type:"default"},{labelName:"Reason",name:"reason",type:"default"},{labelName:"Object Kind",name:"object_kind",type:"default"},{labelName:"Object Name",name:"object_name",type:"default"},{labelName:"Message",name:"message",type:"default"},{labelName:"Last Time Stamp",name:"time_stamp",type:"datetime"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"API Service",entityName:"api_service",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"ServiceAccount",entityName:"service_account",entityColumn:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{cloudServiceProvider:"k8s",labelName:"Horizontal Pod Autoscaler",entityName:"horizontal_pod_autoscaler",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Scale Target",name:"scale_target",type:"default"},{labelName:"Target CPU Utilization Percentage",name:"target_cpu_utilization_percentage",type:"default"}]},{cloudServiceProvider:"k8s",labelName:"Schedule",entityName:"schedule",entityColumn:[{labelName:"Name",name:"name",type:"default"},{labelName:"Kind",name:"kind",type:"default"},{labelName:"Namespace Name",name:"namespace_name",type:"default"},{labelName:"Resource Name",name:"resource_name",type:"default"},{labelName:"Launch Template Name",name:"launch_template_name",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Start",name:"start_time",type:"default"},{labelName:"Stop",name:"stop_time",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]}],p=[{cloudServiceProvider:"aws_cloud",name:"ALL",labelName:"AWS Cloud (ALL)"},{cloudServiceProvider:"k8s",name:"ALL",labelName:"K8s (ALL)"}],b=t(3),y=t.n(b),N=t(7),f=t(0),v=function(){var e=function(){var e=Object(N.a)(y.a.mark((function e(a,t,n){var l,c,m,r,o,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=new FormData).append("grant_type","authorization_code"),l.append("client_id",t),l.append("client_secret","cloud_dashboard"),l.append("code",a),l.append("redirect_uri",n),e.next=8,fetch("/oauth/token",{method:"POST",body:l});case 8:if((c=e.sent).ok){e.next=11;break}throw new Error("Authorization failed");case 11:return e.next=13,c.json();case 13:if(!("access_token"in(m=e.sent))){e.next=23;break}r=m.access_token,o=m.refresh_token,i=(new Date).getTime()+1e3*m.expires_in,window.localStorage.setItem("accessToken",r),window.localStorage.setItem("refreshToken",o),window.localStorage.setItem("expiresDatetime","".concat(i)),e.next=24;break;case 23:throw new Error("Authorization failed");case 24:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.group("Authorization Code Grant");var a=window.localStorage.getItem("clientId"),t=window.localStorage.getItem("redirectUri");if(null===a||null==t)return console.log("Client ID : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=s);console.log("Client ID : Yes");var n=new URL(window.location.href).searchParams.get("code");if(null===n)return console.log("Authorization code : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=s);console.log("authorization code : Yes"),e(n,a,t).then((function(){console.log("Access token : Yes"),console.groupEnd(),window.location.href=s+"/aws_cloud/instance"})).catch((function(){console.log("Access token : No"),console.error("Authorization failed."),console.groupEnd(),window.location.href=s}))}),[]),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsx)("h2",{children:"Please waiting..."})})})},j=t(4),h=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),m=Object(j.a)(c,2),r=m[0],o=m[1],i=function(){var e=Object(N.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/jsonapi/consumer/consumer");case 2:return e.next=4,e.sent.json();case 4:a=e.sent,(t=a.data.filter((function(e){return"Cloud Dashboard"===e.attributes.label}))).length>=1&&(l(t[0].id),o(t[0].attributes.redirect));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(n.useEffect)((function(){window.localStorage.setItem("clientId",t)}),[t]),Object(n.useEffect)((function(){window.localStorage.setItem("redirectUri",r)}),[r]),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsx)("form",{children:Object(f.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(){var e="/oauth/authorize?response_type=code&client_id=".concat(t,"&redirect_uri=").concat(r);window.location.href=e},disabled:""===t,children:"login"})})})})},_=t(9),C=function(e,a){return"000000".concat(e).slice(-a)},g=function(e,a){for(var t=1,n=0;n<a;n+=1)t*=10;if(Math.floor(e)!==e)return"".concat(Math.round(e*t)/t);var l="".concat(e);if(0!==a){l+=".";for(var c=0;c<a;c+=1)l+="0"}return l},x=function(e,a,t){if(null===e)return"";switch(a.type){case"datetime":return function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,l=a.getDate(),c=a.getHours(),m=a.getMinutes(),r="".concat(t,"/").concat(C(n,2),"/").concat(C(l,2));return r+" - ".concat(C(c,2),":").concat(C(m,2))}(e);case"memory":return e>=1073741824?"".concat(g(e/1073741824,2),"Gi"):e>=1048576?"".concat(g(e/1048576,2),"Mi"):e>=1024?"".concat(g(e/1024,2),"Ki"):g(e,2);case"key-value":var n,l=[],c=Object(_.a)(e);try{for(c.s();!(n=c.n()).done;){var m=n.value;l.push("".concat(m.item_key,":").concat(m.item_value))}}catch(s){c.e(s)}finally{c.f()}return l.join(", ");case"cost":return"$".concat(e);case"boolean":return e?a.value[0]:a.value[1];case"array":return e.map((function(e){return"".concat(e)})).join(", ");case"join":var r,o=Object(_.a)(t[a.info.entityTypeId]);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.attributes[a.info.keyColumn]===e)return i.attributes[a.info.valueColumn]}}catch(s){o.e(s)}finally{o.f()}return"(".concat(e,")");default:return e}},O=function(e){return"/".concat(e.cloudServiceProvider,"/").concat(e.entityName)},S=function(e){return"".concat(e.cloudServiceProvider,"_").concat(e.entityName)},k=t(20),w=t(21),P=function(){function e(){Object(k.a)(this,e),this.cache={}}return Object(w.a)(e,[{key:"getJson",value:function(){var e=Object(N.a)(y.a.mark((function e(a,t){var n,l,c,m;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a in this.cache)){e.next=5;break}if(n=this.cache[a],!((l=(new Date).getTime())>=n.unixtime&&l-n.unixtime<864e5)){e.next=5;break}return e.abrupt("return",n.response);case 5:return e.next=7,fetch(a,t);case 7:return e.next=9,e.sent.json();case 9:return c=e.sent,m=(new Date).getTime(),this.cache[a]={response:c,unixtime:m},e.abrupt("return",c);case 13:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return this.instance}}]),e}();P.instance=new P;var I=P,T=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("cloudContext");return null!==e?JSON.parse(e):p[0]}()),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(Object(r.a)(p)),m=Object(j.a)(c,2),o=m[0],i=m[1];Object(n.useEffect)((function(){(function(){var e=Object(N.a)(y.a.mark((function e(){var a,n,c,m,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=["aws_cloud","k8s"],n=Object(r.a)(p),c=y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o[m],e.next=3,I.getInstance().getJson("/jsonapi/cloud_config/".concat(a));case 3:t=e.sent.data.map((function(e){return{cloudServiceProvider:a,name:e.attributes.cloud_context,labelName:e.attributes.name}})),n=[].concat(Object(r.a)(n),Object(r.a)(t));case 5:case"end":return e.stop()}}),e)})),m=0,o=a;case 4:if(!(m<o.length)){e.next=9;break}return e.delegateYield(c(),"t0",6);case 6:m++,e.next=4;break;case 9:i(n),0===n.filter((function(e){return e.cloudServiceProvider===t.cloudServiceProvider&&e.name===t.name})).length&&l(p[0]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return{cloudContext:t,cloudContextList:o,dispatch:function(e){switch(e.type){case"setCloudContext":localStorage.setItem("cloudContext",JSON.stringify(e.message)),l(e.message)}}}},A=Object(n.createContext)({cloudContext:p[0],cloudContextList:[],dispatch:function(){}}),D=function(e){var a=e.menuType,t=e.menuName,l=Object(n.useContext)(A),c=l.cloudContext,m=l.cloudContextList,r=l.dispatch,p=Object(i.f)();Object(n.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),a=window.localStorage.getItem("expiresDatetime");null!==e&&null!=a?(new Date).getTime()>parseInt(a,10)&&(window.location.href=s):window.location.href=s}),[]),Object(n.useEffect)((function(){if(c.cloudServiceProvider!==a)switch(c.cloudServiceProvider){case"aws_cloud":p.push(O(u[0]));break;case"k8s":p.push(O(d[0]))}}),[c]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("nav",{className:"navbar navbar-default",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsxs)("div",{className:"navbar-header",children:[Object(f.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#navbar-collapse",children:[Object(f.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(f.jsx)("span",{className:"icon-bar"}),Object(f.jsx)("span",{className:"icon-bar"}),Object(f.jsx)("span",{className:"icon-bar"})]}),Object(f.jsx)("div",{className:"region region-navigation",children:Object(f.jsx)("a",{className:"logo navbar-btn pull-left",href:"/",title:"\u30db\u30fc\u30e0",rel:"home",children:Object(f.jsx)("img",{src:"/themes/contrib/bootstrap_cloud/logo.svg",alt:"\u30db\u30fc\u30e0"})})})]}),Object(f.jsx)("div",{className:"collapse navbar-collapse",children:Object(f.jsxs)("ul",{className:"nav navbar-nav",children:[Object(f.jsxs)("li",{className:"dropdown",children:[Object(f.jsxs)("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown","aria-expanded":!1,children:["".concat(c.labelName)," ",Object(f.jsx)("span",{className:"caret"})]}),Object(f.jsx)("ul",{className:"dropdown-menu",role:"menu",children:m.map((function(e,a){var t="aws_cloud"===e.cloudServiceProvider?u:d;return Object(f.jsx)("li",{role:"presentation",children:Object(f.jsx)(o.b,{to:O(t[0]),onClick:function(){return function(e){r({type:"setCloudContext",message:e})}(e)},children:"".concat(e.labelName)})},a)}))})]}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",onClick:function(){window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"),window.localStorage.removeItem("expiresDatetime"),window.location.href=s},children:"logout"})})]})})]})}),Object(f.jsx)("ul",{className:"nav nav-tabs",children:("aws_cloud"===a?u:d).map((function(e){return Object(f.jsx)("li",{role:"presentation",className:e.labelName===t?"active":"",children:Object(f.jsx)(o.b,{to:O(e),children:e.labelName})},e.labelName)}))})]})},R=function(e){var a=e.entityTypeId,t=e.column,l=e.cloudContext,c=e.namespace,m=e.namespaceName,r=e.sortInfo,o=e.setSortInfo,i=e.pageIndex,s=Object(n.useState)([]),u=Object(j.a)(s,2),d=u[0],p=u[1],b=Object(n.useState)([]),v=Object(j.a)(b,2),h=v[0],C=v[1];return Object(n.useEffect)((function(){var e="/jsonapi/".concat(a,"/").concat(a),t=[];t.push({key:"page[limit]",value:"".concat(30)}),t.push({key:"page[offset]",value:"".concat(30*i)}),""!==c&&t.push({key:"filter[namespace]",value:c}),""!==m&&t.push({key:"filter[namespace_name]",value:m}),"ALL"!==l.name&&t.push({key:"filter[cloud_context]",value:l.name}),""!==r.key&&t.push("ASC"===r.direction?{key:"sort",value:r.key}:{key:"sort",value:"-"+r.key}),t.length>0&&(e+="?"+t.map((function(e){return e.key+"="+e.value})).join("&")),I.getInstance().getJson(e).then((function(e){p(e.data)}))}),[c,m,l,r,i]),Object(n.useEffect)((function(){(function(){var e=Object(N.a)(y.a.mark((function e(){var a,n,l,c,m,r,o,i,s,u,p,b,N;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={},n=Object(_.a)(t),e.prev=2,n.s();case 4:if((l=n.n()).done){e.next=13;break}if("join"!==(c=l.value).type||c.info.entityTypeId in a){e.next=11;break}return e.next=9,I.getInstance().getJson("/jsonapi/".concat(c.info.entityTypeId,"/").concat(c.info.entityTypeId));case 9:m=e.sent.data,a[c.info.entityTypeId]=m;case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),n.e(e.t0);case 18:return e.prev=18,n.f(),e.finish(18);case 21:r=[],o=Object(_.a)(d);try{for(o.s();!(i=o.n()).done;){s=i.value,u={id:s.id,attributes:{}},p=Object(_.a)(t);try{for(p.s();!(b=p.n()).done;)N=b.value,u.attributes[N.name]=x(s.attributes[N.name],N,a)}catch(y){p.e(y)}finally{p.f()}r.push(u)}}catch(y){o.e(y)}finally{o.f()}C(r);case 25:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(f.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(f.jsxs)("thead",{children:[Object(f.jsx)("th",{children:Object(f.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),t.map((function(e){return Object(f.jsxs)("th",{onClick:function(){return a=e.name,void(r.key===a?"ASC"!==r.direction?o({key:"",direction:"ASC"}):o({key:a,direction:"DESC"}):o({key:a,direction:"ASC"}));var a},children:[e.labelName,r.key===e.name&&"ASC"===r.direction?"\u2191":r.key===e.name&&"DESC"===r.direction?"\u2193":""]},e.name)}))]}),Object(f.jsx)("tbody",{children:h.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),t.map((function(a){return Object(f.jsx)("td",{children:e.attributes[a.name]},a.name)}))]},e.id)}))})]})},E=function(e){var a=e.cloudContext,t=e.columnKey,l=e.columnName,c=e.setColumnName,m=Object(n.useState)([]),r=Object(j.a)(m,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){var e="/jsonapi/".concat(a.cloudServiceProvider,"_").concat(t,"/").concat(a.cloudServiceProvider,"_").concat(t);"ALL"!==a.name&&(e+="?cloudContext=".concat(a)),I.getInstance().getJson(e).then((function(e){i(e.data.map((function(e){return e.attributes.name})))}))}),[a]),Object(f.jsxs)("select",{className:"form-select form-control",value:l,onChange:function(e){c(e.currentTarget.value)},children:[Object(f.jsx)("option",{value:"",children:"- \u3059\u3079\u3066 -"}),o.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))]})},L=function(e){var a=e.cloudContext,t=e.entityTypeId,l=e.namespace,c=e.namespaceName,m=e.itemCount,r=e.setItemCount;return Object(n.useEffect)((function(){var e="ALL"===a.name?"/cloud_dashboard/".concat(a.cloudServiceProvider,"/").concat(t,"/entity/count"):"/cloud_dashboard/".concat(a.cloudServiceProvider,"/").concat(a.name,"/").concat(t,"/entity/count");""!==l&&(e+="?namespace=".concat(l)),""!==c&&(e+="?namespace_name=".concat(c)),I.getInstance().getJson(e).then((function(e){r(e.count)}))}),[a,l,c]),Object(f.jsxs)("label",{className:"control-label",children:["Item Count: ",m]})},z=function(e){var a=e.pageIndex,t=e.setPageIndex,n=e.itemCount,l=Math.floor(1*(n+30-1)/30);return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{className:"pagination",children:[Object(f.jsx)("li",{className:0!==a?"":"disabled",children:Object(f.jsx)("span",{"aria-label":"First",onClick:function(){t(0)},children:Object(f.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(f.jsx)("li",{className:0!==a?"":"disabled",children:Object(f.jsx)("span",{"aria-label":"Previous",onClick:function(){t(Math.max(0,a-1))},children:Object(f.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("span",{children:a+1})}),Object(f.jsx)("li",{className:0!==n&&a!==l-1?"":"disabled",children:Object(f.jsx)("span",{"aria-label":"Next",onClick:function(){t(Math.min(a+1,l-1))},children:Object(f.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})}),Object(f.jsx)("li",{className:0!==n&&a!==l-1?"":"disabled",children:Object(f.jsx)("span",{"aria-label":"Last",onClick:function(){t(l-1)},children:Object(f.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})},M=function(e){var a=e.entityTypeId,t=e.column,l=Object(n.useContext)(A).cloudContext,c=Object(n.useState)(""),m=Object(j.a)(c,2),r=m[0],o=m[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(0),b=Object(j.a)(p,2),y=b[0],N=b[1],v=Object(n.useState)({key:"",direction:"ASC"}),h=Object(j.a)(v,2),_=h[0],C=h[1],g=Object(n.useState)(0),x=Object(j.a)(g,2),O=x[0],S=x[1];Object(n.useEffect)((function(){""!==r&&d("")}),[r]),Object(n.useEffect)((function(){""!==u&&o("")}),[u]);var k=t.map((function(e){return e.labelName})).includes("Namespace"),w=t.map((function(e){return e.labelName})).includes("Namespace Name");return Object(f.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("form",{children:[k?Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"control-label",children:"Namespace"}),Object(f.jsx)(E,{cloudContext:l,columnKey:"namespace",columnName:r,setColumnName:o})]}):Object(f.jsx)(f.Fragment,{}),w?Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"control-label",children:"Namespace Name"}),Object(f.jsx)(E,{cloudContext:l,columnKey:"namespace_name",columnName:u,setColumnName:d})]}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)(L,{cloudContext:l,entityTypeId:a,namespace:r,namespaceName:u,itemCount:y,setItemCount:N})}),Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsx)(R,{entityTypeId:a,column:t,cloudContext:l,namespace:r,namespaceName:u,sortInfo:_,setSortInfo:C,pageIndex:O})}),Object(f.jsx)(z,{pageIndex:O,setPageIndex:S,itemCount:y})]})})})},V=function(){return Object(f.jsx)(o.a,{basename:s,children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(h,{})})}),Object(f.jsx)(i.a,{path:"/callback",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(v,{})})}),Object(f.jsx)(A.Provider,{value:T(),children:[].concat(Object(r.a)(u),Object(r.a)(d)).map((function(e){return Object(f.jsx)(i.a,{path:O(e),children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(D,{menuType:e.cloudServiceProvider,menuName:e.labelName}),Object(f.jsx)(M,{entityTypeId:S(e),column:e.entityColumn})]})},S(e))}))})]})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,m=a.getTTFB;t(e),n(e),l(e),c(e),m(e)}))};m.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root")),q()}},[[35,1,2]]]);
//# sourceMappingURL=main.ea5f64c3.chunk.js.map