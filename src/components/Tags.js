import React from "react";

function Tags() {
  return (
    <>
      <aside className="menu">
        <p className="menu-label is-size-4">Tags</p>
        <ul className="menu-list">
          <li className="my-1">
            <span className="tag is-light is-medium ">Dashboard</span>
          </li>
          <li className="my-1">
            <span className="tag is-light is-medium ">Customers</span>
          </li>
          <li className="my-1">
            <span className="tag is-light  is-medium ">Authentication</span>
          </li>
          <li className="my-1">
            <span className="tag is-light is-medium ">Payments</span>
          </li>
          <li className="my-1">
            <span className="tag is-light is-medium ">Transfers</span>
          </li>
          <li className="my-1">
            <span className="tag is-light is-medium ">Balance</span>
          </li>
          <li className="my-1">
            <span className="tag is-light ">Question</span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Tags;
