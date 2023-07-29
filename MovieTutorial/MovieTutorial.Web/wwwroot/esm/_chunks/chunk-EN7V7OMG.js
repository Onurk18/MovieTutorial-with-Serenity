import{a as s,c as i,e as x,f as n,g as H}from"./chunk-FEDAVPE7.js";var g=class{};s(g,"LanguageColumns"),g.columnsKey="Administration.Language";var v=i(n(),1);var m=class{static getLookup(){return(0,v.getLookup)("Administration.Language")}static getLookupAsync(){return x(this,null,function*(){return(0,v.getLookupAsync)("Administration.Language")})}};s(m,"LanguageRow"),m.idProperty="Id",m.nameProperty="LanguageName",m.localTextPrefix="Administration.Language",m.lookupKey="Administration.Language",m.deletePermission="Administration:Translation",m.insertPermission="Administration:Translation",m.readPermission="Administration:Translation",m.updatePermission="Administration:Translation",m.Fields=(0,v.fieldsProxy)();var X=i(n(),1),Q;(e=>(e.baseUrl="Administration/Language",e.Methods={Create:"Administration/Language/Create",Update:"Administration/Language/Update",Delete:"Administration/Language/Delete",Retrieve:"Administration/Language/Retrieve",List:"Administration/Language/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(a,p,o){return(0,X.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(Q||(Q={}));var U=class{};s(U,"RoleColumns"),U.columnsKey="Administration.Role";var S=i(n(),1);var u=class{static getLookup(){return(0,S.getLookup)("Administration.Role")}static getLookupAsync(){return x(this,null,function*(){return(0,S.getLookupAsync)("Administration.Role")})}};s(u,"RoleRow"),u.idProperty="RoleId",u.nameProperty="RoleName",u.localTextPrefix="Administration.Role",u.lookupKey="Administration.Role",u.deletePermission="Administration:Security",u.insertPermission="Administration:Security",u.readPermission="Administration:Security",u.updatePermission="Administration:Security",u.Fields=(0,S.fieldsProxy)();var k=i(n(),1),T;(e=>(e.baseUrl="Administration/Role",e.Methods={Create:"Administration/Role/Create",Update:"Administration/Role/Update",Delete:"Administration/Role/Delete",Retrieve:"Administration/Role/Retrieve",List:"Administration/Role/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(a,p,o){return(0,k.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(T||(T={}));var K=i(n(),1),h;(e=>(e.baseUrl="Administration/Translation",e.Methods={List:"Administration/Translation/List",Update:"Administration/Translation/Update"},["List","Update"].forEach(t=>{e[t]=function(a,p,o){return(0,K.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(h||(h={}));var b=class{};s(b,"UserColumns"),b.columnsKey="Administration.User";var A=i(n(),1);var c=class{static getLookup(){return(0,A.getLookup)("Administration.User")}static getLookupAsync(){return x(this,null,function*(){return(0,A.getLookupAsync)("Administration.User")})}};s(c,"UserRow"),c.idProperty="UserId",c.isActiveProperty="IsActive",c.nameProperty="Username",c.localTextPrefix="Administration.User",c.lookupKey="Administration.User",c.deletePermission="Administration:Security",c.insertPermission="Administration:Security",c.readPermission="Administration:Security",c.updatePermission="Administration:Security",c.Fields=(0,A.fieldsProxy)();var C=i(n(),1),N;(e=>(e.baseUrl="Administration/User",e.Methods={Create:"Administration/User/Create",Update:"Administration/User/Update",Delete:"Administration/User/Delete",Retrieve:"Administration/User/Retrieve",List:"Administration/User/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(a,p,o){return(0,C.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(N||(N={}));var O=i(H(),1),M=i(n(),1);var L=class extends O.PrefixedContext{constructor(d){if(super(d),!L.init){L.init=!0;var e=O.StringEditor;(0,M.initFormType)(L,["LanguageId",e,"LanguageName",e])}}},I=L;s(I,"LanguageForm"),I.formKey="Administration.Language";var F;(t=>(t.BackgroundJob="Administration:BackgroundJob",t.Security="Administration:Security",t.Translation="Administration:Translation"))(F||(F={}));var E=i(H(),1),B=i(n(),1);var q=class extends E.PrefixedContext{constructor(d){if(super(d),!q.init){q.init=!0;var e=E.StringEditor;(0,B.initFormType)(q,["RoleName",e])}}},D=q;s(D,"RoleForm"),D.formKey="Administration.Role";var G=i(n(),1);var y=class{};s(y,"RolePermissionRow"),y.idProperty="RolePermissionId",y.nameProperty="PermissionKey",y.localTextPrefix="Administration.RolePermission",y.deletePermission="Administration:Security",y.insertPermission="Administration:Security",y.readPermission="Administration:Security",y.updatePermission="Administration:Security",y.Fields=(0,G.fieldsProxy)();var z=i(n(),1),j;(e=>(e.baseUrl="Administration/RolePermission",e.Methods={Update:"Administration/RolePermission/Update",List:"Administration/RolePermission/List"},["Update","List"].forEach(t=>{e[t]=function(a,p,o){return(0,z.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(j||(j={}));var l=i(H(),1),V=i(n(),1);var P=class extends l.PrefixedContext{constructor(d){if(super(d),!P.init){P.init=!0;var e=l.StringEditor,t=l.EmailAddressEditor,a=l.LookupEditor,p=l.ImageUploadEditor,o=l.PasswordEditor;(0,V.initFormType)(P,["Username",e,"DisplayName",e,"Email",t,"Roles",a,"UserImage",p,"Password",o,"PasswordConfirm",o,"Source",e])}}},J=P;s(J,"UserForm"),J.formKey="Administration.User";var W=i(n(),1);var f=class{};s(f,"UserPermissionRow"),f.idProperty="UserPermissionId",f.nameProperty="PermissionKey",f.localTextPrefix="Administration.UserPermission",f.deletePermission="Administration:Security",f.insertPermission="Administration:Security",f.readPermission="Administration:Security",f.updatePermission="Administration:Security",f.Fields=(0,W.fieldsProxy)();var Z=i(n(),1),Y;(e=>(e.baseUrl="Administration/UserPermission",e.Methods={Update:"Administration/UserPermission/Update",List:"Administration/UserPermission/List",ListRolePermissions:"Administration/UserPermission/ListRolePermissions",ListPermissionKeys:"Administration/UserPermission/ListPermissionKeys"},["Update","List","ListRolePermissions","ListPermissionKeys"].forEach(t=>{e[t]=function(a,p,o){return(0,Z.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(Y||(Y={}));var $=i(n(),1);var R=class{};s(R,"UserRoleRow"),R.idProperty="UserRoleId",R.localTextPrefix="Administration.UserRole",R.deletePermission="Administration:Security",R.insertPermission="Administration:Security",R.readPermission="Administration:Security",R.updatePermission="Administration:Security",R.Fields=(0,$.fieldsProxy)();var w=i(n(),1),_;(e=>(e.baseUrl="Administration/UserRole",e.Methods={Update:"Administration/UserRole/Update",List:"Administration/UserRole/List"},["Update","List"].forEach(t=>{e[t]=function(a,p,o){return(0,w.serviceRequest)(e.baseUrl+"/"+t,a,p,o)}})))(_||(_={}));export{g as a,I as b,m as c,Q as d,U as e,D as f,j as g,u as h,T as i,h as j,b as k,J as l,Y as m,c as n,N as o};
//# sourceMappingURL=chunk-EN7V7OMG.js.map