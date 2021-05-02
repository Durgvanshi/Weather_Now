import React from "react";

const Spinner = () => {
  return (
    <div class="ui segment">
      <div class="ui active loader">
        <div className="ui large text loader">Loading...</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Spinner;
