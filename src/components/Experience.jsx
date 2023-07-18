import React from "react";
import ExpCard from "../common/ExpCard";

const Experience = () => {
  const title = `experience`;
  const data = () => (
    [{
      title:`Thermo Fisher Scientific`,
      subtitle:`Software Engineer`,
      duration:`Aug 2021-present`
    },
  ]
  )
  return (
    <div className="md:px-4  flex w-full flex-col uppercase h-full">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <div className="flex flex-col pt-4 justify-around">
        {data().map((e,i)=>
        {
          return <ExpCard {...e} key={i} />
        })}
      </div>
    </div>
  );
};

export default Experience;
