import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import Modal from "../../components/modal/index";
import './index.css';

const Home = (props) => {

    const { getData, getDetail, list} = props;
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [suggestion,setSuggestion] = useState([]);
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    const seeModal = (id) =>{
        setShow(true);
        getDetail(id);
    }

    const onChangeHandler = (text) => {
        let matches = []
        if(text.length>0){
            matches = list.filter(item =>{
                const regex = new RegExp(`${text}`,"gi");
                return item.title.match(regex)
            })
        }
        console.log(suggestion);
        setSuggestion(matches);
        setText(text);
    }

    const onSuggestHandler = (value) => {
        console.log(value);
         setText(value);
        //  setSuggestion([]);
    }

    return(
            <div>
                <div className='search-input'>
                    <input type='text' onChange={e => onChangeHandler(e.target.value)} value={text}
                        // onBlur={() =>{
                        //     setTimeout(() => {
                        //         setSuggestion([])
                        //     },100);
                        // }}
                    />
                    <input type="date"/>
                    {suggestion.length < 1 ? (
                        <div>A</div>
                    ) : (
                        <div>
                            {suggestion.map((item,idx) => {
                                return (<div className={idx} onClick={() => onSuggestHandler(item.title)}>{item.title}</div>)
                            })}
                        </div>
                    )}
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
      getDetail: (id) => dispatch(action.getDetail(id))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
