import React from "react";

import "./popupempty.scss";

const PopUpEmpty = ({
  widht = "60vw",
  height = "50vh",
  show = false,
  hide,
  children,
}) => {
  return (
    <>
      {show && (
        <div className="pop__content">
          <div className="body__pop">
            <span onClick={()=> hide(false)}>x</span>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpEmpty;
