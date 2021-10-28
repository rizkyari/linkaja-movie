import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import './index.css';

const Home = (props) => {

    const { getData, list} = props;

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return(
            <div>
                { list.length < 1 ? (
                    <div></div>
                ) : (<div className='card-wrapper'> 
                    {list.map((item,idx) => {
                        return(
                            <div key={idx} className='card-container'>
                                <img src={item.image} alt='img' className='img-card'/>
                                <div className='title-card'>{item.title}</div>
                                <button>see detail</button>
                            </div>
                        )
                    })}
                </div>) }
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
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
