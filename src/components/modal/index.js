import React from 'react';
import { connect } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as action from "../../redux/actions/action";
import './index.css';

const Modal = (props) => {

    const { detail} = props;

    if (!props.show){
        return null
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{detail.title}</h3>
                </div>
                <div className="modal-body">
                    <LazyLoadImage effect='blur' src={detail.image} alt={detail.title} className="detail-image"/>
                    <div>Show Time : {detail.showTime}</div>
                    <div>Likes : {detail.like}</div>
                </div>
                <div className="modal-footer">
                    <button className="button-close" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getDetail: (id) => dispatch(action.getDetail(id))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);