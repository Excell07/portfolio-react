import React from 'react';
import {Link} from 'react-router-dom';

class PrimaryTwoCol extends React.Component {
  render(){
    return (
      <div className="full-width-row home-primary-backGround">
        <div className="row-container">
          <h1 className="h1-header text-center lrg-btm-sp">My Focus</h1>
          <div className="two-col-primary__container">
            <div className="two-col-primary__container__item">
              <i className="far fa-file-code two-col-primary__container__item__icon"></i>
              <h3 className="two-col-primary__container__item__header">FrontEnd Development</h3>
              <p className="two-col-primary__container__item__para">Making things look good online using the latest technology</p>
            </div>

            <div className="two-col-primary__container__item">
              <i className="fab fa-node-js two-col-primary__container__item__icon"></i>
              <h3 className="two-col-primary__container__item__header">Backend Development</h3>
              <p className="two-col-primary__container__item__para">Powering applications with server-side logic is not my specialty</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/skills" className="btn btn--blue">My Tool Kit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PrimaryTwoCol;