import React from "react";

export default function InputText(props) {
  function modifyUserInfo(e) {
    props.setUserInfo({
            ...props.userInfo,
            [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="input-wrapper">
      <div className="input-personal-info">
        <h3>Personal Information</h3>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={props.userInfo.name}
            onChange={modifyUserInfo}
            name="name"
          />
        </form>
        <form>
          <label>Mobile No</label>
          <input
            type="number"
            value={props.userInfo.number}
            onChange={modifyUserInfo}
            name="number"
          />
        </form>
        <form>
          <label>Job Description</label>
          <input
            type="text"
            value={props.userInfo.description}
            onChange={modifyUserInfo}
            name="description"
          />
        </form>
        <form>
          <label>Email</label>
          <input
            type="email"
            value={props.userInfo.email}
            onChange={modifyUserInfo}
            name="email"
          />
        </form>
        <form>
          <label>Country</label>
          <input
            type="text"
            value={props.userInfo.country}
            onChange={modifyUserInfo}
            name="country"
          />
        </form>
      </div>
    </div>
  );
}
