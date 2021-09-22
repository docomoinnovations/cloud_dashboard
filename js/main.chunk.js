(this.webpackJsonpcloud_dashboard=this.webpackJsonpcloud_dashboard||[]).push([[0],{33:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(19),m=t.n(c),o=t(20),r=t(2),s="/clouds/dashboard",i=[{type:"AWS",name:"Instance",url:"/aws_cloud/instance",entityTypeId:"aws_cloud_instance",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Public IP",name:"public_ip",type:"default"},{labelName:"Instance State",name:"instance_state",type:"default"},{labelName:"Instance Type",name:"instance_type",type:"default"},{labelName:"Availability Zone",name:"availability_zone",type:"default"},{labelName:"Cost",name:"cost",type:"cost"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"Image",url:"/aws_cloud/image",entityTypeId:"aws_cloud_image",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"AMI Name",name:"ami_name",type:"default"},{labelName:"AMI ID",name:"image_id",type:"default"},{labelName:"Status",name:"status",type:"default"},{labelName:"Source",name:"source",type:"default"},{labelName:"Root Device Type",name:"root_device_type",type:"default"},{labelName:"Visibility",name:"visibility",type:"boolean",value:["Public","Private"]},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"Security Group",url:"/aws_cloud/security_group",entityTypeId:"aws_cloud_security_group",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Group ID",name:"group_id",type:"default"},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}}]},{type:"AWS",name:"Elastic IP",url:"/aws_cloud/elastic_ip",entityTypeId:"aws_cloud_elastic_ip",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Allocation ID",name:"allocation_id",type:"default"},{labelName:"Type",name:"elastic_ip_type",type:"default"},{labelName:"Elastic IP",name:"public_ip",type:"default"},{labelName:"Instance ID",name:"instance_id",type:"join",info:{entityTypeId:"aws_cloud_instance",keyColumn:"instance_id",valueColumn:"name"}},{labelName:"Private IP Address",name:"private_ip_address",type:"default"},{labelName:"Scope",name:"scope",type:"default"}]},{type:"AWS",name:"Key Pair",url:"/aws_cloud/key_pair",entityTypeId:"aws_cloud_key_pair",column:[{labelName:"Key Pair Name",name:"key_pair_name",type:"default"},{labelName:"Key Fingerprint",name:"key_fingerprint",type:"default"}]},{type:"AWS",name:"Volume",url:"/aws_cloud/volume",entityTypeId:"aws_cloud_volume",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Volume ID",name:"volume_id",type:"default"},{labelName:"IOPS",name:"iops",type:"default"},{labelName:"Size",name:"size",type:"default"},{labelName:"Availability Zone",name:"availability_zone",type:"default"},{labelName:"Volume Type",name:"volume_type",type:"default"},{labelName:"Attachment Information",name:"attachment_information",type:"join",info:{entityTypeId:"aws_cloud_instance",keyColumn:"instance_id",valueColumn:"name"}},{labelName:"State",name:"state",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"Snapshot",url:"/aws_cloud/snapshot",entityTypeId:"aws_cloud_snapshot",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Snapshot ID",name:"snapshot_id",type:"default"},{labelName:"Encrypted",name:"encrypted",type:"default"},{labelName:"Size",name:"size",type:"default"},{labelName:"Status",name:"status",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"Network Interface",url:"/aws_cloud/network_interface",entityTypeId:"aws_cloud_network_interface",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Subnet",name:"subnet_id",type:"join",info:{entityTypeId:"aws_cloud_subnet",keyColumn:"subnet_id",valueColumn:"name"}},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Status",name:"status",type:"default"},{labelName:"Security Groups",name:"security_groups",type:"default"},{labelName:"Primary Private IP",name:"primary_private_ip",type:"default"},{labelName:"Secondary Private IPs",name:"secondary_private_ips",type:"default"}]},{type:"AWS",name:"VPC",url:"/aws_cloud/vpc",entityTypeId:"aws_cloud_vpc",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"VPC",name:"vpc_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"IPv4 CIDR",name:"cidr_block",type:"default"},{labelName:"IPv6 CIDR",name:"ipv6_cidr_blocks",type:"array"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"Subnet",url:"/aws_cloud/subnet",entityTypeId:"aws_cloud_subnet",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Subnet ID",name:"subnet_id",type:"default"},{labelName:"VPC",name:"vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"IPv4 CIDR",name:"cidr_block",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Region Name",name:"region_name",type:"default"},{labelName:"Zone Name",name:"zone_name",type:"default"},{labelName:"Network Border Group",name:"network_border_group",type:"default"},{labelName:"Zone Type",name:"zone_type",type:"default"},{labelName:"Parent Zone Type",name:"parent_zone_type",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"VPC Peering Connection",url:"/aws_cloud/vpc_peering_connection",entityTypeId:"aws_cloud_vpc_peering_connection",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"VPC Peering Connection ID",name:"vpc_peering_connection_id",type:"default"},{labelName:"Status",name:"status_code",type:"default"},{labelName:"Requester VPC",name:"requester_vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Accepter VPC",name:"accepter_vpc_id",type:"join",info:{entityTypeId:"aws_cloud_vpc",keyColumn:"vpc_id",valueColumn:"name"}},{labelName:"Requester CIDR Blocks",name:"requester_cidr_block",type:"default"},{labelName:"Accepter CIDR Blocks",name:"accepter_cidr_block",type:"default"},{labelName:"Requester AWS Account",name:"requester_account_id",type:"default"},{labelName:"Accepter AWS Account",name:"accepter_account_id",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"AWS",name:"Internet Gateway",url:"/aws_cloud/internet_gateway",entityTypeId:"aws_cloud_internet_gateway",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Internet Gateway ID",name:"internet_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"VPC ID",name:"vpc_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]},{type:"AWS",name:"Career Gateway",url:"/aws_cloud/career_gateway",entityTypeId:"aws_cloud_career_gateway",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Carrier Gateway ID",name:"carrier_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"VPC ID",name:"vpc_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]},{type:"AWS",name:"Transit Gateway",url:"/aws_cloud/transit_gateway",entityTypeId:"aws_cloud_transit_gateway",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Transit Gateway ID",name:"transit_gateway_id",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Amazon Account ID",name:"account_id",type:"default"},{labelName:"Created",name:"created",type:"default"}]}],u=[{type:"K8s",name:"Node",url:"/k8s/node",entityTypeId:"k8s_node",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"CPU (Request)",name:"cpu_request",type:"default"},{labelName:"CPU (Limit)",name:"cpu_limit",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Request)",name:"memory_request",type:"memory"},{labelName:"Memory (Limit)",name:"memory_limit",type:"memory"},{labelName:"Memory (Usage)",name:"memory_usage",type:"memory"},{labelName:"Pods (Applcation)",name:"pods_allocation",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Namespace",url:"/k8s/namespace",entityTypeId:"k8s_namespace",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Deployment",url:"/k8s/deployment",entityTypeId:"k8s_deployment",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Pod",url:"/k8s/pod",entityTypeId:"k8s_pod",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"State",name:"status",type:"default"},{labelName:"Restarts",name:"restarts",type:"default"},{labelName:"CPU (Usage)",name:"cpu_usage",type:"default"},{labelName:"Memory (Usage)",name:"memory_usage",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"ReplicaSet",url:"/k8s/replica_set",entityTypeId:"k8s_replica_set",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Replica",name:"replicas",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"CronJob",url:"/k8s/cron_job",entityTypeId:"k8s_cron_job",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Schedule",name:"schedule",type:"default"},{labelName:"Suspend",name:"suspend",type:"default"},{labelName:"Active",name:"active",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Job",url:"/k8s/job",entityTypeId:"k8s_job",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Image",name:"image",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Service",url:"/k8s/service",entityTypeId:"k8s_service",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Cluster IP",name:"cluster_ip",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Network Policy",url:"/k8s/network_policy",entityTypeId:"k8s_network_policy",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Resource Quotas",url:"/k8s/resource_quota",entityTypeId:"k8s_resource_quota",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"LimitRange",url:"/k8s/limit_range",entityTypeId:"k8s_limit_range",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Priority Class",url:"/k8s/priority_class",entityTypeId:"k8s_priority_class",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Value",name:"value",type:"default"},{labelName:"Global Default",name:"global_default",type:"boolean",value:["TRUE","FALSE"]},{labelName:"Description",name:"description",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"ConfigMap",url:"/k8s/config_map",entityTypeId:"k8s_config_map",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Secret",url:"/k8s/secret",entityTypeId:"k8s_secret",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Type",name:"secret_type",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Role",url:"/k8s/role",entityTypeId:"k8s_role",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Role Binding",url:"/k8s/role_binding",entityTypeId:"k8s_role_binding",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Role",name:"role_ref",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Cluster Role",url:"/k8s/cluster_role",entityTypeId:"k8s_cluster_role",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Cluster Role Binding",url:"/k8s/cluster_role_binding",entityTypeId:"k8s_cluster_role_binding",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Cluster Role",name:"role_ref",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Persistent Volume",url:"/k8s/persistent_volume",entityTypeId:"k8s_persistent_volume",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Capacity",name:"capacity",type:"default"},{labelName:"Access Modes",name:"access_modes",type:"default"},{labelName:"Reclaim Policy",name:"reclaim_policy",type:"default"},{labelName:"Status",name:"phase",type:"default"},{labelName:"Request",name:"claim_ref",type:"default"},{labelName:"Storage Class",name:"storage_class_name",type:"default"},{labelName:"Reason",name:"reason",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Persistent Volume Claim",url:"/k8s/persistent_volume_claim",entityTypeId:"k8s_persistent_volume_claim",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Phase",name:"phase",type:"default"},{labelName:"VolumeName",name:"volume_name",type:"default"},{labelName:"Capacity",name:"capacity",type:"default"},{labelName:"Request",name:"request",type:"default"},{labelName:"Access Mode",name:"access_mode",type:"default"},{labelName:"Storage Class",name:"storage_class",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Storage Class",url:"/k8s/storage_class",entityTypeId:"k8s_storage_class",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Provisioner",name:"provisioner",type:"default"},{labelName:"Parameters",name:"parameters",type:"key-value"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"StatefulSet",url:"/k8s/stateful_set",entityTypeId:"k8s_stateful_set",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Ingress",url:"/k8s/ingress",entityTypeId:"k8s_ingress",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"DaemonSet",url:"/k8s/daemon_set",entityTypeId:"k8s_daemon_set",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Endpoint",url:"/k8s/endpoint",entityTypeId:"k8s_endpoint",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Node",name:"node_name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Event",url:"/k8s/event",entityTypeId:"k8s_event",column:[{labelName:"Type",name:"k8s_event_type",type:"default"},{labelName:"Reason",name:"reason",type:"default"},{labelName:"Object Kind",name:"object_kind",type:"default"},{labelName:"Object Name",name:"object_name",type:"default"},{labelName:"Message",name:"message",type:"default"},{labelName:"Last Time Stamp",name:"time_stamp",type:"datetime"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"API Service",url:"/k8s/api_service",entityTypeId:"k8s_api_service",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"ServiceAccount",url:"/k8s/service_account",entityTypeId:"k8s_service_account",column:[{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Name",name:"name",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]},{type:"K8s",name:"Horizontal Pod Autoscaler",url:"/k8s/horizontal_pod_autoscaler",entityTypeId:"k8s_horizontal_pod_autoscaler",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Namespace",name:"namespace",type:"default"},{labelName:"Scale Target",name:"scale_target",type:"default"},{labelName:"Target CPU Utilization Percentage",name:"target_cpu_utilization_percentage",type:"default"}]},{type:"K8s",name:"Schedule",url:"/k8s/schedule",entityTypeId:"k8s_schedule",column:[{labelName:"Name",name:"name",type:"default"},{labelName:"Kind",name:"kind",type:"default"},{labelName:"Namespace Name",name:"namespace_name",type:"default"},{labelName:"Resource Name",name:"resource_name",type:"default"},{labelName:"Launch Template Name",name:"launch_template_name",type:"default"},{labelName:"State",name:"state",type:"default"},{labelName:"Start",name:"start_time",type:"default"},{labelName:"Stop",name:"stop_time",type:"default"},{labelName:"Created",name:"created",type:"datetime"}]}],d=t(8),p=t.n(d),y=t(11),b=t(0),f=function(){var e=function(){var e=Object(y.a)(p.a.mark((function e(a,t,n){var l,c,m,o,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=new FormData).append("grant_type","authorization_code"),l.append("client_id",t),l.append("client_secret","cloud_dashboard"),l.append("code",a),l.append("redirect_uri",n),e.next=8,fetch("/oauth/token",{method:"POST",body:l});case 8:if((c=e.sent).ok){e.next=11;break}throw new Error("Authorization failed");case 11:return e.next=13,c.json();case 13:if(!("access_token"in(m=e.sent))){e.next=23;break}o=m.access_token,r=m.refresh_token,s=(new Date).getTime()+1e3*m.expires_in,window.localStorage.setItem("accessToken",o),window.localStorage.setItem("refreshToken",r),window.localStorage.setItem("expiresDatetime","".concat(s)),e.next=24;break;case 23:throw new Error("Authorization failed");case 24:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.group("Authorization Code Grant");var a=window.localStorage.getItem("clientId"),t=window.localStorage.getItem("redirectUri");if(null===a||null==t)return console.log("Client ID : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=s);console.log("Client ID : Yes");var n=new URL(window.location.href).searchParams.get("code");if(null===n)return console.log("Authorization code : No"),console.error("Authorization failed."),console.groupEnd(),void(window.location.href=s);console.log("authorization code : Yes"),e(n,a,t).then((function(){console.log("Access token : Yes"),console.groupEnd(),window.location.href=s+"/aws_cloud/instance"})).catch((function(){console.log("Access token : No"),console.error("Authorization failed."),console.groupEnd(),window.location.href=s}))}),[]),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h2",{children:"Please waiting..."})})})},N=t(4),_=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),m=Object(N.a)(c,2),o=m[0],r=m[1],s=function(){var e=Object(y.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/jsonapi/consumer/consumer");case 2:return e.next=4,e.sent.json();case 4:a=e.sent,(t=a.data.filter((function(e){return"Cloud Dashboard"===e.attributes.label}))).length>=1&&(l(t[0].id),r(t[0].attributes.redirect));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(n.useEffect)((function(){window.localStorage.setItem("clientId",t)}),[t]),Object(n.useEffect)((function(){window.localStorage.setItem("redirectUri",o)}),[o]),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("form",{children:Object(b.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(){var e="/oauth/authorize?response_type=code&client_id=".concat(t,"&redirect_uri=").concat(o);window.location.href=e},disabled:""===t,children:"login"})})})})},j=function(e){var a=e.menuType,t=e.menuName;Object(n.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),a=window.localStorage.getItem("expiresDatetime");null!==e&&null!=a?(new Date).getTime()>parseInt(a,10)&&(window.location.href=s):window.location.href=s}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:"nav nav-tabs",children:[Object(b.jsx)("li",{role:"presentation",className:"AWS"===a?"active":"",children:Object(b.jsx)("a",{href:"".concat(s,"/aws_cloud/instance"),children:"AWS"})}),Object(b.jsx)("li",{role:"presentation",className:"K8s"===a?"active":"",children:Object(b.jsx)("a",{href:"".concat(s).concat(u[0].url),children:"K8s"})})]}),Object(b.jsxs)("ul",{className:"nav nav-tabs",children:[("AWS"===a?i:u).map((function(e){return Object(b.jsx)("li",{role:"presentation",className:e.name===t?"active":"",children:Object(b.jsx)("a",{href:"".concat(s).concat(e.url),children:e.name})},e.name)})),Object(b.jsx)("li",{role:"presentation",children:Object(b.jsx)("a",{href:"#",onClick:function(){window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"),window.localStorage.removeItem("expiresDatetime"),window.location.href=s},children:"logout"})})]})]})},h=function(e){var a=e.cloudContext,t=e.setCloudContext,l=e.cloudConfigType,c=Object(n.useState)([]),m=Object(N.a)(c,2),o=m[0],r=m[1];return Object(n.useEffect)((function(){fetch("/jsonapi/cloud_config/".concat(l)).then((function(e){return e.json()})).then((function(e){var n=e.data.map((function(e){return e.attributes.cloud_context}));r(n),!n.includes(a)&&n.length>=1&&t(n[0])}))}),[]),Object(b.jsx)("select",{className:"form-select form-control",value:a,onChange:function(e){t(e.currentTarget.value)},children:o.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))})},v=t(9),C=function(e,a){return"000000".concat(e).slice(-a)},k=function(e,a){for(var t=1,n=0;n<a;n+=1)t*=10;if(Math.floor(e)!==e)return"".concat(Math.round(e*t)/t);var l="".concat(e);if(0!==a){l+=".";for(var c=0;c<a;c+=1)l+="0"}return l},g=function(e,a,t){if(null===e)return"";switch(a.type){case"datetime":return function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,l=a.getDate(),c=a.getHours(),m=a.getMinutes(),o="".concat(t,"/").concat(C(n,2),"/").concat(C(l,2));return o+" - ".concat(C(c,2),":").concat(C(m,2))}(e);case"memory":return e>=1073741824?"".concat(k(e/1073741824,2),"Gi"):e>=1048576?"".concat(k(e/1048576,2),"Mi"):e>=1024?"".concat(k(e/1024,2),"Ki"):k(e,2);case"key-value":var n,l=[],c=Object(v.a)(e);try{for(c.s();!(n=c.n()).done;){var m=n.value;l.push("".concat(m.item_key,":").concat(m.item_value))}}catch(i){c.e(i)}finally{c.f()}return l.join(", ");case"cost":return"$".concat(e);case"boolean":return e?a.value[0]:a.value[1];case"array":return e.map((function(e){return"".concat(e)})).join(", ");case"join":var o,r=Object(v.a)(t[a.info.entityTypeId]);try{for(r.s();!(o=r.n()).done;){var s=o.value;if(s.attributes[a.info.keyColumn]===e)return s.attributes[a.info.valueColumn]}}catch(i){r.e(i)}finally{r.f()}return"(".concat(e,")");default:return e}},I=function(e){var a=e.entityTypeId,t=e.column,l=e.cloudContext,c=e.namespace,m=e.namespaceName,o=e.sortInfo,r=e.setSortInfo,s=e.pageIndex,i=Object(n.useState)([]),u=Object(N.a)(i,2),d=u[0],f=u[1],_=Object(n.useState)([]),j=Object(N.a)(_,2),h=j[0],C=j[1];return Object(n.useEffect)((function(){var e="/jsonapi/".concat(a,"/").concat(a),t=[];t.push({key:"page[limit]",value:"".concat(30)}),t.push({key:"page[offset]",value:"".concat(30*s)}),""!==c&&t.push({key:"filter[namespace]",value:c}),""!==m&&t.push({key:"filter[namespace_name]",value:m}),""!==l&&t.push({key:"filter[cloud_context]",value:l}),""!==o.key&&t.push("ASC"===o.direction?{key:"sort",value:o.key}:{key:"sort",value:"-"+o.key}),t.length>0&&(e+="?"+t.map((function(e){return e.key+"="+e.value})).join("&")),fetch(e).then((function(e){return e.json()})).then((function(e){f(e.data)}))}),[c,m,l,o,s]),Object(n.useEffect)((function(){(function(){var e=Object(y.a)(p.a.mark((function e(){var a,n,l,c,m,o,r,s,i,u,y,b,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={},n=Object(v.a)(t),e.prev=2,n.s();case 4:if((l=n.n()).done){e.next=15;break}if("join"!==(c=l.value).type||c.info.entityTypeId in a){e.next=13;break}return e.next=9,fetch("/jsonapi/".concat(c.info.entityTypeId,"/").concat(c.info.entityTypeId));case 9:return e.next=11,e.sent.json();case 11:m=e.sent.data,a[c.info.entityTypeId]=m;case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:o=[],r=Object(v.a)(d);try{for(r.s();!(s=r.n()).done;){i=s.value,u={id:i.id,attributes:{}},y=Object(v.a)(t);try{for(y.s();!(b=y.n()).done;)f=b.value,u.attributes[f.name]=g(i.attributes[f.name],f,a)}catch(p){y.e(p)}finally{y.f()}o.push(u)}}catch(p){r.e(p)}finally{r.f()}C(o);case 27:case"end":return e.stop()}}),e,null,[[2,17,20,23]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(b.jsxs)("table",{className:"table table-hover table-striped sticky-enabled sticky-table",children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("input",{type:"checkbox",className:"form-checkbox",title:"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u3059\u3079\u3066\u306e\u5217\u3092\u9078\u629e\u3059\u308b"})}),t.map((function(e){return Object(b.jsxs)("th",{onClick:function(){return a=e.name,void(o.key===a?"ASC"!==o.direction?r({key:"",direction:"ASC"}):r({key:a,direction:"DESC"}):r({key:a,direction:"ASC"}));var a},children:[e.labelName,o.key===e.name&&"ASC"===o.direction?"\u2191":o.key===e.name&&"DESC"===o.direction?"\u2193":""]},e.name)}))]}),Object(b.jsx)("tbody",{children:h.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{className:"form-checkbox",type:"checkbox"})}),t.map((function(a){return Object(b.jsx)("td",{children:e.attributes[a.name]},a.name)}))]},e.id)}))})]})},x=function(e){var a=e.cloudContext,t=e.columnKey,l=e.columnName,c=e.setColumnName,m=e.cloudConfigType,o=Object(n.useState)([]),r=Object(N.a)(o,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){var e="/jsonapi/".concat(m,"_").concat(t,"/").concat(m,"_").concat(t);""!==a&&(e+="?cloudContext=".concat(a)),fetch(e).then((function(e){return e.json()})).then((function(e){i(e.data.map((function(e){return e.attributes.name})))}))}),[a]),Object(b.jsxs)("select",{className:"form-select form-control",value:l,onChange:function(e){c(e.currentTarget.value)},children:[Object(b.jsx)("option",{value:"",children:"- \u3059\u3079\u3066 -"}),s.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})},O=function(e){var a=e.cloudContext,t=e.entityTypeId,l=e.namespace,c=e.namespaceName,m=e.itemCount,o=e.setItemCount,r=e.cloudConfigType;return Object(n.useEffect)((function(){if(""===a)o(0);else{var e="/cloud_dashboard/".concat(r,"/").concat(a,"/").concat(t,"/entity/count");""!==l&&(e+="?namespace=".concat(l)),""!==c&&(e+="?namespace_name=".concat(c)),fetch(e).then((function(e){return e.json()})).then((function(e){o(e.count)}))}}),[a,l,c]),Object(b.jsxs)("label",{className:"control-label",children:["Item Count: ",m]})},w=function(e){var a=e.pageIndex,t=e.setPageIndex,n=e.itemCount,l=Math.floor(1*(n+30-1)/30);return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"pagination",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#","aria-label":"\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(0)},children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#","aria-label":"\u524d\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(Math.max(0,a-1))},children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\uff1c"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:a+1})}),Object(b.jsx)("li",{className:a!==l-1?"":"disabled",children:Object(b.jsx)("a",{href:"#","aria-label":"\u6b21\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(Math.min(a+1,l-1))},children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\uff1e"})})}),Object(b.jsx)("li",{className:0!==n&&a!==l-1?"":"disabled",children:Object(b.jsx)("a",{href:"#","aria-label":"\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3078",onClick:function(){t(l-1)},children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})},T=function(e){var a=e.entityTypeId,t=e.column,l=e.cloudConfigType,c=Object(n.useState)(""),m=Object(N.a)(c,2),o=m[0],r=m[1],s=Object(n.useState)(""),i=Object(N.a)(s,2),u=i[0],d=i[1],p=Object(n.useState)(""),y=Object(N.a)(p,2),f=y[0],_=y[1],j=Object(n.useState)(0),v=Object(N.a)(j,2),C=v[0],k=v[1],g=Object(n.useState)({key:"",direction:"ASC"}),T=Object(N.a)(g,2),S=T[0],P=T[1],A=Object(n.useState)(0),K=Object(N.a)(A,2),D=K[0],R=K[1];Object(n.useEffect)((function(){""!==u&&_("")}),[u]),Object(n.useEffect)((function(){""!==f&&d("")}),[f]);var E=t.map((function(e){return e.labelName})).includes("Namespace"),z=t.map((function(e){return e.labelName})).includes("Namespace Name");return Object(b.jsx)("div",{className:"row",style:{marginTop:"2rem"},children:Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"control-label",children:"Cloud context"}),Object(b.jsx)(h,{cloudContext:o,setCloudContext:r,cloudConfigType:l})]}),E?Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"control-label",children:"Namespace"}),Object(b.jsx)(x,{cloudContext:o,columnKey:"namespace",columnName:u,setColumnName:d,cloudConfigType:l})]}):Object(b.jsx)(b.Fragment,{}),z?Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"control-label",children:"Namespace Name"}),Object(b.jsx)(x,{cloudContext:o,columnKey:"namespace_name",columnName:f,setColumnName:_,cloudConfigType:l})]}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)(O,{cloudContext:o,entityTypeId:a,namespace:u,namespaceName:f,itemCount:C,setItemCount:k,cloudConfigType:l})}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsx)(I,{entityTypeId:a,column:t,cloudContext:o,namespace:u,namespaceName:f,sortInfo:S,setSortInfo:P,pageIndex:D})}),Object(b.jsx)(w,{pageIndex:D,setPageIndex:R,itemCount:C})]})})})},S=function(){return Object(b.jsx)(o.a,{basename:s,children:Object(b.jsxs)(r.c,{children:[i.map((function(e){return Object(b.jsx)(r.a,{exact:!0,path:e.url,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j,{menuType:"AWS",menuName:e.name}),Object(b.jsx)(T,{entityTypeId:e.entityTypeId,column:e.column,cloudConfigType:"aws_cloud"})]})},e.name)})),Object(b.jsx)(r.a,{exact:!0,path:"/callback",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(f,{})})}),u.map((function(e){return Object(b.jsx)(r.a,{exact:!0,path:e.url,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j,{menuType:"K8s",menuName:e.name}),Object(b.jsx)(T,{entityTypeId:e.entityTypeId,column:e.column,cloudConfigType:"k8s"})]})},e.name)})),Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(_,{})})})]})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,m=a.getTTFB;t(e),n(e),l(e),c(e),m(e)}))};m.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),P()}},[[33,1,2]]]);
//# sourceMappingURL=main.4f78f4a2.chunk.js.map