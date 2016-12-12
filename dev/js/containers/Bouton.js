import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Bouton extends Component {
	render() {
    if(this.props.global.phone !== 'NC'){
      return (
       <div className="bouton">
           <a href={"tel:" + this.props.global.phone}>
             <button className="btnCall">
               <i id="phone" className="fa fa-phone"></i>
               <span className="nom">{this.props.global.enterprise}</span>
             </button>
           </a>
       </div>
       );
    }else {
      return (
        <div className="bouton">
          <button className="btnCallNone">
            <i id="phone" className="phoneIcone">
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
