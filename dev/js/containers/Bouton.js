import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Bouton extends Component {
	render() {
    if(this.props.global.phone !== 'NC'){
      return (
       <div className="bouton center">
           <a href={"tel:" + this.props.global.phone}>
             <button className="btn btnCall white">
               <i className="fa fa-phone fa-3x"></i>
               <span className="nom">{this.props.global.enterprise}</span>
             </button>
           </a>
       </div>
       );
    }else {
      return (
        <div className="bouton center">
          <button className="btn btnCallNone white">
            <i className="fa fa-phone fa-3x">
            </i>
          </button>
        </div>
        );
    }
  }
}
function matchStateToProps(state){
  return {
    global: state.global
  }
}
export default connect(matchStateToProps)(Bouton);
