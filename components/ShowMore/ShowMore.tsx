"use client";

import React, { FC } from "react";
import { ShowMoreProprs } from "./ShowMore.types";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore: FC<ShowMoreProprs> = ({ isNext, pageNumber }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
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
