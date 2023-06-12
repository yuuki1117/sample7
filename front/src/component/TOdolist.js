import React from "react";

const TOdolist = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.content}</h2>
      <h2>{props.order}</h2>
      TOdolist
    </div>
  );
};

export default TOdolist;
