"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[433],{7433:function(e,t,s){s.r(t),s.d(t,{default:function(){return U}});var a=s(3396),r=s(7139);const c={class:"container py-5"},l=(0,a._)("h1",{class:"mt-5"}," 員工資料 ",-1),n=(0,a._)("hr",null,null,-1),o={class:"row"},u={class:"col-md-12"},d={class:"card"},i=(0,a._)("div",{class:"card-header"}," 員工資料表 ",-1),h={class:"card-body"},p={class:"table table-striped"},_=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"#"),(0,a._)("th",{scope:"col"},"Staff Account"),(0,a._)("th",{scope:"col"},"Staff Email"),(0,a._)("th",{scope:"col"},"Staff Created At time"),(0,a._)("th",{scope:"col"},"Staff Updated At time")])],-1),f=["index"],g={scope:"row"};function v(e,t,s,v,w,y){const b=(0,a.up)("NavTabs");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(b),l,n,(0,a._)("div",o,[(0,a._)("div",u,[(0,a._)("div",d,[i,(0,a._)("div",h,[(0,a._)("table",p,[_,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.users,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id,index:t++},[(0,a._)("th",g,(0,r.zw)(t),1),(0,a._)("td",null,(0,r.zw)(e.account),1),(0,a._)("td",null,(0,r.zw)(e.email),1),(0,a._)("td",null,(0,r.zw)(e.createdAt),1),(0,a._)("td",null,(0,r.zw)(e.updatedAt),1)],8,f)))),128))])])])])])])])}var w=s(7574),y=s(8390),b=s(6163),m={name:"App",setup(){},components:{NavTabs:w.Z},data(){return{users:[]}},created(){const{page:e=""}=this.$route.query;this.fetchUsers({queryPage:e})},beforeRouteUpdate(e,t,s){const{page:a=""}=e.query;this.fetchUsers({queryPage:a}),s()},methods:{async fetchUsers({queryPage:e}){try{const t=await y.Z.getUsers({page:e}),{users:s,page:a,totalPage:r,prev:c,next:l}=t.data;this.users=s,this.currentPage=a,this.totalPage=r,this.previousPage=c,this.nextPage=l}catch(t){console.log("error",t),b.F.fire({icon:"error",title:"無法取得員工資料，請稍後再試"})}}}},P=s(89);const A=(0,P.Z)(m,[["render",v]]);var U=A}}]);
//# sourceMappingURL=433.08a49a4b.js.map