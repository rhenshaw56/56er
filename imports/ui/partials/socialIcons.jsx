import React, { Component } from 'react';

// App component - represents the whole app
export default class SocialIcons extends Component {
 
  render() {
    return (
        <div className="d-flex justify-content-center soc">
            <div className="">
                <div className="soc-icon">
                   <a href="#" className="fa fa-facebook "></a>
                </div>
                <div className="soc-icon">
                   <a href="#" className="fa fa-twitter"></a>
                </div>
                <div className="soc-icon">
                    <a href="#" className="fa fa-google"></a>
                </div>
                <div className="soc-icon">
                    <a href="#" className="fa fa-instagram"></a>
                </div>
            </div>
        </div>
    );
  }
}