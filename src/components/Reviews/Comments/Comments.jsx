import React from "react";
import Comment from "./Comment/Comment";

import "./Comments.css";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      {comments?.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
