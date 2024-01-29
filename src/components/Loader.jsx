import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <LoadingOutlined
        style={{
          fontSize: "100px",
          color: `#3254a8
`,
        }}
      />
    </div>
  );
};

export default Loader;
