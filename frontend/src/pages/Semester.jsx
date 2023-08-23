import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { branchesUrl } from "../utils/branchUrls";
import Card from "../components/Card";

const Semester = ({ selectedBranch }) => {
  const [semesters, setSemesters] = useState([]);
  useEffect(() => {
    const getBranch = async () => {
      let response = await fetch(`${branchesUrl}/${selectedBranch}`);
      response = await response.json();
      response = response.data;
      setSemesters(response);
    };
    getBranch();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-5 px-20 pb-20">
      <h1 className="text-blue-500 font-bold text-3xl mb-8">
        Select Your Branch
      </h1>
      <div className="grid gap-20 grid-cols-3">
        {semesters.map((branch) => (
          <Card
            name={branch.name}
            description={branch.description}
            imgUrl={branch.imgUrl}
            type="semester"
          />
        ))}
      </div>
    </div>
  );
};

export default Semester;
