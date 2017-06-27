import React, { Component } from 'react';
 
// App component - represents the whole app
export default class Menubar extends Component {
  handleHover(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menu");
  }

  handleLeave(e) {
    e.preventDefault();
    $("#wrapper").removeClass("menu");
  }

  render() {
    return (
        <div id="sidebar-wrapper">
            <ol className="sidebar-nav">
                <li>
                    <a onMouseOver={this.handleHover.bind(this)} onMouseLeave={this.handleLeave.bind(this)} id="menu-toggle">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="struct">Profile</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="struct">Blog</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="struct">Gallery</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="struct">Events</a>
                </li>
            </ol>
        </div>
    );
  }
}