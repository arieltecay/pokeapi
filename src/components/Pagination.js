import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Pagination = (props) => {
  const { leftClick, rightClick, page, totalPages } = props;
  return (
    <div className="pagination">
      <button onClick={leftClick}>
        <div>
          <KeyboardBackspaceIcon />
        </div>
      </button>
      <div>
        {page} - {totalPages}
      </div>
      <button onClick={rightClick}>
        <div>
          <ArrowRightAltIcon />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
