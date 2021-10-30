import React,{useState} from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import SearchImg from '../../assets/images/search.png';
import './search.css';

const Search = (props) => {

    const { getSearch, allData} = props;
    const [text, setText] = useState('');
    const [suggestion,setSuggestion] = useState([]);

    const onChangeHandler = (text) => {
        let matches = []
        if(text.length>0){
            matches = allData.filter(item =>{
                const regex = new RegExp(`${text}`,"gi");
                return item.title.match(regex)
            })
        }
        let slicedArr = matches.slice(0,3)
        setSuggestion(slicedArr);
        setText(text);
    }

    const onSearchHandler = () => {
        let matches = []
        if(text.length>0){
            matches = allData.filter(item =>{
                const regex = new RegExp(`${text}`,"gi");
                return item.title.match(regex)
            })
        }
        getSearch(matches);
    }

    const onSuggestHandler = (value) => {
         setText(value.title);
         setSuggestion([]);
    }

    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            onSearchHandler();
        }
    }

    return (
      <div className="search-container">
        <div className="search-wrapper">
        <div className="search-input">
          <input
            type="text"
            onChange={(e) => onChangeHandler(e.target.value)}
            onKeyPress={(e) => onKeyPressHandler(e)}
            value={text}
            className="search-text"
            placeholder="Search Here..."
            // onBlur={() =>{
            //     setTimeout(() => {
            //         setSuggestion([])
            //     },100);
            // }}
          />
          <img
            src={SearchImg}
            className="search-icon"
            alt="seach.png"
            onClick={() => onSearchHandler()}
          />
        </div>
        <div>
          {suggestion.length < 1 ? (
            <div></div>
          ) : (
            <div className="suggestion-title">
              {suggestion.map((item, idx) => {
                return (
                  <div key={idx} onClick={() => onSuggestHandler(item)}>
                    {item.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        list: state.datas,
        allData: state.allData,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getSearch: (data) => dispatch(action.getSearch(data)),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search);