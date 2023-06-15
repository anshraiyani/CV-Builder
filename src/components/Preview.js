import React from "react";

export default function Preview(props) {
  return (
    <div className="preview-wrapper">
      <div className="preview-header">
        <div className="preview-header-name">
          <div className="preview-name">{props.userInfo.name}</div>
          <h3 className="preview header-number">{props.userInfo.description}</h3>
        </div>
        <div className="preview-header-photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpX4tftzfCMF8ot6Z79LrtF_wLS3HjbIczhQsJc_rKzvqJnXvjE7OYUoiW-YB6yCJlOk&usqp=CAU"
            className="preview-photo"
            alt="pfp"
          />
        </div>
      </div>
      <div className="preview-contact-info">
        <span>{props.userInfo.number}</span>
        <span>{props.userInfo.email}</span>
        <span>{props.userInfo.country}</span>
      </div>
    </div>
  );
}
