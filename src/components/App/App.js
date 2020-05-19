import React from 'react';
import Menu from './../menu/Menu'
import {connect} from "react-redux";
import './App.scss';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
        {/* <div className="info-row">
          resalt: {props.parse_link_data}
        </div> */}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  search_data: state.search_data,
  parse_link_data: state.parse_link_data,
  listsData: state.listsData,
});

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(App);
