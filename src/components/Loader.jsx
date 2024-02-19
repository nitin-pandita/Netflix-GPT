import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div className="z-30">
      <Spin className="spinner" />
    </div>
  );
};

export default Loader;
