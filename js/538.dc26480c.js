"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[538],{538:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(3396),l=n(7139);const c={class:"container py-5 mt-3"},i={class:"row"},s={class:"col-md-12"},d={class:"badge badge-secondary mt-1 mb-3"},r={class:"col-md-4"},o=["src"],m={class:"well"},u={class:"list-unstyled"},p=(0,a._)("strong",null,"Description:",-1),g=(0,a._)("strong",null,"Email:",-1),_=(0,a._)("strong",null,"Tel:",-1),f={class:"col-md-8"},h=(0,a._)("hr",null,null,-1);function b(e,t,n,b,y,v){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",i,[(0,a._)("div",s,[(0,a._)("h1",null,(0,l.zw)(y.attendance.name),1),(0,a._)("span",d,(0,l.zw)(y.attendance.categoryName),1)]),(0,a._)("div",r,[(0,a._)("img",{class:"img-responsive center-block",src:y.attendance.image||e.emptyImage,alt:"staff image",style:{width:"250px","margin-bottom":"25px"}},null,8,o)]),(0,a._)("div",m,[(0,a._)("ul",u,[(0,a._)("li",null,[p,(0,a.Uk)(" "+(0,l.zw)(y.attendance.description),1)]),(0,a._)("li",null,[g,(0,a.Uk)(" "+(0,l.zw)(y.attendance.email),1)]),(0,a._)("li",null,[_,(0,a.Uk)(" "+(0,l.zw)(y.attendance.tel),1)])])]),(0,a._)("div",f,[(0,a._)("p",null,(0,l.zw)(y.attendance.description),1)])]),h,(0,a._)("button",{type:"button",class:"btn btn-link",onClick:t[0]||(t[0]=t=>e.$router.back())}," 回上一頁 ")])}const y={filters:{emptyImage(e){return e||"https://reurl.cc/Yd58b4"}}},v={attendance:{id:1,name:"Elliot",tel:"0958-898-555",email:"elliotcs30@gmail.com",description:"Never Stop Developing",image:"https://reurl.cc/Yd58b4",createdAt:"2023-01-01T00:00:00",updatedAt:"2023-01-01T00:00:00",CategoryId:1,Category:{id:1,name:"Staff",createdAt:"2023-01-01T00:00:00",updatedAt:"2023-01-01T00:00:00"}}};var w={name:"AdminAttendance",mixins:[y],data(){return{attendance:{id:-1,name:"",tel:"",email:"",image:"",description:"",categoryName:""}}},mounted(){const{id:e}=this.$route.params;this.fetchAttendance(e)},methods:{fetchAttendance(){const{attendance:e}=v;this.attendance={...this.attendance,id:e.id,name:e.name,tel:e.tel,email:e.email,image:e.image,description:e.description,categoryName:e.Category.name}}}},k=n(89);const A=(0,k.Z)(w,[["render",b]]);var z=A}}]);
//# sourceMappingURL=538.dc26480c.js.map