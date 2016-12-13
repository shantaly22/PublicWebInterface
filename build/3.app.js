webpackJsonp([3],{547:function(e,t,a){try{(function(){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),r=l(s),n=(a(17),a(18)),i=r.default.createClass({displayName:"DatasetDetail",generateDatasetInfoDisplay:function(){return r.default.createElement(n.ListGroup,{className:"WellCatinfoList"},r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"Subject")," ",r.default.createElement(n.Label,null,this.props.dataset.subject)),r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"Publisher")," ",r.default.createElement(n.Label,null,this.props.dataset.publisher)),r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"License")," ",r.default.createElement(n.Label,null,this.props.dataset.license)),r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"Keywords"),this.props.dataset.keywords.split(",").map(function(e,t){return r.default.createElement(n.Label,{key:t},e)})),r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"Record ID")," ",r.default.createElement(n.Label,null,this.props.dataset.recordID)),r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"Publish Date")," ",r.default.createElement(n.Label,null,this.props.dataset.publishDate)),r.default.createElement(n.ListGroupItem,null,r.default.createElement("label",null,"Modified Date")," ",r.default.createElement(n.Label,null,this.props.dataset.modifiedDate)))},generateDatasetResourceDisplay:function(){var e,t=this.props.dataset.fileFolderURL;return e=this.props.dataset.resourceList.length>0?r.default.createElement("tbody",null,this.props.dataset.resourceList.map(function(e,a){return r.default.createElement("tr",{key:a},r.default.createElement("td",null,e.resourceName),r.default.createElement("td",null,r.default.createElement("span",{className:"badge"},e.format)),r.default.createElement("td",null,e.language),r.default.createElement("td",null,r.default.createElement(n.Button,{href:t+e.filePath,bsStyle:"success",target:"_blank"},"Download")))})):r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,"No data resource available."))),r.default.createElement(n.Panel,{className:"clickablePanel",bsStyle:"primary"},r.default.createElement("label",{htmlFor:"Resources"},"Resources"),r.default.createElement(n.Table,{bordered:!0},r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null,"Resource Name"),r.default.createElement("th",null,"Format"),r.default.createElement("th",null,"Language"),r.default.createElement("th",null,"Download"))),e))},render:function(){return""==this.props.dataset?r.default.createElement("div",{className:"faq-page",key:"faq"},r.default.createElement("div",{className:"page-header"},r.default.createElement("h1",null,"Dataset not found."))):r.default.createElement("div",{className:"faq-page",key:"faq"},r.default.createElement("div",{className:"page-header"},r.default.createElement("h1",null,this.props.dataset.title)),r.default.createElement(n.Well,null,r.default.createElement("span",{className:"glyphicon glyphicon-info-sign","aria-hidden":"true"})," ",this.props.dataset.description),this.generateDatasetInfoDisplay(),this.generateDatasetResourceDisplay())}});t.default=i,e.exports=t.default}).call(this)}finally{}},548:function(e,t,a){try{(function(){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),r=l(s),n=a(17),i=a(18),u=a(32),o=r.default.createClass({displayName:"DatasetList",handleSelect:function(e){this.props.updateSearchState(this.props.query,e)},generateDisplayPanel:function(){var e="";return e=""!=this.props.datasetList?r.default.createElement(i.Panel,{className:"clickablePanel",bsStyle:"primary"},r.default.createElement("label",{className:"control-label"},r.default.createElement("span",null,"Dataset List")),this.props.datasetList.datasetList.map(function(e,t){return r.default.createElement(n.Link,{key:t,to:"dashboard/OpenDataSet?RecordID="+e.recordID,target:"_blank"},r.default.createElement(i.Panel,{bsStyle:"default",header:r.default.createElement("span",null,e.title)},e.description.length>650?e.description.substring(0,650)+"...":e.description,r.default.createElement("br",null),r.default.createElement("br",null),"Publisher: ",e.publisher,r.default.createElement("br",null),"Format: ",e.keywords.split(",").map(function(e,t){return r.default.createElement("span",{key:t,className:"badge"},e)}),r.default.createElement("br",null),"Published Date: ",e.publishDate))}),r.default.createElement(i.Pagination,{prev:!0,next:!0,first:!0,last:!0,ellipsis:!0,boundaryLinks:!0,items:this.props.datasetList.maxPage,maxButtons:6,activePage:this.props.datasetList.currentPage,onSelect:this.handleSelect})):r.default.createElement(i.Panel,{className:"clickablePanel",bsStyle:"primary"},r.default.createElement("div",null,"No dataset available.")),r.default.createElement("div",null,e)},mixins:[u.History],handleSearch:function(e){e.preventDefault(),console.log("handle search"),this.props.updateSearchState(e.target.search.value,1)},render:function(){return r.default.createElement("div",{className:"faq-page",key:"faq"},r.default.createElement("div",{className:"page-header"},r.default.createElement("h1",null,"WellCat Open Dataset")),r.default.createElement(i.Well,null,r.default.createElement("span",{className:"glyphicon glyphicon-info-sign","aria-hidden":"true"})," This is a WellCat open data portal. We share these datasets with public for general interested, or research. It is intended to provide information to help improve health and wellness of cat which aligns with our company mission. All the sensitive information is muted in those datasets. We follow the strict privacy and data collection policy."),r.default.createElement("form",{onSubmit:this.handleSearch},r.default.createElement("label",{className:"control-label"},r.default.createElement("span",null,"Search Dataset")),r.default.createElement("div",{className:"input-group"},r.default.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"Search for..."}),r.default.createElement("span",{className:"input-group-btn"},r.default.createElement("button",{className:"btn btn-primary",type:"submit"},r.default.createElement("span",{className:"glyphicon glyphicon-search","aria-hidden":"true"}))))),r.default.createElement("br",null),this.generateDisplayPanel())}});t.default=o,e.exports=t.default}).call(this)}finally{}},549:function(e,t,a){try{(function(){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),r=l(s),n=(a(17),a(18),a(32)),i=a(30),u=l(i),o=a(548),c=l(o),d=a(547),p=l(d),f=r.default.createClass({displayName:"OpenDataset",getInitialState:function(){return{dataset:"",datasetList:"",reload:!1}},componentWillReceiveProps:function(e){if(e.location.query.RecordID&&parseInt(e.location.query.RecordID,10)>0){var t={RecordID:e.location.query.RecordID},a={};u.default.ajax({url:"http://localhost:8888/wellcat/retrievedataset.php",type:"POST",data:{postData:JSON.stringify(t)},success:function(e){a=JSON.parse(e),null!=a?this.setState({dataset:a}):this.setState({dataset:""})}.bind(this)})}else if(void 0!=e.location.query.q){var l=1;void 0!=e.location.query.page&&(l=e.location.query.page);var t={criteria:e.location.query.q,page:l},a={};u.default.ajax({url:"http://localhost:8888/wellcat/retrievedatasetlist.php",type:"POST",data:{postData:JSON.stringify(t)},success:function(e){a=JSON.parse(e),null!=a?this.setState({datasetList:a}):this.setState({datasetList:""})}.bind(this)})}else{var l=1;void 0!=this.props.location.query.page&&(l=this.props.location.query.page);var t={page:l},a={};u.default.ajax({url:"http://localhost:8888/wellcat/retrievedatasetlist.php",type:"POST",data:{postData:JSON.stringify(t)},success:function(e){a=JSON.parse(e),null!=a?this.setState({datasetList:a}):this.setState({datasetList:""})}.bind(this)})}},componentWillMount:function(){if(console.log("componentWillMount-----"),this.props.location.query.RecordID&&parseInt(this.props.location.query.RecordID,10)>0){var e={RecordID:this.props.location.query.RecordID},t={};u.default.ajax({url:"http://localhost:8888/wellcat/retrievedataset.php",type:"POST",data:{postData:JSON.stringify(e)},success:function(e){t=JSON.parse(e),null!=t?this.setState({dataset:t}):this.setState({dataset:""})}.bind(this)})}else if(void 0!=this.props.location.query.q){var a=1;void 0!=this.props.location.query.page&&(a=this.props.location.query.page);var e={criteria:this.props.location.query.q,page:a},t={};u.default.ajax({url:"http://localhost:8888/wellcat/retrievedatasetlist.php",type:"POST",data:{postData:JSON.stringify(e)},success:function(e){t=JSON.parse(e),null!=t?this.setState({datasetList:t}):this.setState({datasetList:""})}.bind(this)})}else{var a=1;void 0!=this.props.location.query.page&&(a=this.props.location.query.page);var e={page:a},t={};u.default.ajax({url:"http://localhost:8888/wellcat/retrievedatasetlist.php",type:"POST",data:{postData:JSON.stringify(e)},success:function(e){t=JSON.parse(e),null!=t?this.setState({datasetList:t}):this.setState({datasetList:""})}.bind(this)})}},mixins:[n.History],updateSearchState:function(e,t){this.props.history.pushState(null,"/dashboard/OpenDataSet?q="+e+"&page="+t)},render:function(){return this.props.location.query.RecordID&&parseInt(this.props.location.query.RecordID,10)>0?r.default.createElement(p.default,{dataset:this.state.dataset}):r.default.createElement(c.default,{datasetList:this.state.datasetList,redirectHistory:this.props.history,query:this.props.location.query.q,updateSearchState:this.updateSearchState})}});t.default=f,e.exports=t.default}).call(this)}finally{}}});