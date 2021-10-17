(this.webpackJsonpwisjs=this.webpackJsonpwisjs||[]).push([[0],{133:function(e,n,t){},134:function(e,n,t){},141:function(e,n,t){},142:function(e,n,t){},149:function(e,n,t){},150:function(e,n,t){},152:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(21),o=t.n(c),i=(t(133),t(207)),s=(t(134),t(23)),u=function(){return Object(s.d)()},l=s.e,d=t(80),j=t(111),h=t(76),b=t(33),p=Object(h.a)({reducerPath:"seasonalJobsSearchApi",baseQuery:Object(b.d)({baseUrl:"https://morning-tor-41184.herokuapp.com/https://seasonaljobs.dol.gov/datahub/search"}),endpoints:function(e){return{getSeasonalJobs:e.query({query:function(e){return{url:"?api-version=".concat(e.version),method:"POST",body:{search:"/.*".concat(e.search,"~.*/"),searchFields:e.searchType.join(", "),top:1e3,skip:0,queryType:"simple",searchMode:"any",count:!0,filter:"active eq true and display eq true and work_hour_num_basic le ".concat(e.hours," and emp_exp_num_months le ").concat(e.requiredExperience," ").concat(e.includeAgricultural?"":"and visa_class eq 'H-2B'").concat(e.includeNonagricultural?"":"and visa_class eq 'H-2A'"," and geo.intersects(coord, geography'POLYGON((").concat(e.mapBounds.nw.lng," ").concat(e.mapBounds.nw.lat,", ").concat(e.mapBounds.sw.lng," ").concat(e.mapBounds.sw.lat,", ").concat(e.mapBounds.se.lng," ").concat(e.mapBounds.se.lat,", ").concat(e.mapBounds.ne.lng," ").concat(e.mapBounds.ne.lat,", ").concat(e.mapBounds.nw.lng," ").concat(e.mapBounds.nw.lat,"))')"),scoringProfile:"test_profile",facets:["job_title, count:4, sort:count"],orderby:"search.score() desc"}}}})}}}),m=p.useGetSeasonalJobsQuery,O=(t(141),t(8)),g=Object(O.createSlice)({name:"map",initialState:{center:{lat:40.51367862028704,lng:-100.98148879287625},bounds:{ne:{lat:40.51367862028704,lng:-100.98148879287625},nw:{lat:57.0406435823742,lng:-168.48148879287626},se:{lat:18.64609491842107,lng:-33.48148879287626},sw:{lat:18.64609491842107,lng:-168.48148879287626}},zoom:4},reducers:{setMapZoom:function(e,n){e.zoom=n.payload},setMapBounds:function(e,n){e.bounds=n.payload},setMapCenter:function(e,n){e.center=n.payload}}}),f=g.actions,x=f.setMapZoom,v=f.setMapBounds,y=(f.setMapCenter,g.reducer),w=t(4),_=t(62),S=t(103),T=(t(142),t(107)),B=t.n(T),C=t(212),k=t(44),q=t(5),N=t(86),E=t(221),A=t(2),z=["className"],M=Object(q.a)((function(e){var n=e.className,t=Object(S.a)(e,z);return Object(A.jsx)(C.a,Object(_.a)(Object(_.a)({},t),{},{classes:{popper:n}}))}))((function(e){var n,t=e.theme;return n={},Object(w.a)(n,"& .".concat(k.a.arrow),{color:t.palette.common.white}),Object(w.a)(n,"& .".concat(k.a.tooltip),{backgroundColor:t.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:t.shadows[1],fontSize:11}),n}));function P(e){var n=l((function(e){return e.map.zoom})),t=function(e,n,t,a,r){return(e-n)*(r-a)/(t-n)+a},a=t(n,4,10,.5,1.5).toString()+"em",r=(t(n,4,10,.5,1.5)+.2).toString()+"em";return Object(A.jsx)(M,{placement:"right-start",arrow:!0,title:Object(A.jsxs)(i.a,{direction:"column",children:[Object(A.jsx)(N.a,{variant:"h6",children:e.job.job_title}),Object(A.jsx)(N.a,{variant:"subtitle2",children:"Pay:"}),Object(A.jsxs)(N.a,{children:["$",e.job.basic_rate_from,"-$",e.job.basic_rate_to]}),Object(A.jsx)(N.a,{variant:"subtitle2",children:"Dates:"}),Object(A.jsxs)(N.a,{children:[new Date(e.job.begin_date).toLocaleDateString()," - ",new Date(e.job.end_date).toLocaleDateString()]}),Object(A.jsx)(N.a,{variant:"subtitle2",children:"Hours:"}),Object(A.jsxs)(N.a,{children:[e.job.hourly_work_schedule_am," - ",e.job.hourly_work_schedule_pm]}),Object(A.jsx)(E.a,{variant:"contained",sx:{marginTop:"1vh",marginBottom:"1vh",marginRight:"50%",maxWidth:"30%"},children:"Apply"})]}),children:Object(A.jsx)(B.a,{sx:{color:"#1565C0",transform:"translate(-50%, -50%)",height:e.$hover?r:a,width:e.$hover?r:a}})})}function D(e){var n=u(),t={search:l((function(e){return e.searchBar.search})),version:"2020-06-30",searchType:l((function(e){return e.searchBar.searchType})),requiredExperience:l((function(e){return e.advancedOptions.requiredExperience})),includeAgricultural:l((function(e){return e.advancedOptions.agricultural})),includeNonagricultural:l((function(e){return e.advancedOptions.nonagricultural})),hours:l((function(e){return e.advancedOptions.hours})),mapBounds:l((function(e){return e.map.bounds}))},a=m(t.search?t:d.skipToken);return Object(A.jsx)("div",{className:"map",children:Object(A.jsx)("div",{className:"google-map",children:Object(A.jsx)(j.a,{bootstrapURLKeys:{key:"AIzaSyA-3X7TKl4j6TA0jrbvrDhTg4MiqUZbs7w"},defaultCenter:e.center,defaultZoom:e.defaultZoom,onChange:function(e){return function(e){n(x(e.zoom)),n(v(e.bounds))}(e)},children:a.data?a.data.value.flatMap((function(e){return e.coord?[Object(A.jsx)(P,{lat:e.coord.coordinates[1],lng:e.coord.coordinates[0],job:e},e.case_id)]:[]})):null})})})}var L=t(222),J=t(216),W=t(209),F=t(210),H=t(112);function Z(e){var n=e.index,t=e.style;return Object(A.jsx)(J.a,{style:t,component:"div",disablePadding:!0,children:Object(A.jsx)(W.a,{children:Object(A.jsx)(F.a,{primary:"Item ".concat(n+1)})})},n)}function I(){var e={search:l((function(e){return e.searchBar.search})),version:"2020-06-30",searchType:l((function(e){return e.searchBar.searchType})),requiredExperience:l((function(e){return e.advancedOptions.requiredExperience})),includeAgricultural:l((function(e){return e.advancedOptions.agricultural})),includeNonagricultural:l((function(e){return e.advancedOptions.nonagricultural})),hours:l((function(e){return e.advancedOptions.hours})),mapBounds:l((function(e){return e.map.bounds}))};m(e.search?e:d.skipToken);return Object(A.jsx)(L.a,{sx:{width:"25vw",height:"82vh",bgcolor:"background.paper"},children:Object(A.jsx)(H.a,{height:593,width:"35vw",itemSize:110,itemCount:200,overscanCount:5,children:Z})})}t(149);var K=t(14),Q=(t(150),t(223)),R=t(217),U=t(214),$=t(218),G=t(219),V=Object(O.createSlice)({name:"searchType",initialState:{searchType:["job_title"],search:""},reducers:{setSearchType:function(e,n){e.searchType=n.payload},setSearch:function(e,n){e.search=n.payload}}}),X=V.actions,Y=X.setSearchType,ee=X.setSearch,ne=V.reducer;var te=function(){var e=u(),n=l((function(e){return e.searchBar.searchType})),t=Object(a.useState)(""),r=Object(K.a)(t,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){return e(ee(c))}),500);return function(){return clearTimeout(n)}}),[c]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(Q.a,{className:"search-select",sx:{minWidth:"30%",maxWidth:"30%"},children:[Object(A.jsx)(R.a,{children:"Search type"}),Object(A.jsxs)(U.a,{multiple:!0,value:n,label:"Search type",size:"small",onChange:function(n){return e(Y(n.target.value))},children:[Object(A.jsx)($.a,{value:"job_title",children:"Job Title"}),Object(A.jsx)($.a,{value:"soc_title",children:"Standard Occupational Classification Title"}),Object(A.jsx)($.a,{value:"employer_business_name",children:"Employer Business Name"}),Object(A.jsx)($.a,{value:"employer_trade_name",children:"Employer Trade Name"}),Object(A.jsx)($.a,{value:"job_duties",children:"Job Duties"}),Object(A.jsx)($.a,{value:"soc_code_id",children:"Job ID"}),Object(A.jsx)($.a,{value:"case_number",children:"Case Number"})]})]}),Object(A.jsx)(G.a,{onChange:function(e){return function(e){o(e.target.value)}(e)},variant:"outlined",size:"small",className:"search-input",sx:{backgroundColor:"white",minWidth:"40%"}})]})},ae=t(108),re=t(226),ce=t(227),oe=t(213),ie=t(215),se=Object(O.createSlice)({name:"advancedOptions",initialState:{agricultural:!0,nonagricultural:!0,requiredExperience:0,hours:50},reducers:{toggleAgricultural:function(e){e.agricultural=!e.agricultural},toggleNonagricultural:function(e){e.nonagricultural=!e.nonagricultural},setRequiredExperience:function(e,n){e.requiredExperience=n.payload},setHours:function(e,n){e.hours=n.payload}}}),ue=se.actions,le=ue.toggleAgricultural,de=ue.toggleNonagricultural,je=ue.setRequiredExperience,he=ue.setHours,be=se.reducer;function pe(){var e=a.useState(null),n=Object(K.a)(e,2),t=n[0],r=n[1],c=Boolean(t),o=u(),s=l((function(e){return e.advancedOptions.agricultural})),d=l((function(e){return e.advancedOptions.nonagricultural})),j=l((function(e){return e.advancedOptions.requiredExperience})),h=l((function(e){return e.advancedOptions.hours}));return Object(A.jsxs)("div",{children:[Object(A.jsx)(E.a,{sx:{marginLeft:"15%",minWidth:"100%"},id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:function(e){r(e.currentTarget)},children:"Advanced Options"}),Object(A.jsxs)(ae.a,{id:"basic-menu",anchorEl:t,open:c,onClose:function(){r(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(A.jsx)($.a,{children:Object(A.jsxs)(re.a,{sx:{display:"inline"},children:[Object(A.jsx)(ce.a,{control:Object(A.jsx)(oe.a,{onChange:function(){return o(le())},checked:s}),label:"Agricultural"}),Object(A.jsx)(ce.a,{control:Object(A.jsx)(oe.a,{onChange:function(){return o(de())},checked:d}),label:"Non-Agricultural"})]})}),Object(A.jsx)($.a,{children:Object(A.jsxs)(i.a,{direction:"column",sx:{minWidth:"100%"},children:[Object(A.jsx)(N.a,{children:" Months Experience "}),Object(A.jsx)(ie.a,{onChangeCommitted:function(e,n){return o(je(n))},defaultValue:j,max:24,size:"small",valueLabelDisplay:"auto","aria-label":"slider-experience-required"})]})}),Object(A.jsx)($.a,{children:Object(A.jsxs)(i.a,{direction:"column",sx:{minWidth:"100%"},children:[Object(A.jsx)(N.a,{children:"Hours per Week"}),Object(A.jsx)(ie.a,{onChangeCommitted:function(e,n){return o(he(n))},defaultValue:h,max:50,size:"small",valueLabelDisplay:"auto","aria-label":"slider-hours"})]})})]})]})}var me=function(){return Object(A.jsxs)("div",{className:"search-panel",children:[Object(A.jsx)(te,{}),Object(A.jsx)(pe,{})]})};var Oe,ge=function(){var e=l((function(e){return e.map.center})),n=l((function(e){return e.map.zoom}));return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(me,{}),Object(A.jsxs)(i.a,{direction:"row",children:[Object(A.jsx)(I,{}),Object(A.jsx)(D,{center:e,defaultZoom:n})]})]})},fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,228)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))},xe=Object(h.a)({reducerPath:"keysApi",baseQuery:Object(b.d)({baseUrl:"https://puddleglum56.github.io/wemapi/"}),endpoints:function(e){return{getKeys:e.query({query:function(){return"keys.json"}})}}}),ve=(xe.useGetKeysQuery,Object(O.configureStore)({reducer:(Oe={searchBar:ne,advancedOptions:be,map:y},Object(w.a)(Oe,xe.reducerPath,xe.reducer),Object(w.a)(Oe,p.reducerPath,p.reducer),Oe),middleware:function(e){return e().concat(xe.middleware,p.middleware)}}));o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(s.a,{store:ve,children:Object(A.jsx)(ge,{})})}),document.getElementById("root")),fe()}},[[152,1,2]]]);
//# sourceMappingURL=main.03580b0a.chunk.js.map