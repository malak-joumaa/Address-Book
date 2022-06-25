import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ btn_name, page }) => {
  var navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/" + page);
        }}
      >
        {btn_name}
      </button>
    </>
  );
};

export default Button;
