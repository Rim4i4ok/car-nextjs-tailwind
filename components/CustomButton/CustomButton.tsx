"use client";

import React, { FC } from "react";
import { CustomButtonProps } from "./CustomButton.types";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
