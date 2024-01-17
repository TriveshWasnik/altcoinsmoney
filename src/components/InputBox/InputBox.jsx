import React from "react";

function InputBox({ className = "", label = "", labelmax = "", img = "" }) {
  return (
    <>
      <div>
        <div className="flex content-space-between">
          <div>{label}</div>
          <div>{labelmax}</div>
        </div>
        <div style={{ position: "relative" }}>
          <input className={className} />
          <div
            style={{
              position: "absolute",
              width: "30px",
              right: "0px",
              bottom: "3px",
            }}
          >
            <img src={img} alt="" style={{ marginLeft: "-5px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBox;
