(this.webpackJsonpcloud_dashboard=this.webpackJsonpcloud_dashboard||[]).push([[0],{37:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),m=t(22),c=t.n(m),o=t(20),i=t(13),s=t(2),r="/clouds/dashboard",u=[{type:"aws_cloud",name:"Instance",entityName:"instance",entityTypeId:"aws_cloud_instance",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Public IP",name:"public_ip",type:"default"},{labelName:"Instance State",name:"instance_state",type:"default"},{labelName:"Instance Type",name:"instance_type",type:"default"},{labelName:"Availability Zone",name:"availability_zone",type:"default"},{labelName:"Cost",name:"cost",type:"cost"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"Image",entityName:"image",entityTypeId:"aws_cloud_image",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"AMI Name",name:"ami_name",type:"default"},{labelName:"AMI ID",name:"image_id",type:"default"},{labelName:"Status",name:"status",type:"default"},{labelName:"Source",name:"source",type:"default"},{labelName:"Root Device Type",name:"root_device_type",type:"default"},{labelName:"Visibility",name:"visibility",type:"boolean",value:["Public","Private"]},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"Security Group",entityName:"security_group",entityTypeId:"aws_cloud_security_group",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Group ID",name:"group_id",type:"default"},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}}]},{type:"aws_cloud",name:"Elastic IP",entityName:"elastic_ip",entityTypeId:"aws_cloud_elastic_ip",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Allocation ID",name:"allocation_id",type:"default"},{labelName:"Type",name:"elastic_ip_type",type:"default"},{labelName:"Elastic IP",name:"public_ip",type:"default"},{labelName:"Instance ID",name:"instance_id",type:"join",info:{entityTypeId:"aws_cloud_instance",keyColumn:"instance_id",valueColumn:"name"}},{labelName:"Private IP Address",name:"private_ip_address",type:"default"},{labelName:"Scope",name:"scope",type:"default"}]},{type:"aws_cloud",name:"Key Pair",entityName:"key_pair",entityTypeId:"aws_cloud_key_pair",column:[{labelName:"Key Pair Name",name:"key_pair_name",type:"default"},{labelName:"Key Fingerprint",name:"key_fingerprint",type:"default"}]},{type:"aws_cloud",name:"Volume",entityName:"volume",entityTypeId:"aws_cloud_volume",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Volume ID",name:"volume_id",type:"default"},{labelName:"IOPS",name:"iops",type:"default"},{labelName:"Size",name:"size",type:"default"},{labelName:"Availability Zone",name:"availability_zone",type:"default"},{labelName:"Volume Type",name:"volume_type",type:"default"},{labelName:"Attachment Information",name:"attachment_information",type:"join",info:{entityTypeId:"aws_cloud_instance",keyColumn:"instance_id",valueColumn:"name"}},{labelName:"State",name:"state",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"Snapshot",entityName:"snapshot",entityTypeId:"aws_cloud_snapshot",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Snapshot ID",name:"snapshot_id",type:"default"},{labelName:"Encrypted",name:"encrypted",type:"default"},{labelName:"Size",name:"size",type:"default"},{labelName:"Status",name:"status",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"Network Interface",entityName:"network_interface",entityTypeId:"aws_cloud_network_interface",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Subnet",name:"subnet_id",type:"join",info:{entityTypeId:"aws_cloud_subnet",keyColumn:"subnet_id",valueColumn:"name"}},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Status",name:"status",type:"default"},{labelName:"Security Groups",name:"security_groups",type:"default"},{labelName:"Primary Private IP",name:"primary_private_ip",type:"default"},{labelName:"Secondary Private IPs",name:"secondary_private_ips",type:"default"}]},{type:"aws_cloud",name:"VPC",entityName:"vpc",entityTypeId:"aws_cloud_vpc",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"VPC",name:"vpc_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"IPv4 CIDR",name:"cidr_block",type:"default"},{labelName:"IPv6 CIDR",name:"ipv6_cidr_blocks",type:"array"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"Subnet",entityName:"subnet",entityTypeId:"aws_cloud_subnet",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Subnet ID",name:"subnet_id",type:"default"},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"IPv4 CIDR",name:"cidr_block",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Region Name",name:"region_name",type:"default"},{labelName:"Zone Name",name:"zone_name",type:"default"},{labelName:"Network Border Group",name:"network_border_group",type:"default"},{labelName:"Zone Type",name:"zone_type",type:"default"},{labelName:"Parent Zone Type",name:"parent_zone_type",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"VPC Peering Connection",entityName:"vpc_peering_connection",entityTypeId:"aws_cloud_vpc_peering_connection",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"VPC Peering Connection ID",name:"vpc_peering_connection_id",type:"default"},{labelName:"Status",name:"status_code",type:"default"},{labelName:"Requester VPC",name:"requester_vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Accepter VPC",name:"accepter_vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Requester CIDR Blocks",name:"requester_cidr_block",type:"default"},{labelName:"Accepter CIDR Blocks",name:"accepter_cidr_block",type:"default"},{labelName:"Requester AWS Account",name:"requester_account_id",type:"default"},{labelName:"Accepter AWS Account",name:"accepter_account_id",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"aws_cloud",name:"Internet Gateway",entityName:"internet_gateway",entityTypeId:"aws_cloud_internet_gateway",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Internet Gateway ID",name:"internet_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"VPC ID",name:"vpc_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]},{type:"aws_cloud",name:"Career Gateway",entityName:"career_gateway",entityTypeId:"aws_cloud_career_gateway",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Carrier Gateway ID",name:"carrier_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"VPC ID",name:"vpc_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]},{type:"aws_cloud",name:"Transit Gateway",entityName:"transit_gateway",entityTypeId:"aws_cloud_transit_gateway",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Transit Gateway ID",name:"transit_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Amazon Account ID",name:"account_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]}],d=[{type:"k8s",name:"Node",entityName:"node",entityTypeId:"k8s_node",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"CPU (Request)",name:"cpu_request",type:"default"},{labelName:"CPU (Limit)",name:"cpu_limit",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Request)",name:"memory_request",type:"memory"},{labelName:"Memory (Limit)",name:"memory_limit",type:"memory"},{labelName:"Memory (Usage)",name:"memory_usage",type:"memory"},{labelName:"Pods (Applcation)",name:"pods_allocation",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Namespace",entityName:"namespace",entityTypeId:"k8s_namespace",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Deployment",entityName:"deployment",entityTypeId:"k8s_deployment",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Pod",entityName:"pod",entityTypeId:"k8s_pod",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Restarts",name:"restarts",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Usage)",name:"memory_usage",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"ReplicaSet",entityName:"replica_set",entityTypeId:"k8s_replica_set",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Replica",name:"replicas",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"CronJob",entityName:"cron_job",entityTypeId:"k8s_cron_job",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Schedule",name:"schedule",type:"default"},{labelName:"Suspend",name:"suspend",type:"default"},{labelName:"Active",name:"active",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Job",entityName:"job",entityTypeId:"k8s_job",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Image",name:"image",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Service",entityName:"service",entityTypeId:"k8s_service",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Cluster IP",name:"cluster_ip",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Network Policy",entityName:"network_policy",entityTypeId:"k8s_network_policy",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Resource Quotas",entityName:"resource_quota",entityTypeId:"k8s_resource_quota",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"LimitRange",entityName:"limit_range",entityTypeId:"k8s_limit_range",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Priority Class",entityName:"priority_class",entityTypeId:"k8s_priority_class",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Value",name:"value",type:"default"},{labelName:"Global Default",name:"global_default",type:"boolean",value:["TRUE","FALSE"]},{labelName:"Description",name:"description",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"ConfigMap",entityName:"config_map",entityTypeId:"k8s_config_map",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Secret",entityName:"secret",entityTypeId:"k8s_secret",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Type",name:"secret_type",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Role",entityName:"role",entityTypeId:"k8s_role",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Role Binding",entityName:"role_binding",entityTypeId:"k8s_role_binding",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Role",name:"role_ref",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Cluster Role",entityName:"cluster_role",entityTypeId:"k8s_cluster_role",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Cluster Role Binding",entityName:"cluster_role_binding",entityTypeId:"k8s_cluster_role_binding",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Cluster Role",name:"role_ref",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Persistent Volume",entityName:"persistent_volume",entityTypeId:"k8s_persistent_volume",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Capacity",name:"capacity",type:"default"},{labelName:"Access Modes",name:"access_modes",type:"default"},{labelName:"Reclaim Policy",name:"reclaim_policy",type:"default"},{labelName:"Status",name:"phase",type:"default"},{labelName:"Request",name:"claim_ref",type:"default"},{labelName:"Storage Class",name:"storage_class_name",type:"default"},{labelName:"Reason",name:"reason",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Persistent Volume Claim",entityName:"persistent_volume_claim",entityTypeId:"k8s_persistent_volume_claim",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Phase",name:"phase",type:"default"},{labelName:"VolumeName",name:"volume_name",type:"default"},{labelName:"Capacity",name:"capacity",type:"default"},{labelName:"Request",name:"request",type:"default"},{labelName:"Access Mode",name:"access_mode",type:"default"},{labelName:"Storage Class",name:"storage_class",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Storage Class",entityName:"storage_class",entityTypeId:"k8s_storage_class",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Provisioner",name:"provisioner",type:"default"},{labelName:"Parameters",name:"parameters",type:"key-value"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"StatefulSet",entityName:"stateful_set",entityTypeId:"k8s_stateful_set",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Ingress",entityName:"ingress",entityTypeId:"k8s_ingress",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"DaemonSet",entityName:"daemon_set",entityTypeId:"k8s_daemon_set",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Endpoint",entityName:"endpoint",entityTypeId:"k8s_endpoint",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Event",entityName:"event",entityTypeId:"k8s_event",column:[{labelName:"Type",name:"k8s_event_type",type:"default"},{labelName:"Reason",name:"reason",type:"default"},{labelName:"Object Kind",name:"object_kind",type:"default"},{labelName:"Object Name",name:"object_name",type:"default"},{labelName:"Message",name:"message",type:"default"},{labelName:"Last Time Stamp",name:"time_stamp",type:"datetime"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"API Service",entityName:"api_service",entityTypeId:"k8s_api_service",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"ServiceAccount",entityName:"service_account",entityTypeId:"k8s_service_account",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"k8s",name:"Horizontal Pod Autoscaler",entityName:"horizontal_pod_autoscaler",entityTypeId:"k8s_horizontal_pod_autoscaler",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Scale Target",name:"scale_target",type:"default"},{labelName:"Target CPU Utilization Percentage",name:"target_cpu_utilization_percentage",type:"default"}]},{type:"k8s",name:"Schedule",entityName:"schedule",entityTypeId:"k8s_schedule",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Kind",name:"kind",type:"default"},{labelName:"Namespace Name",name:"namespace_name",type:"default"},{labelName:"Resource Name",name:"resource_name",type:"default"},{labelName:"Launch Template Name",name:"launch_template_name",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Start",name:"start_time",type:"default"},{labelName:"Stop",name:"stop_time",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]}],p=t(7),y=t.n(p),b=t(9),N=t(0),f=function(){var e=function(){var e=Object(b.a)(y.a.mark((function e(a,t,n){var l,m,c,o,i,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=new FormData).append("grant_type","authorization_code"),l.append("client_id",t),l.append("client_secret","cloud_dashboard"),l.append("code",a),l.append("redirect_uri",n),e.next=8,fetch("/oauth/token",{method:"POST",body:l});case 8:if((m=e.sent).ok){e.next=11;break}throw new Error("Authorization failed");case 11:return e.next=13,m.json();case 13:if(!("access_token"in(c=e.sent))){e.next=23;break}o=c.access_token,i=c.refresh_token,s=(new Date).getTime()+1e3*c.expires_in,window.localStorage.setItem("accessToken",o),window.localStorage.setItem("refreshToken",i),window.localStorage.setItem("expiresDatetime","".concat(s)),e.next=24;break;case 23:throw new Error("Authorization failed");case 24:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.group("Authorization Code Grant");var a=window.localStorage.getItem("clientId"),t=window.localStorage.getItem("redirectUri");if(null===a||null==t)return console.log("Client ID : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=r);console.log("Client ID : Yes");var n=new URL(window.location.href).searchParams.get("code");if(null===n)return console.log("Authorization code : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=r);console.log("authorization code : Yes"),e(n,a,t).then((function(){console.log("Access token : Yes"),console.groupEnd(),window.location.href=r+"/aws_cloud/instance"})).catch((function(){console.log("Access token : No"),console.error("Authorization failed."),console.groupEnd(),window.location.href=r}))}),[]),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col",children:Object(N.jsx)("h2",{children:"Please waiting..."})})})},_=t(4),j=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1],m=Object(n.useState)(""),c=Object(_.a)(m,2),o=c[0],i=c[1],s=function(){var e=Object(b.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/jsonapi/consumer/consumer");case 2:return e.next=4,e.sent.json();case 4:a=e.sent,(t=a.data.filter((function(e){return"Cloud Dashboard"===e.attributes.label}))).length>=1&&(l(t[0].id),i(t[0].attributes.redirect));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(n.useEffect)((function(){window.localStorage.setItem("clientId",t)}),[t]),Object(n.useEffect)((function(){window.localStorage.setItem("redirectUri",o)}),[o]),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col",children:Object(N.jsx)("form",{children:Object(N.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(){var e="/oauth/authorize?response_type=code&client_id=".concat(t,"&redirect_uri=").concat(o);window.location.href=e},disabled:""===t,children:"login"})})})})},h=t(10),v=function(e,a){return"000000".concat(e).slice(-a)},g=function(e,a){for(var t=1,n=0;n<a;n+=1)t*=10;if(Math.floor(e)!==e)return"".concat(Math.round(e*t)/t);var l="".concat(e);if(0!==a){l+=".";for(var m=0;m<a;m+=1)l+="0"}return l},k=function(e,a,t){if(null===e)return"";switch(a.type){case"datetime":return function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,l=a.getDate(),m=a.getHours(),c=a.getMinutes(),o="".concat(t,"/").concat(v(n,2),"/").concat(v(l,2));return o+" - ".concat(v(m,2),":").concat(v(c,2))}(e);case"memory":return e>=1073741824?"".concat(g(e/1073741824,2),"Gi"):e>=1048576?"".concat(g(e/1048576,2),"Mi"):e>=1024?"".concat(g(e/1024,2),"Ki"):g(e,2);case"key-value":var n,l=[],m=Object(h.a)(e);try{for(m.s();!(n=m.n()).done;){var c=n.value;l.push("".concat(c.item_key,":").concat(c.item_value))}}catch(r){m.e(r)}finally{m.f()}return l.join(", ");case"cost":return"$".concat(e);case"boolean":return e?a.value[0]:a.value[1];case"array":return e.map((function(e){return"".concat(e)})).join(", ");case"join":var o,i=Object(h.a)(t[a.info.entityTypeId]);try{for(i.s();!(o=i.n()).done;){var s=o.value;if(s.attributes[a.info.keyColumn]===e)return s.attributes[a.info.valueColumn]}}catch(r){i.e(r)}finally{i.f()}return"(".concat(e,")");default:return e}},C=function(e){return"/".concat(e.type,"/").concat(e.entityName)},I=function(e){var a=e.menuType,t=e.menuName;Object(n.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),a=window.localStorage.getItem("expiresDatetime");null!==e&&null!=a?(new Date).getTime()>parseInt(a,10)&&(window.location.href=r):window.location.href=r}),[]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("ul",{className:"nav nav-tabs",children:[Object(N.jsx)("li",{role:"presentation",className:"aws_cloud"===a?"active":"",children:Object(N.jsx)(i.b,{to:C(u[0]),children:"AWS"})}),Object(N.jsx)("li",{role:"presentation",className:"k8s"===a?"active":"",children:Object(N.jsx)(i.b,{to:C(d[0]),children:"K8s"})})]}),Object(N.jsxs)("ul",{className:"nav nav-tabs",children:[("aws_cloud"===a?u:d).map((function(e){return Object(N.jsx)("li",{role:"presentation",className:e.name===t?"active":"",children:Object(N.jsx)(i.b,{to:C(e),children:e.name})},e.name)})),Object(N.jsx)("li",{role:"presentation",children:Object(N.jsx)("a",{href:"#",onClick:function(){window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"),window.localStorage.removeItem("expiresDatetime"),window.location.href=r},children:"logout"})})]})]})},x=t(24),O=t(25),w=function(){function e(){Object(x.a)(this,e),this.cache={}}return Object(O.a)(e,[{key:"getJson",value:function(){var e=Object(b.a)(y.a.mark((function e(a,t){var n,l,m,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a in this.cache)){e.next=5;break}if(n=this.cache[a],!((l=(new Date).getTime())>=n.unixtime&&l-n.unixtime<864e5)){e.next=5;break}return e.abrupt("return",n.response);case 5:return e.next=7,fetch(a,t);case 7:return e.next=9,e.sent.json();case 9:return m=e.sent,c=(new Date).getTime(),this.cache[a]={response:m,unixtime:c},e.abrupt("return",m);case 13:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return this.instance}}]),e}();w.instance=new w;var T=w,S=function(e){var a=e.cloudContext,t=e.setCloudContext,l=e.cloudConfigType,m=Object(n.useState)([]),c=Object(_.a)(m,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){T.getInstance().getJson("/jsonapi/cloud_config/".concat(l)).then((function(e){var n=e.data.map((function(e){return e.attributes.cloud_context}));i(n),!n.includes(a)&&n.length>=1&&t(n[0])}))}),[]),Object(N.jsx)("select",{className:"form-select form-control",value:a,onChange:function(e){t(e.currentTarget.value)},children:o.map((function(e){return Object(N.jsx)("option",{value:e,children:e},e)}))})},P=function(e){var a=e.entityTypeId,t=e.column,l=e.cloudContext,m=e.namespace,c=e.namespaceName,o=e.sortInfo,i=e.setSortInfo,s=e.pageIndex,r=Object(n.useState)([]),u=Object(_.a)(r,2),d=u[0],p=u[1],f=Object(n.useState)([]),j=Object(_.a)(f,2),v=j[0],g=j[1];return Object(n.useEffect)((function(){var e="/jsonapi/".concat(a,"/").concat(a),t=[];t.push({key:"page[limit]",value:"".concat(30)}),t.push({key:"page[offset]",value:"".concat(30*s)}),""!==m&&t.push({key:"filter[namespace]",value:m}),""!==c&&t.push({key:"filter[namespace_name]",value:c}),""!==l&&t.push({key:"filter[cloud_context]",value:l}),""!==o.key&&t.push("ASC"===o.direction?{key:"sort",value:o.key}:{key:"sort",value:"-"+o.key}),t.length>0&&(e+="?"+t.map((function(e){return e.key+"="+e.value})).join("&")),T.getInstance().getJson(e).then((function(e){p(e.data)}))}),[m,c,l,o,s]),Object(n.useEffect)((function(){(function(){var e=Object(b.a)(y.a.mark((function e(){var a,n,l,m,c,o,i,s,r,u,p,b,N;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={},n=Object(h.a)(t),e.prev=2,n.s();case 4:if((l=n.n()).done){e.next=13;break}if("join"!==(m=l.value).type||m.info.entityTypeId in a){e.next=11;break}return e.next=9,T.getInstance().getJson("/jsonapi/".concat(m.info.entityTypeId,"/").concat(m.info.entityTypeId));case 9:c=e.sent.data,a[m.info.entityTypeId]=c;case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),n.e(e.t0);case 18:return e.prev=18,n.f(),e.finish(18);case 21:o=[],i=Object(h.a)(d);try{for(i.s();!(s=i.n()).done;){r=s.value,u={id:r.id,attributes:{}},p=Object(h.a)(t);try{for(p.s();!(b=p.n()).done;)N=b.value,u.attributes[N.name]=k(r.attributes[N.name],N,a)}catch(y){p.e(y)}finally{p.f()}o.push(u)}}catch(y){i.e(y)}finally{i.f()}g(o);case 25:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(N.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(N.jsxs)("thead",{children:[Object(N.jsx)("th",{children:Object(N.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),t.map((function(e){return Object(N.jsxs)("th",{onClick:function(){return a=e.name,void(o.key===a?"ASC"!==o.direction?i({key:"",direction:"ASC"}):i({key:a,direction:"DESC"}):i({key:a,direction:"ASC"}));var a},children:[e.labelName,o.key===e.name&&"ASC"===o.direction?"\u2191":o.key===e.name&&"DESC"===o.direction?"\u2193":""]},e.name)}))]}),Object(N.jsx)("tbody",{children:v.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),t.map((function(a){return Object(N.jsx)("td",{children:e.attributes[a.name]},a.name)}))]},e.id)}))})]})},A=function(e){var a=e.cloudContext,t=e.columnKey,l=e.columnName,m=e.setColumnName,c=e.cloudConfigType,o=Object(n.useState)([]),i=Object(_.a)(o,2),s=i[0],r=i[1];return Object(n.useEffect)((function(){var e="/jsonapi/".concat(c,"_").concat(t,"/").concat(c,"_").concat(t);""!==a&&(e+="?cloudContext=".concat(a)),T.getInstance().getJson(e).then((function(e){r(e.data.map((function(e){return e.attributes.name})))}))}),[a]),Object(N.jsxs)("select",{className:"form-select form-control",value:l,onChange:function(e){m(e.currentTarget.value)},children:[Object(N.jsx)("option",{value:"",children:"- \u3059\u3079\u3066 -"}),s.map((function(e){return Object(N.jsx)("option",{value:e,children:e},e)}))]})},D=function(e){var a=e.cloudContext,t=e.entityTypeId,l=e.namespace,m=e.namespaceName,c=e.itemCount,o=e.setItemCount,i=e.cloudConfigType;return Object(n.useEffect)((function(){if(""===a)o(0);else{var e="/cloud_dashboard/".concat(i,"/").concat(a,"/").concat(t,"/entity/count");""!==l&&(e+="?namespace=".concat(l)),""!==m&&(e+="?namespace_name=".concat(m)),T.getInstance().getJson(e).then((function(e){o(e.count)}))}}),[a,l,m]),Object(N.jsxs)("label",{className:"control-label",children:["Item Count: ",c]})},R=function(e){var a=e.pageIndex,t=e.setPageIndex,n=e.itemCount,l=Math.floor(1*(n+30-1)/30);return Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{className:"pagination",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#","aria-label":"\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(0)},children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#","aria-label":"\u524d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(Math.max(0,a-1))},children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#",children:a+1})}),Object(N.jsx)("li",{className:a!==l-1?"":"disabled",children:Object(N.jsx)("a",{href:"#","aria-label":"\u6b21\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(Math.min(a+1,l-1))},children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})}),Object(N.jsx)("li",{className:0!==n&&a!==l-1?"":"disabled",children:Object(N.jsx)("a",{href:"#","aria-label":"\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(l-1)},children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})},E=function(e){var a=e.entityTypeId,t=e.column,l=e.cloudConfigType,m=Object(n.useState)(""),c=Object(_.a)(m,2),o=c[0],i=c[1],s=Object(n.useState)(""),r=Object(_.a)(s,2),u=r[0],d=r[1],p=Object(n.useState)(""),y=Object(_.a)(p,2),b=y[0],f=y[1],j=Object(n.useState)(0),h=Object(_.a)(j,2),v=h[0],g=h[1],k=Object(n.useState)({key:"",direction:"ASC"}),C=Object(_.a)(k,2),I=C[0],x=C[1],O=Object(n.useState)(0),w=Object(_.a)(O,2),T=w[0],E=w[1];Object(n.useEffect)((function(){""!==u&&f("")}),[u]),Object(n.useEffect)((function(){""!==b&&d("")}),[b]);var z=t.map((function(e){return e.labelName})).includes("Namespace"),M=t.map((function(e){return e.labelName})).includes("Namespace Name");return Object(N.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(N.jsx)("div",{className:"col",children:Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{className:"control-label",children:"Cloud context"}),Object(N.jsx)(S,{cloudContext:o,setCloudContext:i,cloudConfigType:l})]}),z?Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{className:"control-label",children:"Namespace"}),Object(N.jsx)(A,{cloudContext:o,columnKey:"namespace",columnName:u,setColumnName:d,cloudConfigType:l})]}):Object(N.jsx)(N.Fragment,{}),M?Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{className:"control-label",children:"Namespace Name"}),Object(N.jsx)(A,{cloudContext:o,columnKey:"namespace_name",columnName:b,setColumnName:f,cloudConfigType:l})]}):Object(N.jsx)(N.Fragment,{}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)(D,{cloudContext:o,entityTypeId:a,namespace:u,namespaceName:b,itemCount:v,setItemCount:g,cloudConfigType:l})}),Object(N.jsx)("div",{className:"table-responsive",children:Object(N.jsx)(P,{entityTypeId:a,column:t,cloudContext:o,namespace:u,namespaceName:b,sortInfo:I,setSortInfo:x,pageIndex:T})}),Object(N.jsx)(R,{pageIndex:T,setPageIndex:E,itemCount:v})]})})})},z=function(){return Object(N.jsx)(i.a,{basename:r,children:Object(N.jsxs)(s.c,{children:[[].concat(Object(o.a)(u),Object(o.a)(d)).map((function(e){return Object(N.jsx)(s.a,{exact:!0,path:C(e),children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(I,{menuType:e.type,menuName:e.name}),Object(N.jsx)(E,{entityTypeId:e.entityTypeId,column:e.column,cloudConfigType:e.type})]})},e.name)})),Object(N.jsx)(s.a,{exact:!0,path:"/callback",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsx)(f,{})})}),Object(N.jsx)(s.a,{exact:!0,path:"/",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsx)(j,{})})})]})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,m=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),m(e),c(e)}))};c.a.render(Object(N.jsx)(l.a.StrictMode,{children:Object(N.jsx)(z,{})}),document.getElementById("root")),M()}},[[37,1,2]]]);
//# sourceMappingURL=main.a058a18d.chunk.js.map