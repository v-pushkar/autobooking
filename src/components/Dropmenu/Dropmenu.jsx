import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Dropmenu.scss";
import { connect } from "react-redux";

const Dropmenu = (props) => {
  const [selectetVal, setSelectetVal] = React.useState(null);

  const handleMenuItemClick = (event, index) => {
    const obj = { type: props.dataType, value: index };
    props.addSerchData({ ...obj });
  };

  const handleChange = (event) => {
    setSelectetVal(event.target.value);
    const obj = { type: props.dataType, value: event.target.value };
    props.addSerchData({ ...obj });
  };

  return (
    <div className="dropmenu-wrapper">
      <label>
        {props.menuName}:
        <select value={props.selectedVal} onChange={handleChange}>
          {props.itemsData.map((i, idx) => (
            <option
              key={i.id}              
              data-name={i.itemsData}
              value={i.slug}
            >
              {i.label}
            </option>
          ))}
        </select>
      </label>     
    </div>
  );
};

const mapStateToProps = (state) => ({
  listsData3: state.listsData,
});

export default connect(mapStateToProps, null)(Dropmenu);
