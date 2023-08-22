import React from "react";
import Card from "../components/Card";

const Branches = ({ branches, setSelectedBranch }) => {
  return (
    <div className="w-full flex flex-col items-center mt-5 px-20 pb-20">
      <h1 className="text-blue-500 font-bold text-3xl mb-8">
        Select Your Branch
      </h1>
      <div className="grid gap-20 grid-cols-3">
        {branches.map((branch) => (
          <Card
            bid={branch._id}
            name={branch.name}
            description={branch.description}
            imgUrl={branch.imgUrl}
            setSelectedBranch={setSelectedBranch}
            type="branch"
          />
        ))}
      </div>
    </div>
  );
};

export default Branches;
