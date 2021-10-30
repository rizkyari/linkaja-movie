import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import './filter.css';

const FilterDate = (props) => {
  const { allData, filterDate, resetFilter } = props;
  const [firstDate, setfirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  const dateHandler = () => {
    const startDate = new Date(firstDate);
    const endDate = new Date(lastDate);

    let result = allData.filter((a) => {
      let date = new Date(a.showTime);
      return date >= startDate && date <= endDate;
    });

    filterDate(result);
  };

  const resetDate = (value) => {
    resetFilter(value);
    setfirstDate("");
    setLastDate("");
  };

  return (
    <div className="filter-date">
      <div className="filter-container">
      <div className='first-date'>
        <h5>Filter From</h5>
        <input
          type="date"
          onChange={(e) => setfirstDate(e.target.value)}
          value={firstDate}
        />
      </div>
      <div className='last-date'>
        <h5>Untill</h5>
        <input
          type="date"
          onChange={(e) => setLastDate(e.target.value)}
          value={lastDate}
        />
      </div>
      <div className="button-filter">
        <button onClick={() => dateHandler()} className="filter-handler">Submit</button>
        <button onClick={() => resetDate(allData)} className="filter-handler">Reset</button>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allData: state.allData,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    filterDate: (data) => dispatch(action.filterDate(data)),
    resetFilter: (data) => dispatch(action.resetFilter(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterDate);
