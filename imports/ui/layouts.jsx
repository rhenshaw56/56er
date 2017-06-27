import React, { Component } from 'react';
import Menubar from './partials/menuBar';
import SocialIcons from './partials/socialIcons';
 
// App component - represents the whole app
export default class Layout extends Component {
    // handleHover(e) {
    //     e.preventDefault();
    //     console.log("shut it");
    //     $("#wrapper").toggleClass("menu");
    // }
 
  render() {
    return (
        <div id="wrapper" className="row">
          <Menubar className=""/>
          <div id="page-content-wrapper" className="row">
                <div className="container">
                        <div className="">
                            <h1>Rowland Henshaw</h1>
                            <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
                            <button className="btn btn-default" id="menu-toggle">Toggle Menu</button>
                            <button className="btn btn-default" >Toggle Menu</button>
                        </div>
                </div>
          </div>
          <div className="container">
            <div className="">
              <SocialIcons />
            </div>
          </div>
        </div>
    );
  }
}