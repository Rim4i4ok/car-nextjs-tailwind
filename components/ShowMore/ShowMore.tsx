"use client";

import React, { FC } from "react";
import { ShowMoreProprs } from "./ShowMore.types";
import CustomButton from "../CustomButton";

const ShowMore: FC<ShowMoreProprs> = ({ isNext, pageNumber, setLimit }) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="w-ful flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
