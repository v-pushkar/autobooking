import React, { useEffect } from "react";
import Dropmenu from "./../Dropmenu";
import { connect } from "react-redux";
import {
  addSerchData,
  addSearchDaraOnReload,
  getListTerms,
} from "./../../actions";
import {  
  getDataObjFromStorage,
  storageCheck,
  createParse_link_data,
} from "./../../utils/storage";

import "./Menu.scss";

const _baseURL = "https://beta.autobooking.com/api/test/v1/search/";


const listNames = ["terms", "brands_terms", "styles"];
const Menu = (props) => {
  useEffect(() => {
    listNames.forEach((i) => {
      fetch(_baseURL + i)
        .then((response) => {
          return response.json();
        })
        .then((data) => {          
          props.getListTerms(i, data.data);
        });
    });

    if (storageCheck("parse_link")) {
      window.history.pushState(
        "",
        "parse_link",
        createParse_link_data(getDataObjFromStorage("parse_link"))
      );
      props.addSearchDaraOnReload();
    }
  }, []);
  const onItemSelect = (data) => {
    window.history.pushState("", "parse_link", props.parse_link_data);
    props.addSerchData(data);  
  };
  if (
    props.listsData.terms.data.length !== 0 &&
    props.listsData.brands_terms.data.length !== 0 &&
    props.listsData.styles.data.length !== 0
  ) {
    return (
      <div className="MenuWrapper">
        <Dropmenu
          key={props.listsData.terms.name}
          menuName={props.listsData.terms.menuName}
          itemsData={props.listsData.terms.data}
          dataType={props.listsData.terms.name}
          addSerchData={onItemSelect}
        />
         <Dropmenu
          key={props.listsData.brands_terms.name}
          menuName={props.listsData.brands_terms.menuName}
          itemsData={props.listsData.brands_terms.data}
          dataType={props.listsData.brands_terms.name}
          addSerchData={onItemSelect}
        />
         <Dropmenu
          key={props.listsData.styles.name}
          menuName={props.listsData.styles.menuName}
          itemsData={props.listsData.styles.data}
          dataType={props.listsData.styles.name}
          addSerchData={onItemSelect}
        />        
        <div>info: {props.parse_link_data}</div>
      </div>
    );
  }
  if (props.listsData.terms.data.length === 0) {
    return <div className="MenuWrapper">loading...</div>;
  }
};

const mapStateToProps = (state) => ({
  search_data: state.search_data,
  parse_link_data: state.parse_link_data,
  listsData: state.listsData,
});

const mapDispatchToProps = {
  addSerchData,
  addSearchDaraOnReload,
  getListTerms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
