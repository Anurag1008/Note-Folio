import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { branchesUrl } from "../utils/branchUrls";
import Card from "../components/Card";
import axios from 'axios';

const Semester = ({ selectedBranch }) => {
  const [semesters, setSemesters] = useState([]);
  
  useEffect(()=>{
    axios.get(`${branchesUrl}`).then((response)=>setSemesters(response.semesters)
  )},[])

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
