import React from "react";

import "./popupempty.scss";

const PopUpEmpty = ({
  width = "80vw",
  height = "50vh",
  show = false,
  hide,
  children,
}) => {
  return (
    <>
      {show && (
        <div className="pop__content">
          <div className="body__pop" style={{width}}>
            <span><label onClick={()=> hide(false)}>x</label></span>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpEmpty;
