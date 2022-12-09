import React, { useRef, useState } from "react";
import { getStars } from "../../../../assets/helpers/helper";

import "./Comment.css";

const Comment = ({ comment }) => {
  const contentRef = useRef();
  const infoRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  const expandComment = () => {
    setIsExpanded(true);
    contentRef.current.classList.remove("comment__content--clamped");
    infoRef.current.classList.remove("comment__info-container--hidden");
  };
  return (
    <div className="comment">
      <div className="comment__title f-bold">{comment.title}</div>
      <div className="comment__rating flex">
        {getStars(comment.stars).map((star, idx) => (
          <div key={idx}>{star}</div>
        ))}
      </div>
      <div
        className="comment__content comment__content--clamped f-regular"
        ref={contentRef}
      >
        {comment.comment}
        {!isExpanded ? (
          <button
            className="btn f-regular comment__read-more-btn comment__read-more-btn--hover"
            onClick={expandComment}
          >
            Read more
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        className="comment__info-container comment__info-container--hidden"
        ref={infoRef}
      >
        <div className="comment__info f-regular">
          {`${comment.user} | ${comment.date} ${
            comment.verified ? "| Verified" : ""
          } ${comment.incentivised ? "| Incentivised Review" : ""}`}
        </div>
        {comment.color ? (
          <div className="comment__info f-regular">Color: {comment.color}</div>
        ) : (
          ""
        )}
      </div>

      <div className="comment__voting-wrapper flex f-regular">
        Helpful ?
        <div className="comment__feedback flex">
          <div className="vote-thumbs-up">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.79143 10.254V9.40572H2V16H6.79143V14.7719M6.79143 10.254C6.79143 10.254 7.94834 9.61701 8.5 9C9.15551 8.26684 9.13417 8.27672 9.66629 6.76801C9.96004 5.93512 10.1454 4.1303 10.1454 4.1303C10.1454 4.1303 11.1213 3.83713 11.5829 4.1303C12.0694 4.43932 12.5411 5.84347 12.5411 6.76801C12.5411 7.69254 12.3375 8.52648 12.3375 8.52648H16.8534C18.77 8.9661 17.8117 12.0434 17.3326 13.8019C16.8534 15.5604 14.9369 15.8697 14.9369 15.8697H9L6.79143 14.7719M6.79143 10.254V14.7719"
                stroke="black"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <span className="feedback__count">0</span>
        </div>
        <div className="comment__feedback flex">
          <div className="vote-thumbs-down">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.79143 9.74598V10.5943H2V4H6.79143V5.22814M6.79143 9.74598C6.79143 9.74598 7.94834 10.383 8.5 11C9.15551 11.7332 9.13417 11.7233 9.66629 13.232C9.96004 14.0649 10.1454 15.8697 10.1454 15.8697C10.1454 15.8697 11.1213 16.1629 11.5829 15.8697C12.0694 15.5607 12.5411 14.1565 12.5411 13.232C12.5411 12.3075 12.3375 11.4735 12.3375 11.4735H16.8534C18.77 11.0339 17.8117 7.95657 17.3326 6.19809C16.8534 4.43962 14.9369 4.1303 14.9369 4.1303H9L6.79143 5.22814M6.79143 9.74598V5.22814"
                stroke="black"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <span className="feedback__count">0</span>
        </div>
      </div>

      {isExpanded ? (
        <div className="comment__report-btn comment__report-btn--hover f-regular">
          Report review
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comment;
