import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import Modal from "../../components/modal/index";
import Search from '../../components/search/search';
import './index.css';

const Home = (props) => {

    const { getData, getDetail ,list} = props;
    const [show, setShow] = useState(false);
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    const seeModal = (id) =>{
        setShow(true);
        getDetail(id);
    }

    return(
            <div>
                <Search/>
                <div className='filter-date'>
                    <input type="date"/>
                </div>
                { list.length < 1 ? (
                    <div></div>
                ) : (<div className='card-wrapper'> 
                    {list.map((item,idx) => {
                        return(
                            <div key={idx} className='card-container'>
                                <img src={item.image} alt='img' className='img-card'/>
                                <div className='title-card'>{item.title}</div>
                                <button onClick={() => seeModal(item.id)}>see detail</button>
                            </div>
                        )
                    })}
                </div>) }
                <Modal show={show} onClose={()=> setShow(false)}/>
            </div>
    )
}


const mapStateToProps = (state) => {
    return {
        list: state.datas,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getData: () => dispatch(action.getData()),
      getDetail: (id) => dispatch(action.getDetail(id)),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
