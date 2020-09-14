import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  classes += props.liked === false ? "-o" : "";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
