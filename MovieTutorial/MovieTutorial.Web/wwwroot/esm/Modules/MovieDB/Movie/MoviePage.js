import{e as v,f as d,g as i,h as a}from"../../../_chunks/chunk-QIE3LUQY.js";import{a as o,c as l,d as c,f,g}from"../../../_chunks/chunk-FEDAVPE7.js";var y=l(f(),1);var m=l(g(),1),p=l(f(),1);var u=l(g(),1);var s=class extends u.EntityDialog{constructor(){super(...arguments);this.form=new d(this.idPrefix)}getFormKey(){return d.formKey}getRowDefinition(){return i}getService(){return a.baseUrl}};o(s,"MovieDialog"),s=c([u.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],s);var n=class extends m.EntityGrid{getColumnsKey(){return v.columnsKey}getDialogType(){return s}getRowDefinition(){return i}getService(){return a.baseUrl}constructor(e){super(e)}getQuickSearchFields(){let e=o(r=>(0,p.text)(`Db.${i.localTextPrefix}.${r}`).toLowerCase(),"txt"),t=i.Fields;return[{name:"",title:"all"},{name:t.Description,title:e(t.Description)},{name:t.Storyline,title:e(t.Storyline)},{name:t.Year,title:e(t.Year)}]}getQuickFilters(){let e=super.getQuickFilters(),t=(0,p.first)(e,r=>r.field==i.Fields.GenreList);return t.handler=r=>{let w=r.request,x=r.widget.values;w.Genres=x.map(D=>parseInt(D,10)),r.handled=!0},e}};o(n,"MovieGrid"),n=c([m.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],n);function M(){(0,y.initFullHeightGridPage)(new n($("#GridDiv")).element)}o(M,"pageInit");export{M as default};
//# sourceMappingURL=MoviePage.js.map
