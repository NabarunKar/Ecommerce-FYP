import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Success.scss";

const Success = () => {
  return (
    <div className="success">
      <h1>
        Payment Success <CheckCircleIcon />
      </h1>
    </div>
  );
};

export default Success;
