webpackJsonp([3],{407:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(1),u=a(n),r=(l(18),l(19)),d=l(408),c=a(d),s=u.default.createClass({displayName:"OpenDataset",getInitialState:function(){return{modalShow:!1}},render:function(){var e=this,t=function(){return e.setState({modalShow:!1})};return u.default.createElement("div",{className:"faq-page",key:"faq"},u.default.createElement("div",{className:"page-header"},u.default.createElement("h1",null,"Publish Dataset")),u.default.createElement(r.Well,null,u.default.createElement("span",{className:"glyphicon glyphicon-info-sign","aria-hidden":"true"})," Welcome to publish Dataset page. Fill out each fields, add data resources below, and press submit to save."),u.default.createElement(r.Panel,{bsStyle:"primary",header:u.default.createElement("span",null,"Publish New Dataset")},u.default.createElement("form",null,u.default.createElement(r.Input,{type:"text",label:"Dataset Title",placeholder:"Title",className:"underline"}),u.default.createElement(r.Input,{type:"text",label:"Publisher",placeholder:"Publisher",className:"underline"}),u.default.createElement(r.Input,{type:"text",label:"Subject",placeholder:"Subject",className:"underline"}),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{htmlFor:"comment"},"Description"),u.default.createElement("textarea",{className:"form-control",rows:"5",id:"description",placeholder:"Description",required:!0})),u.default.createElement(r.Input,{type:"text",label:"License",placeholder:"License",className:"underline"}),u.default.createElement(r.Input,{type:"text",label:"Keywords",placeholder:"Enter keywords to help search the dataset. Seperate by coma.",className:"underline"}),u.default.createElement("label",{htmlFor:"Resources"},"Resources"),u.default.createElement(r.Table,{bordered:!0},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"Resource Name"),u.default.createElement("th",null,"Format"),u.default.createElement("th",null,"Language"),u.default.createElement("th",null,"File"),u.default.createElement("th",null,"Edit"),u.default.createElement("th",null,"Delete"))),u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("td",null,"Authorities and Expenditures by vote and statutory authorities (2010-11 to 2014-15)"),u.default.createElement("td",null,u.default.createElement("span",{className:"badge"},"XLS")),u.default.createElement("td",null,"English"),u.default.createElement("td",null,"catbreed.xls"),u.default.createElement("td",null,u.default.createElement(r.Button,{value:"Edit",bsStyle:"primary",onClick:function(){return e.setState({modalShow:!0})}},"Edit")),u.default.createElement("td",null,u.default.createElement(r.Button,{value:"Delete",bsStyle:"danger"},"Delete"))),u.default.createElement("tr",{style:{textAlign:"center"}},u.default.createElement("td",{colSpan:"6",style:{textAlign:"center"}},u.default.createElement(r.Button,{value:"add",bsStyle:"warning",onClick:function(){return e.setState({modalShow:!0})}},"Add New Resource"))))),u.default.createElement(r.Row,{style:{textAlign:"center"}},u.default.createElement(r.Col,{md:6},u.default.createElement(r.Button,{value:"Submit",bsStyle:"success"},"Submit")),u.default.createElement(r.Col,{md:6},u.default.createElement(r.Button,{value:"Cancel",bsStyle:"default"},"Cancel"))),u.default.createElement(c.default,{show:this.state.modalShow,onHide:t}))))}});t.default=s,e.exports=t.default}).call(this)}finally{}},408:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},u=l(1),r=a(u),d=(l(18),l(19)),c=r.default.createClass({displayName:"PublishDatasetModal",render:function(){return r.default.createElement(d.Modal,n({},this.props,{"aria-labelledby":"contained-modal-title-sm"}),r.default.createElement(d.Modal.Header,{closeButton:!0},r.default.createElement(d.Modal.Title,{id:"contained-modal-title-sm"},"Add New Resource")),r.default.createElement(d.Modal.Body,null,r.default.createElement(d.Input,{type:"text",label:"Resource Name",placeholder:"Resource Name",className:"underline"}),r.default.createElement(d.Input,{type:"text",label:"Format",placeholder:"Format",className:"underline"}),r.default.createElement(d.Input,{type:"text",label:"Language",placeholder:"Language",className:"underline"}),r.default.createElement(d.Input,{value:"Download",type:"file",bsStyle:"success"})),r.default.createElement(d.Modal.Footer,null,r.default.createElement(d.Button,{value:"Submit",bsStyle:"primary"},"Submit"),r.default.createElement(d.Button,{onClick:this.props.onHide},"Close")))}});t.default=c,e.exports=t.default}).call(this)}finally{}}});