(this.webpackJsonpwisjs=this.webpackJsonpwisjs||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(120),a(121),a(97)),s=a(100),u=a(21),l=function(){return Object(u.d)()},d=u.e,j=a(71),b=a(28),h=Object(j.a)({reducerPath:"seasonalJobsSearchApi",baseQuery:Object(b.d)({baseUrl:"https://morning-tor-41184.herokuapp.com/https://seasonaljobs.dol.gov/datahub/search"}),endpoints:function(e){return{getSeasonalJobs:e.query({query:function(e){return{url:"?api-version=".concat(e.version),method:"POST",body:{search:"/.*".concat(e.search,"~.*/"),searchFields:e.searchType.join(", "),top:100,skip:0,queryType:"simple",searchMode:"any",count:!0,filter:"active eq true and display eq true and work_hour_num_basic le ".concat(e.hours," and emp_exp_num_months le ").concat(e.requiredExperience," ").concat(e.includeAgricultural?"":"and visa_class eq 'H-2B'").concat(e.includeNonagricultural?"":"and visa_class eq 'H-2A'"," and geo.intersects(coord, geography'POLYGON((").concat(e.mapBounds.nw.lng," ").concat(e.mapBounds.nw.lat,", ").concat(e.mapBounds.sw.lng," ").concat(e.mapBounds.sw.lat,", ").concat(e.mapBounds.se.lng," ").concat(e.mapBounds.se.lat,", ").concat(e.mapBounds.ne.lng," ").concat(e.mapBounds.ne.lat,", ").concat(e.mapBounds.nw.lng," ").concat(e.mapBounds.nw.lat,"))')"),scoringProfile:"test_profile",facets:["job_title, count:4, sort:count"],orderby:"search.score() desc"}}}})}}}),p=h.useGetSeasonalJobsQuery,m=(a(128),a(8)),O=Object(m.createSlice)({name:"map",initialState:{bounds:{ne:{lat:40.51367862028704,lng:-100.98148879287625},nw:{lat:57.0406435823742,lng:-168.48148879287626},se:{lat:18.64609491842107,lng:-33.48148879287626},sw:{lat:18.64609491842107,lng:-168.48148879287626}}},reducers:{setMapBounds:function(e,t){e.bounds=t.payload}}}),g=O.actions.setMapBounds,x=O.reducer,f=a(4),v=a(58),y=a(92),_=(a(129),a(96)),w=a.n(_),S=a(196),B=a(42),T=a(5),C=a(193),k=a(205),q=a(206),N=a(2),A=["className"],E=Object(T.a)((function(e){var t=e.className,a=Object(y.a)(e,A);return Object(N.jsx)(S.a,Object(v.a)(Object(v.a)({},a),{},{classes:{popper:t}}))}))((function(e){var t,a=e.theme;return t={},Object(f.a)(t,"& .".concat(B.a.arrow),{color:a.palette.common.white}),Object(f.a)(t,"& .".concat(B.a.tooltip),{backgroundColor:a.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:a.shadows[1],fontSize:11}),t}));function D(e){return Object(N.jsx)(E,{placement:"right-start",arrow:!0,title:Object(N.jsxs)(C.a,{direction:"column",children:[Object(N.jsx)(k.a,{variant:"h6",children:e.job.job_title}),Object(N.jsx)(k.a,{variant:"subtitle2",children:"Pay:"}),Object(N.jsxs)(k.a,{children:["$",e.job.basic_rate_from,"-$",e.job.basic_rate_to]}),Object(N.jsx)(k.a,{variant:"subtitle2",children:"Dates:"}),Object(N.jsxs)(k.a,{children:[new Date(e.job.begin_date).toLocaleDateString()," - ",new Date(e.job.end_date).toLocaleDateString()]}),Object(N.jsx)(k.a,{variant:"subtitle2",children:"Hours:"}),Object(N.jsxs)(k.a,{children:[e.job.hourly_work_schedule_am," - ",e.job.hourly_work_schedule_pm]}),Object(N.jsx)(q.a,{variant:"contained",sx:{marginTop:"1vh",marginBottom:"1vh",marginRight:"50%",maxWidth:"30%"},children:"Apply"})]}),children:Object(N.jsx)(w.a,{sx:{color:"#1565C0",transform:"translate(-50%, -50%)",height:e.$hover?"1.5em":"1em",width:e.$hover?"1.5em":"1em"}})})}function L(e){var t=l(),a={search:d((function(e){return e.searchBar.search})),version:"2020-06-30",searchType:d((function(e){return e.searchBar.searchType})),requiredExperience:d((function(e){return e.advancedOptions.requiredExperience})),includeAgricultural:d((function(e){return e.advancedOptions.agricultural})),includeNonagricultural:d((function(e){return e.advancedOptions.nonagricultural})),hours:d((function(e){return e.advancedOptions.hours})),mapBounds:d((function(e){return e.map.bounds}))},n=p(a.search?a:i.skipToken);return Object(N.jsx)("div",{className:"map",children:Object(N.jsx)("div",{className:"google-map",children:Object(N.jsx)(s.a,{bootstrapURLKeys:{key:"AIzaSyA-3X7TKl4j6TA0jrbvrDhTg4MiqUZbs7w"},defaultCenter:e.center,defaultZoom:e.defaultZoom,onChange:function(e){return t(g(e.bounds))},children:n.data?n.data.value.flatMap((function(e){return e.coord?[Object(N.jsx)(D,{lat:e.coord.coordinates[1],lng:e.coord.coordinates[0],job:e},e.case_id)]:[]})):null})})})}a(136),a(137);var P=a(209),W=a(202),J=a(199),M=a(200),F=a(203),z=Object(m.createSlice)({name:"searchType",initialState:{searchType:["job_title"],search:""},reducers:{setSearchType:function(e,t){e.searchType=t.payload},setSearch:function(e,t){e.search=t.payload}}}),H=z.actions,R=H.setSearchType,I=H.setSearch,K=z.reducer;var Q=function(){var e=l(),t=Object(n.useRef)(""),a=d((function(e){return e.searchBar.searchType}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(P.a,{className:"search-select",sx:{minWidth:"30%",maxWidth:"30%"},children:[Object(N.jsx)(W.a,{children:"Search type"}),Object(N.jsxs)(J.a,{multiple:!0,value:a,label:"Search type",size:"small",onChange:function(t){return e(R(t.target.value))},children:[Object(N.jsx)(M.a,{value:"job_title",children:"Job Title"}),Object(N.jsx)(M.a,{value:"soc_title",children:"Standard Occupational Classification Title"}),Object(N.jsx)(M.a,{value:"employer_business_name",children:"Employer Business Name"}),Object(N.jsx)(M.a,{value:"employer_trade_name",children:"Employer Trade Name"}),Object(N.jsx)(M.a,{value:"job_duties",children:"Job Duties"}),Object(N.jsx)(M.a,{value:"soc_code_id",children:"Job ID"}),Object(N.jsx)(M.a,{value:"case_number",children:"Case Number"})]})]}),Object(N.jsx)(F.a,{onChange:function(e){return t.current=e.target.value},variant:"outlined",size:"small",className:"search-input",sx:{backgroundColor:"white",minWidth:"40%"}}),Object(N.jsx)(q.a,{onClick:function(){return e(I(t.current))},variant:"contained",className:"search-button",sx:{marginLeft:"1vw",maxWidth:"5%"},children:"Search"})]})},U=a(14),Z=a(98),$=a(207),G=a(208),V=a(198),X=a(201),Y=Object(m.createSlice)({name:"advancedOptions",initialState:{agricultural:!0,nonagricultural:!0,requiredExperience:0,hours:50},reducers:{toggleAgricultural:function(e){e.agricultural=!e.agricultural},toggleNonagricultural:function(e){e.nonagricultural=!e.nonagricultural},setRequiredExperience:function(e,t){e.requiredExperience=t.payload},setHours:function(e,t){e.hours=t.payload}}}),ee=Y.actions,te=ee.toggleAgricultural,ae=ee.toggleNonagricultural,ne=ee.setRequiredExperience,re=ee.setHours,ce=Y.reducer;function oe(){var e=n.useState(null),t=Object(U.a)(e,2),a=t[0],r=t[1],c=Boolean(a),o=l(),i=d((function(e){return e.advancedOptions.agricultural})),s=d((function(e){return e.advancedOptions.nonagricultural})),u=d((function(e){return e.advancedOptions.requiredExperience})),j=d((function(e){return e.advancedOptions.hours}));return Object(N.jsxs)("div",{children:[Object(N.jsx)(q.a,{sx:{marginLeft:"15%",minWidth:"100%"},id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:function(e){r(e.currentTarget)},children:"Advanced Options"}),Object(N.jsxs)(Z.a,{id:"basic-menu",anchorEl:a,open:c,onClose:function(){r(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(N.jsx)(M.a,{children:Object(N.jsxs)($.a,{sx:{display:"inline"},children:[Object(N.jsx)(G.a,{control:Object(N.jsx)(V.a,{onChange:function(){return o(te())},checked:i}),label:"Agricultural"}),Object(N.jsx)(G.a,{control:Object(N.jsx)(V.a,{onChange:function(){return o(ae())},checked:s}),label:"Non-Agricultural"})]})}),Object(N.jsx)(M.a,{children:Object(N.jsxs)(C.a,{direction:"column",sx:{minWidth:"100%"},children:[Object(N.jsx)(k.a,{children:" Months Experience "}),Object(N.jsx)(X.a,{onChangeCommitted:function(e,t){return o(ne(t))},defaultValue:u,max:24,size:"small",valueLabelDisplay:"auto","aria-label":"slider-experience-required"})]})}),Object(N.jsx)(M.a,{children:Object(N.jsxs)(C.a,{direction:"column",sx:{minWidth:"100%"},children:[Object(N.jsx)(k.a,{children:"Hours per Week"}),Object(N.jsx)(X.a,{onChangeCommitted:function(e,t){return o(re(t))},defaultValue:j,max:50,size:"small",valueLabelDisplay:"auto","aria-label":"slider-hours"})]})})]})]})}var ie=function(){return Object(N.jsxs)("div",{className:"search-panel",children:[Object(N.jsx)(Q,{}),Object(N.jsx)(oe,{})]})};var se,ue=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ie,{}),Object(N.jsx)(L,{center:{lat:40.51367862028704,lng:-100.98148879287625},defaultZoom:4})]})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},de=Object(j.a)({reducerPath:"keysApi",baseQuery:Object(b.d)({baseUrl:"https://puddleglum56.github.io/wemapi/"}),endpoints:function(e){return{getKeys:e.query({query:function(){return"keys.json"}})}}}),je=(de.useGetKeysQuery,Object(m.configureStore)({reducer:(se={searchBar:K,advancedOptions:ce,map:x},Object(f.a)(se,de.reducerPath,de.reducer),Object(f.a)(se,h.reducerPath,h.reducer),se),middleware:function(e){return e().concat(de.middleware,h.middleware)}}));o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(u.a,{store:je,children:Object(N.jsx)(ue,{})})}),document.getElementById("root")),le()}},[[139,1,2]]]);
//# sourceMappingURL=main.e5cac7e4.chunk.js.map