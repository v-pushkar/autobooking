import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Dropmenu.scss";
import { connect } from "react-redux";

const Dropmenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (event, index) => {
    handleClose();

    const obj = { type: props.dataType, value: index };
    props.addSerchData({ ...obj });
  };
  return (
    <div className="dropmenu-wrapper">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.menuName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.itemsData.map((i, idx) => (
          <MenuItem
            key={i.id}
            onClick={(event) => handleMenuItemClick(event, i.slug)}
            data-name={i.itemsData}
          >
            {i.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listsData3: state.listsData,
});

// const mapDispatchToProps = {
//   addSerchData,
//   addSearchDaraOnReload,
//   getListTerms,
// };

export default connect(mapStateToProps, null)(Dropmenu);
