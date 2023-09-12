"use client";

import React, { FC } from "react";
import { CustomButtonProps } from "./CustomButton.types";
import Image from "next/image";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  isDisabled,
  rightIcon,
  textStyles,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
