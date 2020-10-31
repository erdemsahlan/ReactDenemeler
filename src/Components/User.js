import React, { Component } from 'react'
import PropTypes from "prop-types";

 class User extends Component {
   onClickEvent(e){
      console.log(this);
      
   }
 
  render() {
    const {name,department,salary}=this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header.d-flex.justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>{name}</h4>
            <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>

          </div>
          
          
      </div>
      
  </div>
    )
  }
}
User.defaultProps={
  name :"bilgi yok",
  salary :"bilgi yok",
  department :"bilgi yok"
}

User.propTypes={
  name :PropTypes.string.isRequired,
  salary :PropTypes.string.isRequired,
  department :PropTypes.string.isRequired
}
export default User;