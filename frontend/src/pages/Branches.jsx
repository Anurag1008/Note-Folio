import React, { useEffect, useState } from "react";
import { branchesUrl } from "../utils/branchUrls";
import BranchCard from "../components/BranchCard";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    const fetchBranches = async () => {
      let response = await fetch(branchesUrl);
      response = await response.json();
      setBranches(response.data);
    };

    fetchBranches();
  }, []);
  return (
    <div className="w-full flex flex-col items-center mt-5 px-20 pb-20">
      <h1 className="text-blue-500 font-bold text-3xl mb-8">
        Select Your Branch
      </h1>
      <div className="grid gap-20 grid-cols-3">
        {branches.map((branch) => (
          <BranchCard
            name={branch.name}
            description={branch.description}
            imgUrl={branch.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Branches;
