import React from "react";

const CommentList = ({ list, clearComment }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <div className="komen">
          <button
            onClick={() => {
              clearComment(list.CommentName);
            }}
          >
            X
          </button>

          <div id="name">{list.CommentName}</div>
          <div id="cment">{list.Comment}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
