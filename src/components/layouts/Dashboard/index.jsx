import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {

    //console.log(this.context);

    // var name = this.context.router.getCurrentPath();

    const { pathname } = this.props.location;

    var title = <span><a href="http://startreact.com/" title="Start React" rel="home"><img src="http://startreact.com/wp-content/themes/dazzling-child/images/logo.png" alt="Start React" title="Start React" height="35px" />&nbsp;SB Admin React - StartReact.com</a></span>;
    
    return (
        <div className="dashboard-page ui-view"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand">WellCat<br/><small>Meow</small></h2> 
                  <img src={require("../../../common/images/flat-avatar1.png")} className="user-avatar" />
                  <br />
                  <Link to="/Login" className="btn btn-white btn-outline btn-rounded btn-sm">Login</Link>
                  <Link to="/Register" className="btn btn-white btn-outline btn-rounded btn-sm">Register</Link>
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                    <Link to="/dashboard/overview">Overview</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/AboutUS">About Us</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/PublishDataset">Publish Dataset</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/OpenDataset">Open Dataset</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/PublicStats">Population Statics</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/AboutUs">About Us</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/FAQ">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/SearchStatistics">Search Cat Statistics</Link>
                  </li>
                </ul> 
              </div>

               <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">{this.props.children}</div> || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>

                
            </div> 
          </div> 
        </div>
    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
