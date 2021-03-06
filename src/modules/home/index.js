import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import Modal from "../../components/modal/index";
import Search from '../../components/search/search';
import FilterDate from "../../components/filter-date/filter";
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
                <FilterDate/> 
                { list.length < 1 ? (
                    <div></div>
                ) : (<div className='card-wrapper'> 
                    {list.map((item,idx) => {
                        return(
                            <div key={idx} className='card-container'>
                                <LazyLoadImage src={item.image} alt='img' className='img-card' effect="blur"/>
                                <div className='title-card'>{item.title}</div>
                                <button onClick={() => seeModal(item.id)} className="button-35">see detail</button>
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
